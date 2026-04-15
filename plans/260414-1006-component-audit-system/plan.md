---
title: "Component Audit System"
description: "Automated scanner + dashboard to track health of 40 Zen components across 9 quality dimensions"
status: complete
priority: P1
effort: 6h
branch: component-validation
tags: [audit, quality, tooling, dashboard]
created: 2026-04-14
---

# Component Audit System

## Goal

Build a 3-part system: **audit script** (Node.js scanner) -> **audit-data.json** -> **dashboard page** (docs app).
Scans 40 components across 9 quality dimensions; visualizes results in a matrix table.

## Architecture

```
packages/components/scripts/audit-components.mjs
        |
        v
packages/components/src/audit-data.json  (committed to repo)
        |
        v
apps/docs/src/AuditPage.tsx  (reads JSON, renders matrix)
```

## Phases

| # | Phase | Status | Effort | Details |
|---|-------|--------|--------|---------|
| 1 | Audit Script | complete | 3h | [phase-01-audit-script.md](./phase-01-audit-script.md) |
| 2 | Dashboard Page | complete | 2h | [phase-02-dashboard-page.md](./phase-02-dashboard-page.md) |
| 3 | Integration | complete | 1h | [phase-03-integration.md](./phase-03-integration.md) |

## Dependencies

- Phase 2 depends on Phase 1 (needs audit-data.json schema)
- Phase 3 depends on both Phase 1 and Phase 2

## Key Decisions

1. Regex over AST -- flagging, not enforcing; fast to build
2. JSON committed to repo -- diffs show progress in PRs
3. `// audit-ignore: checkName` escape hatch for false positives
4. CSS is read-only audit -- respect designer ownership
5. Dog-food `@zen/components` Table in dashboard

## Success Criteria

- All 40 components scanned with 9 checks
- Dashboard renders real matrix with sort/filter
- Script runs <5s
- `audit:check` exits 1 on failures (CI-ready)

## Context

- [Brainstorm Report](../reports/brainstorm-260414-1006-component-audit-system.md)
- Branch: `component-validation`
