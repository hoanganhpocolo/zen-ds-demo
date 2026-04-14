# Brainstorm: Zen Component Audit System

**Date:** 2026-04-14
**Branch:** component-validation
**Status:** Approved → Ready for planning

---

## Problem Statement

Zen Design System was initiated by designers — token architecture is excellent (4-tier, 1300+ primitives, 304 mode tokens) but component code needs engineering validation. 40 components, consumed by multiple internal teams, need consistent quality guarantees across: props API, accessibility, structure, and patterns.

**Goal:** Build automated audit system + visual dashboard to track component health and drive systematic fixes.

## Context

- **Repo:** monorepo (npm workspaces) — `@zen/tokens`, `@zen/components`, `@zen/icons`, `@zen/docs`, `@zen/portal`
- **Stack:** React 19, TypeScript 5.8, CSS Modules, tsup, Vite, vitest (unused)
- **Consumers:** Multiple internal VNGGames teams
- **CSS strategy:** Audit but don't change (designer-owned)

## Current State Assessment

### Strengths
- Token system: 9/10 — professional 4-tier hierarchy
- Component coverage: 40 components, consistent folder structure
- forwardRef + displayName applied universally
- Accessibility: ARIA attrs, keyboard nav present in most components
- Figma mapping: 776-line sync file

### Known Issues
| Issue | Severity | Components Affected |
|-------|----------|-------------------|
| No tests | Critical | All 40 |
| No eslint config | Critical | All |
| File size >200 LOC | High | Calendar(703), SelectField(569), Table(465), Sidebar(427), FileUploader(365) |
| Size naming inconsistency | Medium | Toggle uses `small/medium/large` vs `s/m/l` |
| Inline SVG vs @zen/icons | Medium | InputField, Checkbox, SelectField embed inline SVGs |
| Missing FieldShell | Low | Some form components lack wrapper |

## Evaluated Approaches

### Approach A: Regex + FS Scanner (Selected)
- **Pros:** Fast to build, easy to maintain, 90% accuracy, no extra deps
- **Cons:** Can't do deep type analysis, possible false positives
- **Verdict:** Good enough — we're flagging, not enforcing

### Approach B: TypeScript AST Parser (Rejected)
- **Pros:** 99% accurate, deep type validation
- **Cons:** Heavy dependency (ts-morph), 3-5x slower to build, overkill for current needs
- **Verdict:** Over-engineered for the problem

## Agreed Solution

### Architecture
```
Audit Script (Node.js) → audit-data.json → Dashboard Page (docs app)
```

### Part 1: Audit Script
- **Location:** `packages/components/scripts/audit-components.mjs`
- **Method:** File reading + regex pattern matching
- **Output:** `packages/components/src/audit-data.json` (committed to repo)
- **npm scripts:** `audit` (generate), `audit:check` (CI mode, exit 1 on failures)

### 9 Audit Checks
| # | Check | Logic | Statuses |
|---|-------|-------|----------|
| 1 | forwardRef | Regex in main .tsx | pass/fail |
| 2 | displayName | Regex `.displayName =` | pass/fail |
| 3 | propsExport | Check barrel index.ts exports types | pass/fail |
| 4 | sizeNaming | Reject `small\|medium\|large` literals | pass/fail |
| 5 | iconStrategy | Detect inline `<svg` vs `@zen/icons` import | pass/warn/fail |
| 6 | accessibility | Check aria-, role=, keyboard handlers | pass/warn/fail |
| 7 | fileSize | Count lines, flag >200 | pass/warn/fail |
| 8 | cssTokens | Check .module.css uses var(--) not hardcoded hex | pass/warn |
| 9 | fieldShell | Form components use FieldShell | pass/warn/n-a |

### Part 2: Dashboard Page
- **Location:** `apps/docs/src/AuditPage.tsx`
- **UI:** Matrix table — components as rows, checks as columns
- **Color coding:** green=pass, yellow=warn, red=fail
- **Features:** Sort by score, filter by status, summary bar, link to component page
- **Dog-food:** Use `@zen/components` Table component

### Part 3: Integration
- Add `"audit"` script to `packages/components/package.json`
- Add route to `apps/docs/src/App.tsx`
- JSON committed = dashboard works without running script; diff in PR shows progress

## Design Decisions
1. Regex over AST — flagging, not enforcing
2. JSON committed to repo — visible progress in PRs
3. Dashboard in docs app — designers + engineers see same health picture
4. CSS audit = read-only — respect designer ownership
5. `n/a` status — not all checks apply to all components
6. `// audit-ignore: checkName` — escape hatch for false positives

## Risks & Mitigations
| Risk | Mitigation |
|------|-----------|
| False positives | audit-ignore comment support |
| CSS too large to scan | Sample first 500 lines |
| New components forget audit | CI integration via audit:check |
| Stale audit-data.json | Pre-commit hook or CI step to regenerate |

## Success Metrics
- All 40 components scanned with 9 checks each
- Dashboard shows real-time health matrix
- Script runs in <5 seconds
- Zero false negatives on critical checks (forwardRef, displayName)

## Next Steps
→ Create implementation plan with phased approach
→ Phase 1: Audit script
→ Phase 2: Dashboard page
→ Phase 3: CI integration + fix plan
