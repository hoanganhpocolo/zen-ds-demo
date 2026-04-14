# Phase 02: Dashboard Page

## Context Links

- [Plan Overview](./plan.md)
- [Phase 01: Audit Script](./phase-01-audit-script.md)
- Docs app: `apps/docs/src/`
- Table component: `packages/components/src/Table/`
- Existing page pattern: `apps/docs/src/ButtonPage.tsx` (reference for page structure)

## Overview

- **Priority:** P1
- **Status:** pending (blocked by Phase 01 JSON schema)
- **Description:** React page in docs app displaying audit results as a color-coded matrix table. Dog-foods `@zen/components` Table.

## Key Insights

- Docs app uses `@zen/components` directly -- no routing library, just state-driven rendering in `App.tsx`
- Table component exports: `Table`, `TableContainer`, `TableHead`, `TableBody`, `TableRow`, `TableHeaderCell`, `TableCell`, `TextCell`
- `Badge` component available for status pills (green/yellow/red)
- `Chip` component could work for filter chips
- Import pattern: `import auditData from '@zen/components/src/audit-data.json'` won't work from docs app -- need to copy or use relative import. Better: import from built package or use a direct file read at build time via Vite's JSON import.

## Requirements

### Functional
- **Matrix table**: 40 rows (components) x 9 columns (checks) + score column
- **Status cells**: color-coded -- green (pass), yellow (warn), red (fail), gray (n/a)
- **Summary bar** at top: total score, pass/warn/fail counts with visual indicators
- **Sort**: by component name (alpha) or score (asc/desc)
- **Filter**: show all / failures only / warnings only
- **Component links**: clicking component name navigates to its docs page
- **Tooltip/detail**: hovering a status cell shows the `detail` string

### Non-functional
- Page should render instantly (JSON is static, no async)
- Keep AuditPage under 200 lines; extract helpers if needed
- Use `@zen/components` Table for the matrix (dog-fooding)
- Use `Badge` for status indicators

## Architecture

### Data Flow
```
audit-data.json (static import) --> AuditPage.tsx --> Table component
```

### Component Structure
```
AuditPage.tsx         -- main page, state for sort/filter
AuditSummaryBar.tsx   -- score overview bar (extracted if >40 lines)
audit-status-cell.module.css -- status cell colors
```

### JSON Import Strategy
The audit-data.json lives in `packages/components/src/`. The docs app at `apps/docs/` can import it via:
- Vite resolves workspace packages, so: `import auditData from '../../../packages/components/src/audit-data.json'`
- Alternatively, re-export from `@zen/components` package -- but this pollutes the component library.
- **Decision**: Direct relative import. Simple, no config changes needed. Vite handles JSON imports natively.

## Related Code Files

### To Create
- `apps/docs/src/AuditPage.tsx` -- main dashboard page
- `apps/docs/src/audit-page.module.css` -- page-specific styles (status cell colors)

### To Modify
- `apps/docs/src/App.tsx` -- add 'audit' to Page type, sidebar entry, page rendering

### To Read (not modify)
- `packages/components/src/audit-data.json` -- audit data input
- `packages/components/src/Table/Table.tsx` -- understand Table API

## Implementation Steps

1. **Create `apps/docs/src/audit-page.module.css`**
   ```css
   .status-pass { background: var(--color-green-200); color: var(--color-green-800); }
   .status-warn { background: var(--color-yellow-200); color: var(--color-yellow-800); }
   .status-fail { background: var(--color-red-200); color: var(--color-red-800); }
   .status-na   { background: var(--color-neutral-100); color: var(--color-neutral-500); }
   .summary-bar { display: flex; gap: var(--gap-medium); ... }
   .score       { font-weight: var(--font-weight-primary); ... }
   ```
   Use actual token names from `@zen/tokens`. Check `packages/tokens/` for valid CSS custom property names.

2. **Create `apps/docs/src/AuditPage.tsx`**

   a. **Imports**
   ```tsx
   import { useState, useMemo } from 'react';
   import {
     Table, TableContainer, TableHead, TableBody,
     TableRow, TableHeaderCell, TableCell, TextCell, Badge, Chip
   } from '@zen/components';
   import auditData from '../../../packages/components/src/audit-data.json';
   import styles from './audit-page.module.css';
   ```

   b. **Constants**
   ```tsx
   const CHECK_IDS = ['forwardRef','displayName','propsExport','sizeNaming','iconStrategy','accessibility','fileSize','cssTokens','fieldShell'];
   const CHECK_LABELS: Record<string, string> = { forwardRef: 'Ref', displayName: 'Name', ... };
   // Map component names to page IDs for navigation
   const PAGE_MAP: Record<string, string> = { Button: 'button', InputField: 'input', ... };
   ```

   c. **State**
   ```tsx
   const [sortBy, setSortBy] = useState<'name'|'score'>('name');
   const [sortDir, setSortDir] = useState<'asc'|'desc'>('asc');
   const [filter, setFilter] = useState<'all'|'fail'|'warn'>('all');
   ```

   d. **Derived data** (useMemo)
   - Filter components by status
   - Sort by name or score
   - Compute summary counts

   e. **Summary bar** -- render pass/warn/fail counts with Badge components

   f. **Filter controls** -- Chip group: All / Failures / Warnings

   g. **Table** -- using Zen Table component:
   - Header row: Component | Score | 9 check columns (abbreviated labels)
   - Body rows: component name (clickable) | score (%) | 9 status cells
   - Status cells: Badge with color variant based on status
   - Tooltip on status cells via `title` attribute showing `detail` string

   h. **Navigation** -- clicking component name calls parent's `setPage()`. Need to accept `onNavigate` prop or use a shared callback.

3. **Wire into `apps/docs/src/App.tsx`**

   a. Add `'audit'` to the `Page` type union

   b. Add sidebar entry in `sidebarSections` under a new "Tools" section:
   ```tsx
   { title: 'Tools', items: [{ id: 'audit', label: 'Component Audit' }] }
   ```

   c. Import `AuditPage`:
   ```tsx
   import { AuditPage } from './AuditPage';
   ```

   d. Add rendering in main content area:
   ```tsx
   {page === 'audit' && <AuditPage onNavigate={(id) => setPage(id as Page)} />}
   ```

4. **Verify token names** -- before using color tokens in CSS, grep `packages/tokens/` for actual variable names to ensure correctness.

## Todo List

- [ ] Check available color token CSS variable names
- [ ] Create `apps/docs/src/audit-page.module.css`
- [ ] Create `apps/docs/src/AuditPage.tsx` with summary bar
- [ ] Implement matrix table with Table component
- [ ] Implement sort by name/score
- [ ] Implement filter by status
- [ ] Implement component name links (onNavigate)
- [ ] Add status cell tooltips
- [ ] Wire AuditPage into App.tsx (type, sidebar, rendering)
- [ ] Verify page renders with sample/real audit-data.json
- [ ] Ensure file stays under 200 lines (extract if needed)

## Success Criteria

- Dashboard shows all 40 components in matrix format
- Status cells correctly color-coded (green/yellow/red/gray)
- Summary bar shows accurate counts
- Sort by name and score works
- Filter shows only failures or warnings
- Clicking component name navigates to its page
- Uses `@zen/components` Table (dog-fooding)
- No TypeScript errors; page compiles cleanly

## Risk Assessment

| Risk | Mitigation |
|------|-----------|
| JSON import path breaks in build | Test with `npm run build` in docs app; adjust path if needed |
| Table component API insufficient for matrix | Fall back to native `<table>` only as last resort; Table has enough cell types |
| AuditPage exceeds 200 lines | Extract summary bar into `AuditSummaryBar.tsx` and status helpers into `audit-page-helpers.ts` |
| Color tokens don't exist | Check token package first; fall back to semantic color tokens |

## Security Considerations

- No user input processed; purely static data rendering
- No API calls; all data from committed JSON file
