# Zen Design System — Rules for Claude Code

## Overview

This project uses the **Zen Design System**, a multi-tier token architecture generated from Figma variables. All styling MUST use design tokens (CSS custom properties). **Never hardcode colors, spacing, font sizes, or border-radius values.**

## Token Architecture

```
┌─────────────────────────────────────────────────────────┐
│  Tier 1: primitives.css                                 │
│  Raw palette — 1058 colors (22 hues × Light/Dark)       │
│  Vars: --light-color-{hue}-{1-12}                       │
│        --dark-color-{hue}-{1-12}                        │
│  ⚠ NEVER use in components                              │
├─────────────────────────────────────────────────────────┤
│  Tier 2: semantic-colors.css                            │
│  Brand aliases — maps semantic names to palette          │
│  Vars: --color-brand-{1-12}, --color-neutral-{1-12}    │
│        --color-info-{1-12}, --color-positive-{1-12}    │
│        --color-negative-{1-12}, --color-warning-{1-12} │
│  ⚠ Prefer mode-colors over these in components          │
├─────────────────────────────────────────────────────────┤
│  Tier 3: mode-colors.css ← USE THIS IN COMPONENTS      │
│  UI semantic tokens (304 vars) — auto Light↔Dark        │
│  Vars: --color-bg-*, --color-content-*, --color-border-*│
├─────────────────────────────────────────────────────────┤
│  Tier 4: component-tokens.css                           │
│  Per-component tokens (87 vars)                         │
│  Vars: --comp-{component}-*                             │
└─────────────────────────────────────────────────────────┘
```

## Critical Rules

### 1. Token Usage Priority

When styling a component, use tokens in this order:

1. **Component tokens** (`--comp-button-primary-*`) — if one exists for this component
2. **Mode color tokens** (`--color-bg-*`, `--color-content-*`, `--color-border-*`) — for everything else
3. **Semantic colors** (`--color-brand-*`, `--color-neutral-*`) — only for custom/edge cases
4. **NEVER** use primitives (`--light-color-*`, `--dark-color-*`) directly in components

### 2. Available Component Tokens

These components have pre-defined token sets in `component-tokens.css`:

- `Button-Accent`, `Button-Primary`
- `Checkbox`, `Radio-Button`, `Toggle`
- `Chip-Primary`, `Chip-Secondary`
- `Segmented-Item-Primary`, `Segmented-Item-Secondary`
- `Tab`, `Tag`, `Table-Cell`
- `Date-Picker-Item`

Pattern: `--comp-{component-name}-color-{bg|content|border|icon}-{state}`

Example:
```css
.button-primary {
  background: var(--comp-button-primary-color-bg-default);
  color: var(--comp-button-primary-color-content);
}
.button-primary:hover {
  background: var(--comp-button-primary-color-bg-hover);
}
.button-primary:active {
  background: var(--comp-button-primary-color-bg-pressed);
}
```

### 3. Mode Color Token Naming Convention

All mode color tokens follow this pattern:

```
--color-{category}-{group}-{variant}-{state}
```

**Categories and common tokens:**

#### Content (text & icons)
- `--color-content-neutral-primary` — default text
- `--color-content-neutral-secondary` — secondary text
- `--color-content-neutral-tertiary` — subtle text
- `--color-content-placeholder` — input placeholders
- `--color-content-disabled` — disabled text
- `--color-content-link` — link text
- `--color-content-inverse` — text on dark backgrounds
- `--color-content-on-accent` — text on accent/brand backgrounds
- `--color-content-accent-{primary|secondary|highlight}` — brand-colored text
- `--color-content-{positive|negative|warning|info}-{primary|secondary|highlight}` — status text

#### Background
- `--color-bg-canvas-default` — page background
- `--color-bg-surface-default` — card/surface background
- `--color-bg-fill-{semantic}-{variant}-{state}` — fill backgrounds

Fill variants follow the pattern:
```
--color-bg-fill-{accent|neutral|info|positive|negative|warning}-{solid|subtle|ghost|flat}-{default|hover|pressed}
```

- **solid** — opaque, high contrast (e.g., primary buttons)
- **subtle** — semi-transparent, low contrast (e.g., tags, badges)
- **ghost** — near-transparent (e.g., secondary buttons, list items)
- **flat** — fully transparent default, shows fill on hover (e.g., icon buttons)

#### Border
- `--color-border-neutral-{default|subtle-default|subtle-hover}` — standard borders
- `--color-border-accent-{default|subtle-default}` — brand-accent borders
- `--color-border-focused-{primary|accent}` — focus ring colors
- `--color-border-disabled` — disabled borders
- `--color-border-{positive|negative|warning|info}-*` — status borders

#### Shadow
- `--color-shadow-neutral-{1|2|3|4}` — elevation shadows (1=lowest, 4=highest)

### 4. Typography

Use text style classes that map 1:1 to Figma Text Styles:

```css
/* Display (font: BT Solisiert, weight: Primary/600) */
.text-display-1   /* 60px/68px */
.text-display-2   /* 52px/60px */
.text-display-3   /* 46px/52px */
.text-display-4   /* 40px/48px */

/* Headings (font: Inter, weight: Primary/600) */
.text-h1           /* 36px/44px */
.text-h2           /* 32px/40px */
.text-h3           /* 28px/36px */
.text-h4           /* 24px/32px */

/* Body (font: Inter, weight: Tertiary/400) */
.text-subheading   /* 20px/28px, weight: Secondary/500 */
.text-body-extra   /* 18px/26px */
.text-body-base    /* 16px/16px — default body */
.text-body-small   /* 14px/20px */
.text-caption      /* 12px/16px */
.text-small-label  /* 10px/16px */

/* Caps */
.text-capsline-m   /* 16px/20px, uppercase */
.text-capsline-s   /* 14px/16px, uppercase */

/* Button labels */
.text-button-label-xl  /* 20px/32px */
.text-button-label-l   /* 16px/24px */
.text-button-label-m   /* 16px/24px */
.text-button-label-s   /* 16px/24px */
.text-button-label-xs  /* 14px/16px */
```

Or use CSS variables directly:
```css
font-family: var(--font-family-sans);     /* Inter */
font-family: var(--font-family-display);  /* BT Solisiert */
font-family: var(--font-family-dev);      /* Jetbrains Mono */
font-size: var(--font-size-body-base);    /* 16px */
line-height: var(--line-height-body-base); /* 24px */
font-weight: var(--font-weight-primary);   /* 600 */
font-weight: var(--font-weight-secondary); /* 500 */
font-weight: var(--font-weight-tertiary);  /* 400 */
```

### 5. Spacing

Two scales — gap (between elements) and padding (inside elements):

```css
/* Gap (between sibling elements) */
var(--gap-3xsmall)   /* 2px */
var(--gap-2xsmall)   /* 4px */
var(--gap-xsmall)    /* 8px */
var(--gap-small)     /* 12px */
var(--gap-medium)    /* 16px */
var(--gap-large)     /* 24px */
var(--gap-xlarge)    /* 32px */
var(--gap-2xlarge)   /* 40px */
var(--gap-3xlarge)   /* 48px */
var(--gap-giant)     /* 64px */
var(--gap-xgiant)    /* 88px */
var(--gap-2xgiant)   /* 144px */

/* Padding (inside containers) */
var(--padding-3xsmall)  /* 2px */
var(--padding-2xsmall)  /* 4px */
var(--padding-xsmall)   /* 8px */
var(--padding-small)    /* 12px */
var(--padding-medium)   /* 16px */
var(--padding-large)    /* 20px */
var(--padding-xlarge)   /* 24px */
var(--padding-2xlarge)  /* 32px */
var(--padding-3xlarge)  /* 40px */
var(--padding-4xlarge)  /* 48px */
```

### 6. Corner Radius

Switchable via `data-radius` attribute on `<html>`. Three styles available: `rounded` (default), `smooth`, `standard`.

```css
var(--radius-2xsmall)  /* 2px (rounded) | 0px (standard) */
var(--radius-xsmall)   /* 4px (rounded) | 2px (standard) */
var(--radius-small)    /* 8px (rounded) | 4px (standard) */
var(--radius-base)     /* 12px (rounded) | 8px (standard) */
var(--radius-large)    /* 16px (rounded) | 12px (standard) */
var(--radius-xlarge)   /* 20px (rounded) | 16px (standard) */
var(--radius-2xlarge)  /* 24px (rounded) | 20px (standard) */
var(--radius-3xlarge)  /* 28px (rounded) | 24px (standard) */
var(--radius-giant)    /* 36px (rounded) | 32px (standard) */
var(--radius-rounded)  /* 1000px (pill shape, all styles) */
```

### 7. Theme Switching

Controlled via HTML data attributes:

```html
<!-- Light mode, rounded corners (defaults) -->
<html data-theme="light" data-radius="rounded">

<!-- Dark mode, standard corners -->
<html data-theme="dark" data-radius="standard">
```

**Components NEVER need to know about themes.** They only reference mode-color tokens which auto-resolve based on `data-theme`.

### 8. Brand Color Mapping

Current brand mapping in `semantic-colors.css`:
- **Brand** → Zen (magenta/pink)
- **Neutral** → Gray
- **Info** → Blue
- **Positive** → Grass (green)
- **Negative** → Tomato (red)
- **Warning** → Yellow

To change brand, update the alias mapping in `semantic-colors.css`.

## Common Patterns

### Button with all states
```css
.btn-primary {
  background: var(--comp-button-primary-color-bg-default);
  color: var(--comp-button-primary-color-content);
  border-radius: var(--radius-base);
  padding: var(--padding-xsmall) var(--padding-medium);
  gap: var(--gap-2xsmall);
}
.btn-primary:hover {
  background: var(--comp-button-primary-color-bg-hover);
}
.btn-primary:active {
  background: var(--comp-button-primary-color-bg-pressed);
}
```

### Card component
```css
.card {
  background: var(--color-bg-surface-default);
  border: 1px solid var(--color-border-neutral-subtle-default);
  border-radius: var(--radius-large);
  padding: var(--padding-xlarge);
  box-shadow: 0 1px 3px var(--color-shadow-neutral-1);
}
```

### Form input
```css
.input {
  background: var(--color-bg-fill-neutral-ghost-default);
  border: 1px solid var(--color-border-neutral-subtle-default);
  border-radius: var(--radius-small);
  padding: var(--padding-xsmall) var(--padding-small);
  color: var(--color-content-neutral-primary);
}
.input::placeholder {
  color: var(--color-content-placeholder);
}
.input:focus {
  border-color: var(--color-border-focused-primary);
}
.input:disabled {
  background: var(--color-bg-fill-disabled);
  color: var(--color-content-disabled);
}
```

### Status badges
```css
.badge-success {
  background: var(--color-bg-fill-positive-subtle-default);
  color: var(--color-content-positive-primary);
  border-radius: var(--radius-rounded);
}
.badge-error {
  background: var(--color-bg-fill-negative-subtle-default);
  color: var(--color-content-negative-primary);
}
```

## File Structure

```
zen-design-system/               (npm workspaces monorepo)
├── packages/
│   ├── tokens/                  @zen/tokens — CSS design tokens
│   │   └── src/styles/tokens/
│   │       ├── index.css              — Entry point, imports all token files
│   │       ├── primitives.css         — Tier 1: Raw palette (1058 colors)
│   │       ├── semantic-colors.css    — Tier 2: Brand aliases (312 vars)
│   │       ├── mode-colors.css        — Tier 3: UI semantic tokens (304 vars)
│   │       ├── component-tokens.css   — Tier 4: Component tokens (87 vars)
│   │       ├── typography.css         — Font families, sizes, weights + text style classes
│   │       ├── spacing.css            — Gap & padding scale + short aliases
│   │       ├── corner-radius.css      — 3 switchable radius styles
│   │       └── breakpoints.css        — Responsive grid tokens
│   ├── components/              @zen/components — React component library
│   │   └── src/
│   │       ├── Button/
│   │       │   ├── Button.tsx
│   │       │   ├── Button.module.css
│   │       │   └── index.ts
│   │       └── index.ts
│   └── icons/                   @zen/icons — SVG icon library (1700 icons)
│       ├── svg/{line,solid,social}/   Raw SVGs from Figma
│       ├── scripts/generate.js        SVG→React generator (SVGO + JSX)
│       └── src/{line,solid,social}/   Generated React components
├── apps/
│   └── docs/                    Dev playground (Vite + React)
└── package.json                 Workspace root
```

### 9. Icons

1700 icons in 3 categories, auto-generated from Figma SVGs:
- **line** (917) — outline style, default
- **solid** (647) — filled style
- **social** (136) — brand/social logos

```tsx
// Import specific icons (tree-shakeable)
import { Heart, ChevronDown } from '@zen/icons/line';
import { Heart as HeartSolid } from '@zen/icons/solid';

// All icons accept these props:
<Heart size={24} className="my-icon" aria-label="Like" />
```

Icons use `currentColor` — they inherit text color from parent.
To regenerate after adding new SVGs: `cd packages/icons && npm run generate`

### 10. Component Usage Rules

**ALWAYS check if a Zen component exists before building a new one.** If a component covers your use case, use it — even if it needs minor prop additions. Only build custom components when Zen DS genuinely doesn't have what you need.

#### Available components (import from `@zen/components`):

**Layout & Navigation:**
Sidebar, SidebarItem, BottomNavigation, TopNavigationMobile, Breadcrumb, Pagination, Accordion

**Data Entry:**
Button, InputField, SelectField, Search, Checkbox, Radio, Toggle, Slider, Rating

**Data Display:**
Badge, Avatar, Tag, Chip, MetricCard, Table, Calendar, ListItem, Divider

**Feedback & Overlay:**
Modal, Dialog, BottomSheet, Popover, PopoverItem, InlineMessage

#### Prefer Zen components over custom HTML:

```tsx
// ✅ DO — use Zen components
<Button variant="primary" size="m">Submit</Button>
<InputField size="m" label="Email" />
<Badge label="Active" color="green" variant="subtle" />
<Modal open={show} title="Confirm" onClose={...}>...</Modal>
<Avatar size="m" color="blue">N</Avatar>

// ❌ DON'T — rebuild what Zen already provides
<button className="my-custom-btn">Submit</button>
<input className="my-input" />
<span className="my-badge">Active</span>
<div className="my-modal-backdrop"><div className="my-modal">...</div></div>
<div className="my-avatar">N</div>
```

#### When building a new component:

1. Search existing components first: `ls packages/components/src/`
2. If a similar component exists, extend it with new props instead of creating a duplicate
3. New components MUST use Zen tokens for all styling (see rules 1-8)
4. Place new components in `packages/components/src/{ComponentName}/`
5. Export from `packages/components/src/index.ts`

### 11. Typography — Always use text style classes

**NEVER hardcode `font-size`, `font-weight`, or `line-height`.** Use the provided text style classes:

```tsx
// ✅ DO
<h2 className="text-h4">Title</h2>
<p className="text-body-base">Body text</p>
<span className="text-caption">Small label</span>

// ❌ DON'T
<h2 style={{ fontSize: 24, fontWeight: 600 }}>Title</h2>
<p style={{ fontSize: 16 }}>Body text</p>
```

Quick reference:
- Headings: `.text-h1` (36px) → `.text-h4` (24px)
- Body: `.text-body-extra` (18px), `.text-body-base` (16px), `.text-body-small` (14px)
- Small: `.text-caption` (12px), `.text-small-label` (10px)
- Font weight via token: `var(--font-weight-primary)` (600), `var(--font-weight-secondary)` (500), `var(--font-weight-tertiary)` (400)
