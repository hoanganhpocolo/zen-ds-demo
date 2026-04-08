# Zen Design System — Figma Integration Rules

## Overview

This is a **React + TypeScript** design system monorepo called **Zen (Kaiz)**. All components are built from Figma-generated design tokens using a 4-tier CSS custom properties architecture. When generating or implementing designs, always use the tokens and component library described below.

---

## Frameworks & Stack

- **Framework**: React 18 + TypeScript
- **Styling**: CSS Modules (`.module.css`) — no Tailwind, no styled-components
- **Bundler**: Vite (dev), tsup (library build)
- **Package manager**: npm workspaces (monorepo)

---

## Project Structure

```
zen-design-system/
├── packages/
│   ├── tokens/          @zen/tokens — CSS design tokens (4-tier)
│   ├── components/      @zen/components — React component library
│   └── icons/           @zen/icons — 1700 SVG icons as React components
└── apps/
    └── docs/            Documentation + demo playground (Vite)
```

---

## Token System (4 Tiers)

All styling uses CSS custom properties. **Never hardcode colors, spacing, or radii.**

### Tier 3 — Mode Colors (PRIMARY — use these in components)
Located in: `packages/tokens/src/styles/tokens/mode-colors.css`

```css
/* Content / Text */
--color-content-neutral-primary        /* default text */
--color-content-neutral-secondary      /* secondary text */
--color-content-neutral-tertiary       /* subtle/muted text */
--color-content-placeholder            /* placeholder text */
--color-content-disabled               /* disabled state */
--color-content-inverse                /* text on dark backgrounds */
--color-content-accent-primary         /* brand-colored text */
--color-content-on-colors              /* text on solid colored bg */
--color-content-positive-primary       /* success text */
--color-content-negative-primary       /* error text */
--color-content-warning-primary        /* warning text */
--color-content-info-primary           /* info text */

/* Backgrounds */
--color-bg-canvas-default              /* page/app background */
--color-bg-surface-default             /* card/panel surface */
--color-bg-fill-accent-solid-default   /* primary/CTA button bg */
--color-bg-fill-accent-solid-hover
--color-bg-fill-accent-solid-pressed
--color-bg-fill-accent-subtle-default  /* light accent tint */
--color-bg-fill-neutral-ghost-default  /* inputs, ghost buttons */
--color-bg-fill-neutral-flat-hover     /* list item hover */
--color-bg-fill-neutral-subtle-default /* badges, subtle fills */
--color-bg-fill-positive-subtle-default
--color-bg-fill-negative-subtle-default
--color-bg-fill-warning-subtle-default
--color-bg-fill-info-subtle-default

/* Borders */
--color-border-neutral-default         /* standard border */
--color-border-neutral-subtle-default  /* subtle/light border */
--color-border-neutral-subtle-light-default /* very light border */
--color-border-focused-primary         /* focus ring */
--color-border-accent-default          /* accent/brand border */
--color-border-disabled

/* Shadow */
--color-shadow-neutral-1               /* lowest elevation */
--color-shadow-neutral-2
--color-shadow-neutral-3
--color-shadow-neutral-4               /* highest elevation */
```

### Tier 4 — Component Tokens (use when available)
Located in: `packages/tokens/src/styles/tokens/component-tokens.css`

Pattern: `--comp-{component-name}-color-{bg|content|border|icon}-{state}`

Available component tokens for:
- `button-primary`, `button-accent`
- `checkbox`, `radio-button`, `toggle`
- `chip-primary`, `chip-secondary`
- `segmented-item-primary`, `segmented-item-secondary`
- `tab`, `tag`, `table-cell`
- `date-picker-item`

---

## Spacing System

```css
/* Gap (between elements) */
--gap-3xsmall: 2px   --gap-2xsmall: 4px   --gap-xsmall: 8px
--gap-small: 12px    --gap-medium: 16px   --gap-large: 24px
--gap-xlarge: 32px   --gap-2xlarge: 40px  --gap-3xlarge: 48px

/* Padding (inside containers) */
--padding-3xsmall: 2px   --padding-2xsmall: 4px   --padding-xsmall: 8px
--padding-small: 12px    --padding-medium: 16px   --padding-large: 20px
--padding-xlarge: 24px   --padding-2xlarge: 32px  --padding-3xlarge: 40px
```

---

## Corner Radius

```css
--radius-2xsmall: 2px    --radius-xsmall: 4px    --radius-small: 8px
--radius-base: 12px      --radius-large: 16px    --radius-xlarge: 20px
--radius-2xlarge: 24px   --radius-3xlarge: 28px  --radius-rounded: 1000px
```

Switchable via `data-radius="rounded|smooth|standard"` on `<html>`.

---

## Typography Classes

```css
/* Use these class names in JSX */
text-display-1  text-display-2  text-display-3  text-display-4  /* BT Solisiert */
text-h1  text-h2  text-h3  text-h4                              /* Inter, 600 */
text-subheading  text-body-extra  text-body-base  text-body-small
text-caption  text-small-label
text-capsline-m  text-capsline-s                                 /* uppercase */
text-button-label-xl  text-button-label-l  text-button-label-m
text-button-label-s  text-button-label-xs
```

---

## Component Library (`@zen/components`)

All components live at `packages/components/src/{ComponentName}/`.

### Button
```tsx
import { Button } from '@zen/components';

// variant: 'primary' | 'accent' | 'secondary' | 'tertiary' | 'danger' |
//          'danger-subtle' | 'positive' | 'positive-subtle' |
//          'flat-primary' | 'flat-accent' | 'inverse' | 'white'
// size: '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl'
<Button variant="primary" size="m" icon={<Icon />}>Label</Button>
<Button variant="flat-primary" size="xs" icon={<Icon />} /> {/* icon-only */}
```

### Avatar
```tsx
import { Avatar } from '@zen/components';

// size: '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl'
// color: 'accent' | 'neutral' | 'blue' | 'green' | 'purple' | 'red' | ...
// background: 'subtle' | 'solid'
// shape: 'circle' | 'square'
<Avatar size="m" color="accent" background="subtle" src="/photo.jpg" alt="Name" />
<Avatar size="m" color="blue" background="solid">JD</Avatar>
```

### Badge
```tsx
import { Badge } from '@zen/components';

// color: 'neutral' | 'accent' | 'positive' | 'negative' | 'warning' | 'info'
// variant: 'subtle' | 'solid' | 'outline'
// size: 's' | 'm'
<Badge label="Active" color="positive" variant="subtle" size="s" dot={false} />
```

### Sidebar & SidebarItem
```tsx
import { Sidebar, SidebarItem } from '@zen/components';

// background: 'default' | 'alternate'
<Sidebar background="alternate" header={<Logo />}>
  <SidebarItem label="Overview" selected={true} icon={<Icon />} />
  <SidebarItem label="Contacts" counter={5} icon={<Icon />} />
</Sidebar>
```

### Search
```tsx
import { Search } from '@zen/components';

// size: 'small' | 'medium' | 'large'
<Search placeholder="Search..." size="medium" />
```

### Tab / TabGroup
```tsx
import { Tab, TabGroup } from '@zen/components';  // or TabItem

<TabGroup>
  <Tab label="Overview" active={true} />
  <Tab label="Tasks" counter={7} />
</TabGroup>
```

### Breadcrumb
```tsx
import { Breadcrumb, BreadcrumbItem } from '@zen/components';

<Breadcrumb>
  <BreadcrumbItem href="#">Active Deals</BreadcrumbItem>
  <BreadcrumbItem>Ronald Richards</BreadcrumbItem>
</Breadcrumb>
```

### MetricCard
```tsx
import { MetricCard } from '@zen/components';

<MetricCard
  label="Total Revenue"
  value="$24,500"
  change={+12.5}
  changeLabel="vs last month"
/>
```

### ProgressBar
```tsx
import { ProgressBar } from '@zen/components';  // or Progress

// color: 'accent' | 'positive' | 'negative' | 'warning' | 'neutral'
<ProgressBar value={72} color="accent" style={{ width: '100%' }} />
```

### ListItem
```tsx
import { ListItem } from '@zen/components';

<ListItem label="Title" description="Subtitle" leading={<Avatar />} trailing={<Badge />} />
```

### Chip
```tsx
import { Chip } from '@zen/components';

// variant: 'primary' | 'secondary'
<Chip label="Label" variant="primary" selected={true} />
```

### Pagination
```tsx
import { Pagination } from '@zen/components';

<Pagination total={100} pageSize={10} current={1} onChange={setPage} />
```

---

## Icon System (`@zen/icons`)

1700 icons in 3 styles. All are React components accepting `size` and `className`.

```tsx
import { Home01, ChevronRight01, Bell01, User01, Settings01 } from '@zen/icons/line';
import { Home01 as HomeIconSolid } from '@zen/icons/solid';

<Home01 size={20} />  // inherits currentColor
```

Common icons:
- Navigation: `Home01`, `ChevronRight01`, `ChevronLeft01`, `ChevronDown01`
- Actions: `Plus`, `Edit01`, `Trash01`, `Download01`, `Upload01`
- UI: `Bell01`, `Search01`, `Settings01`, `User01`, `UserPlus01`
- Files: `File01`, `FileCheck01`, `FilePdf01`
- Status: `CheckCircle`, `XCircle`, `AlertCircle`

---

## Theming

All components auto-respond to HTML data attributes:

```html
<html data-theme="light|dark" data-radius="rounded|smooth|standard"
      data-base-font="16|14" data-component-theme="brand|neutral">
```

Components **never** need theme-specific code — they only use mode-color tokens.

---

## Figma Library Component Mapping

**CRITICAL**: When generating Figma designs, ALWAYS instantiate components from the Zen library using these node IDs from file `qDZkV4u64d8hKUYs71ZIQC`. Never draw flat shapes for components that exist in this library.

| Component | Figma Node ID | Notes |
|-----------|--------------|-------|
| Icon | `1340:4450` | @zen/icons — 1700 icons |
| Alert Banner | `234:32943` | AlertBanner |
| Avatar (Single) | `223:9050` | Avatar |
| Avatar (Group) | `364:92561` | AvatarGroup |
| Accordion | `239:16847` | Accordion |
| Badge | `260:4825` | Badge |
| Bottom Sheet | `4059:14161` | BottomSheet |
| Button (Main) | `1026:8312` | variant: primary/accent/secondary/tertiary/danger |
| Button (Overlay) | `1026:8747` | variant: inverse/white |
| Button (Flat) | `1070:18754` | variant: flat-primary/flat-accent |
| Button Icon (Main) | `205:21062` | icon-only button |
| Button Icon (Overlay) | `291:41855` | icon-only overlay button |
| Button Icon (Flat) | `234:43906` | icon-only flat button |
| Breadcrumb | `4031:20161` | Breadcrumb + BreadcrumbItem |
| Checkbox | `309:46871` | Checkbox |
| Chip (Normal) | `512:6843` | Chip variant=primary/secondary |
| Chip (Advanced) | `512:7659` | Chip with icon/avatar |
| Date Picker (Single) | `895:31954` | Calendar single |
| Date Picker (Dual) | `465:41427` | Calendar dual |
| Divider | `460:38361` | Divider |
| Input Text Field | `421:4108` | InputField type=text |
| Input Select Field | `421:7303` | InputField type=select |
| Input Date Field | `421:8388` | InputField type=date |
| Input Text Area | `450:7027` | TextArea |
| Input Number (Left) | `421:10057` | NumberField align=left |
| Input Number (Center) | `450:7900` | NumberField align=center |
| Input Heading | `694:13062` | InputHeading |
| Metric Card | `595:55410` | MetricCard |
| Modal Dialog | `841:17177` | Dialog |
| Modal | `841:17182` | Modal |
| List Item | `4080:11700` | ListItem |
| Pagination | `774:29083` | Pagination |
| Popover | `4031:26126` | Popover |
| Progress Bar | `1536:260` | ProgressBar |
| Progress Circle | `1531:13954` | ProgressCircle |
| Radio | `373:96272` | Radio |
| Rating (Star) | `1536:26008` | Rating type=star |
| Rating (NPS) | `1536:26034` | Rating type=nps |
| Rating (Opinion) | `1536:25762` | Rating type=opinion |
| Search | `846:37624` | Search |
| Segmented | `1238:892` | Segmented |
| Sidebar | `4081:15234` | Sidebar + SidebarItem |
| Side Panel | `1573:3128` | SidePanel |
| Slider | `4010:35946` | Slider |
| Stepper (Horizontal) | `1625:8328` | Stepper orientation=horizontal |
| Stepper (Vertical) | `1625:8656` | Stepper orientation=vertical |
| Tab | `1577:5477` | Tab + TabGroup |
| Table Header | `1604:12968` | Table header cell |
| Table Body Cell | `4270:19981` | Table body cell |
| Tag | `288:32046` | Tag |
| Toggle Button | `1523:104` | Toggle button (switch only) |
| Toggle | `1526:5703` | Toggle with label |
| File Uploader | `1581:22708` | FileUploader |

---

## Common Component Patterns

### Card surface
```css
background: var(--color-bg-surface-default);
border: 1px solid var(--color-border-neutral-subtle-light-default);
border-radius: var(--radius-2xlarge);
padding: var(--padding-medium) var(--padding-large);
```

### Topbar / app header
```css
height: 56px;
display: flex; align-items: center;
padding: 0 var(--padding-xlarge);
border-bottom: 1px solid var(--color-border-neutral-subtle-light-default);
background: var(--color-bg-surface-default);
```

### App layout (sidebar + main)
```css
.root { display: flex; height: 100vh; overflow: hidden; background: var(--color-bg-canvas-default); }
.sidebar { width: 240px; flex-shrink: 0; padding: var(--padding-xsmall); }
.main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
```
