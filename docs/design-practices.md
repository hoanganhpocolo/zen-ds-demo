# Zen DS — Design Practices

> Practical rules learned when building UIs with Zen DS.
> Each rule includes **Why** (reason) and **How to apply** (when/where).

**Last updated**: 2026-04-13

---

## Icon Naming
- Always check icon exists before importing: `ls packages/icons/src/line/ | grep -i "name"`
- Common mismatches found:
  - `Trash01` → `Trash`
  - `FileText01` → `FileDoc`
  - `Image01` → `Image`
  - `User01` → `User`
  - `CreditCard01` → `CreditCard`
  - `ChevronRight` → `ChevronRight01`
  - `MoreHorizontal` → `DotsHorizontal`
  - `Search01` → `SearchSmall` / `SearchMedium`
- **Why:** Icon names in Zen don't always follow `Name01` pattern. Some have no suffix, some use different words.
- **How to apply:** ALWAYS verify icon file exists before writing import.

## Default Sizes
- All components should default to size M (medium) unless explicitly specified
- Button: `size="m"` (40px)
- Badge: `size="m"`
- Avatar: `size="m"`
- Segmented: `size="medium"`
- Search: `size="default"` (= medium height)
- **Why:** User wants consistent M as baseline across all components.
- **How to apply:** When building new pages, start with M. Only use S/XS for compact areas (table cells, inline tags).

## Token Color Choices
- **Icons in components**: use `highlight` (scale 10) NOT `primary` (scale 12) — primary is too dark
  - `--color-content-{theme}-highlight` for icons (info, positive, negative, warning)
  - `--color-content-neutral-tertiary` for neutral icons (e.g. InputField leading)
- **Trend indicators**: use `highlight` tokens for colored text (positive-highlight, negative-highlight)
- **Disabled backgrounds**: `neutral-3` (#f0f0f0) NOT `neutral-7` (#cecece)
- **Segmented background**: `--color-bg-fill-neutral-subtle-light-default` (lighter than `subtle-default`)
- **Why:** Figma design uses lighter/brighter colors than the darkest scale. Always verify against Figma.
- **How to apply:** When picking color tokens, check Figma resolved value first, then trace token chain to match.

## Component Usage Rules
- Use Zen `Button` component for ALL buttons — never raw `<button>` HTML
- Use Zen `Tag` component for tags in multi-select — with `className` override for compact sizing
- Use Zen icons (`@zen/icons/line`) for ALL icons — never unicode symbols (▲▼) or inline SVG
- Use `SelectField` for dropdowns — not `Button` with text
- Use `Search` component for search inputs — not `InputField` with search icon
- Use `Badge` for status indicators — with `color` and `variant="subtle"` props
- **Why:** User wants 100% Zen DS component usage. No raw HTML elements for UI.
- **How to apply:** Before using any raw element, check if Zen has a component for it.

## Font Weight
- Trend numbers/percentages: `font-weight-primary` (600) for emphasis
- Supporting text ("vs prev."): `font-weight-tertiary` (400) for de-emphasis
- Metric card values: `font-family-sans` + `font-weight-primary` + 28px (NOT display font)
- **Why:** MetricCard number font was wrong (display font) — Figma uses Inter Semi Bold.

## Sidebar
- Border: `1px solid var(--color-border-neutral-subtle-light-default)` on dock + panel
- Pinned panel: no shadow, solid background
- Unpinned hover panel: glass effect + shadow, no border
- Collapse button: `Button variant="flat-primary" size="m"` with `LayoutLeft` icon
- Workspace add button: `Button variant="tertiary" size="s"` overridden to 40×40
- **Why:** Multiple iterations to get sidebar right. These are the validated choices.

## Layout
- Use unified CSS Grid for dashboard pages — `display: contents` on row wrappers so children flow into parent grid
- This ensures columns align across rows
- **Why:** Separate grids per row cause misalignment.

## SelectField
- Fixed width wrapper for search: wrap with `<div style={{ width: N }}>` since Search component doesn't accept style on root
- SelectField dropdown needs parent `overflow: visible` to not clip
