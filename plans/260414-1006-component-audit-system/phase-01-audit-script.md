# Phase 01: Audit Script

## Context Links

- [Plan Overview](./plan.md)
- [Brainstorm](../reports/brainstorm-260414-1006-component-audit-system.md)
- Barrel: `packages/components/src/index.ts`
- Components: `packages/components/src/{ComponentName}/`

## Overview

- **Priority:** P1
- **Status:** pending
- **Description:** Node.js script that scans all 40 components across 9 quality dimensions using filesystem reads + regex. Outputs `audit-data.json`.

## Key Insights

- Components follow consistent structure: `{Name}/{Name}.tsx`, `{Name}/{Name}.module.css`, `{Name}/index.ts`
- forwardRef + displayName already universal (brainstorm confirms)
- Toggle uses `small|medium|large` -- only known size naming violator
- Form components using FieldShell: InputField, TextArea, NumberField, SelectField
- Form components missing FieldShell: Search, Checkbox, Radio, Toggle, Slider, FileUploader (need to verify which are truly form controls)
- 15 components embed inline `<svg>`; 19 import from `@zen/icons`

## Requirements

### Functional
- Discover components by reading dirs in `packages/components/src/` that contain a `.tsx` file
- Run 9 checks per component (see check table below)
- Support `// audit-ignore: checkName` comment to suppress false positives
- Output structured JSON to `packages/components/src/audit-data.json`
- Print summary table to stdout

### Non-functional
- Run in <5 seconds for 40 components
- Zero external dependencies (use Node.js built-in `fs`, `path`)
- ESM module (`.mjs` extension)

## 9 Audit Checks

| # | ID | Logic | Statuses |
|---|-----|-------|----------|
| 1 | `forwardRef` | Regex `forwardRef` in main `.tsx` | pass/fail |
| 2 | `displayName` | Regex `.displayName\s*=` in main `.tsx` | pass/fail |
| 3 | `propsExport` | Check `index.ts` has `export type.*Props` | pass/fail |
| 4 | `sizeNaming` | Scan for `'small'|'medium'|'large'` string literals in type defs; pass if none found or uses `s|m|l` | pass/fail |
| 5 | `iconStrategy` | Detect `<svg` (warn) vs `@zen/icons` import (pass); both = warn; neither = n/a | pass/warn/n/a |
| 6 | `accessibility` | Count: `aria-` attrs, `role=`, keyboard handlers (`onKey`). pass>=2, warn=1, fail=0 | pass/warn/fail |
| 7 | `fileSize` | Count lines of main `.tsx`. pass<=200, warn<=400, fail>400 | pass/warn/fail |
| 8 | `cssTokens` | In `.module.css`: check ratio of `var(--` vs hardcoded hex `#[0-9a-f]`. warn if any hex found | pass/warn |
| 9 | `fieldShell` | For form components (InputField, TextArea, NumberField, SelectField, Search, Checkbox, Radio, Toggle, Slider, FileUploader): check import of FieldShell. Non-form = n/a | pass/warn/n/a |

## Architecture

### Component Discovery
```
1. Read dirs in packages/components/src/
2. Filter: has {DirName}.tsx file
3. Build list: [{ name, dir, mainFile, cssFile, indexFile }]
```

### Check Pipeline
```
For each component:
  1. Read mainFile content
  2. Read cssFile content (if exists)
  3. Read indexFile content
  4. Check for audit-ignore comments
  5. Run 9 checks, each returns { status, detail }
  6. Compute component score (pass=1, warn=0.5, fail=0, n/a=excluded)
```

### Output Schema (`audit-data.json`)
```json
{
  "generated": "2026-04-14T10:06:00Z",
  "summary": {
    "total": 40,
    "averageScore": 0.78,
    "passCount": 280,
    "warnCount": 30,
    "failCount": 50
  },
  "components": [
    {
      "name": "Button",
      "dir": "Button",
      "score": 0.95,
      "checks": {
        "forwardRef": { "status": "pass", "detail": "forwardRef found" },
        "displayName": { "status": "pass", "detail": "Button.displayName set" },
        "propsExport": { "status": "pass", "detail": "ButtonProps exported" },
        "sizeNaming": { "status": "pass", "detail": "Uses s/m/l/xs/xl/2xs" },
        "iconStrategy": { "status": "n/a", "detail": "No icons used" },
        "accessibility": { "status": "pass", "detail": "aria-hidden found" },
        "fileSize": { "status": "pass", "detail": "63 lines" },
        "cssTokens": { "status": "pass", "detail": "All values use tokens" },
        "fieldShell": { "status": "n/a", "detail": "Not a form component" }
      }
    }
  ]
}
```

## Related Code Files

### To Create
- `packages/components/scripts/audit-components.mjs` -- the scanner script

### To Create (output)
- `packages/components/src/audit-data.json` -- generated audit data

### To Read (not modify)
- `packages/components/src/*/` -- all component directories
- `packages/components/src/index.ts` -- barrel exports reference

## Implementation Steps

1. **Create script file** at `packages/components/scripts/audit-components.mjs`

2. **Component discovery function**
   - Read `packages/components/src/` directory entries
   - Filter directories that contain `{DirName}.tsx` (skip non-component dirs)
   - Return array of `{ name, dir, mainFile, cssFile, indexFile }` paths

3. **Audit-ignore parser**
   - Scan file content for `// audit-ignore: checkName1, checkName2`
   - Return Set of ignored check IDs per component

4. **Implement each check as a pure function** `(content, meta) => { status, detail }`
   - `checkForwardRef(mainContent)` -- regex `/forwardRef[<(]/`
   - `checkDisplayName(mainContent, name)` -- regex `/{name}\.displayName\s*=/` or `.displayName\s*=`
   - `checkPropsExport(indexContent)` -- regex `/export\s+type\s*\{.*Props/` or `/export\s+type\s+\w+Props/`
   - `checkSizeNaming(mainContent)` -- regex `/['"](?:small|medium|large)['"]/` in type definitions only (scan between `type.*=` and `;`)
   - `checkIconStrategy(mainContent)` -- detect `<svg` and `@zen/icons` import
   - `checkAccessibility(mainContent)` -- count `aria-`, `role=`, `onKey` occurrences
   - `checkFileSize(mainContent)` -- count `\n` occurrences
   - `checkCssTokens(cssContent)` -- count `var(--` vs `#[0-9a-fA-F]{3,8}` matches
   - `checkFieldShell(mainContent, name)` -- if form component, check `FieldShell` import

5. **Form component list** -- hardcode initially:
   ```js
   const FORM_COMPONENTS = new Set([
     'InputField', 'TextArea', 'NumberField', 'SelectField',
     'Search', 'Checkbox', 'Radio', 'Toggle', 'Slider', 'FileUploader'
   ]);
   ```

6. **Score calculator**
   - `pass` = 1, `warn` = 0.5, `fail` = 0
   - Skip `n/a` from both numerator and denominator
   - Component score = sum / applicable count

7. **Main runner**
   - Discover components
   - For each: read files, parse ignores, run checks, compute score
   - Build summary (total, averageScore, passCount, warnCount, failCount)
   - Write `audit-data.json` with `JSON.stringify(data, null, 2)`
   - Print summary table to stdout using console.table or formatted output

8. **CI mode** (`--check` flag)
   - Parse `process.argv` for `--check`
   - If any critical check (forwardRef, displayName) has `fail` status: `process.exit(1)`
   - Print count of failures before exiting

## Todo List

- [ ] Create `packages/components/scripts/audit-components.mjs`
- [ ] Implement component discovery
- [ ] Implement audit-ignore parser
- [ ] Implement check: forwardRef
- [ ] Implement check: displayName
- [ ] Implement check: propsExport
- [ ] Implement check: sizeNaming
- [ ] Implement check: iconStrategy
- [ ] Implement check: accessibility
- [ ] Implement check: fileSize
- [ ] Implement check: cssTokens
- [ ] Implement check: fieldShell
- [ ] Implement score calculator
- [ ] Implement JSON output writer
- [ ] Implement stdout summary printer
- [ ] Implement --check CI mode
- [ ] Run script, verify output against known issues from brainstorm
- [ ] Confirm Toggle flagged for sizeNaming, Calendar flagged for fileSize, etc.

## Success Criteria

- Script discovers all 40 components
- JSON output matches defined schema
- Known issues from brainstorm are correctly flagged:
  - Toggle: `sizeNaming: fail`
  - Calendar (703 lines): `fileSize: fail`
  - SelectField (569 lines): `fileSize: fail`
  - Inline SVG components: `iconStrategy: warn`
- `--check` flag exits 1 when failures exist
- Runs in <5 seconds

## Risk Assessment

| Risk | Mitigation |
|------|-----------|
| False positives on sizeNaming (e.g., `'small'` in comments) | Only scan type definition blocks; audit-ignore escape hatch |
| Multi-file components (Table has many sub-files) | Scan main file only; sub-components inherit parent check |
| CSS files very large | Read full file; regex is fast enough on any reasonable size |

## Security Considerations

- Script only reads files, no network calls, no writes except audit-data.json
- No secrets or credentials involved
