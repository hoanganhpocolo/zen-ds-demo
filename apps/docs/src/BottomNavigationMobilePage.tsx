import { useState } from 'react';
import { BottomNavigation } from '@zen/components';
import type { BottomNavItemData } from '@zen/components';
import { HomeSmile, Image, HorizontalBarChart02, ImageCircle } from '@zen/icons/line';
import { HomeSmile as HomeSmileSolid, Image as ImageSolid, HorizontalBarChart02 as HorizontalBarChart02Solid, ImageCircle as ImageCircleSolid } from '@zen/icons/solid';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

const MobileFrame = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    background: 'var(--color-bg-canvas-default)',
    borderRadius: 'var(--radius-large)',
    overflow: 'hidden',
    padding: '32px 0',
  }}>
    {children}
  </div>
);

const DEFAULT_ITEMS: BottomNavItemData[] = [
  { id: 'home',    icon: <HomeSmile size={24} />,            activeIcon: <HomeSmileSolid size={24} />,            label: 'Home' },
  { id: 'gallery', icon: <Image size={24} />,                activeIcon: <ImageSolid size={24} />,                label: 'Gallery' },
  { id: 'stats',   icon: <HorizontalBarChart02 size={24} />, activeIcon: <HorizontalBarChart02Solid size={24} />, label: 'Stats' },
  { id: 'profile', icon: <ImageCircle size={24} />,          activeIcon: <ImageCircleSolid size={24} />,          label: 'Profile' },
];

const ACTION_ITEMS: BottomNavItemData[] = [
  { id: 'home',    icon: <HomeSmile size={24} />,            activeIcon: <HomeSmileSolid size={24} />,            label: 'Home' },
  { id: 'gallery', icon: <Image size={24} />,                activeIcon: <ImageSolid size={24} />,                label: 'Gallery' },
  { id: 'action',  type: 'action',                                                                                label: 'Add' },
  { id: 'stats',   icon: <HorizontalBarChart02 size={24} />, activeIcon: <HorizontalBarChart02Solid size={24} />, label: 'Stats' },
  { id: 'profile', icon: <ImageCircle size={24} />,          activeIcon: <ImageCircleSolid size={24} />,          label: 'Profile' },
];

function DefaultAccentDemo() {
  const [active, setActive] = useState('home');
  return (
    <MobileFrame>
      <BottomNavigation theme="accent" items={DEFAULT_ITEMS} activeId={active} onItemClick={setActive} />
    </MobileFrame>
  );
}

function DefaultNeutralDemo() {
  const [active, setActive] = useState('home');
  return (
    <MobileFrame>
      <BottomNavigation theme="neutral" items={DEFAULT_ITEMS} activeId={active} onItemClick={setActive} />
    </MobileFrame>
  );
}

function ActionAccentDemo() {
  const [active, setActive] = useState('home');
  return (
    <MobileFrame>
      <BottomNavigation theme="accent" items={ACTION_ITEMS} activeId={active} onItemClick={setActive} />
    </MobileFrame>
  );
}

function ActionNeutralDemo() {
  const [active, setActive] = useState('home');
  return (
    <MobileFrame>
      <BottomNavigation theme="neutral" items={ACTION_ITEMS} activeId={active} onItemClick={setActive} />
    </MobileFrame>
  );
}

export function BottomNavigationMobilePage() {
  return (
    <>
      {/* ── Header ── */}
      <div className="docs-page-header">
        <div className="docs-page-header-top">
          <div className="docs-page-header-breadcrumb">
            <span className="text-subheading">
              <span style={{ color: 'var(--color-content-neutral-primary)' }}>Zen Design System </span>
              <span style={{ color: 'var(--color-content-neutral-tertiary)' }}>by Đìzai Studio</span>
            </span>
          </div>
        </div>
        <div className="docs-page-header-divider" />
        <h1 className="docs-page-title text-display-1">Bottom Navigation — Mobile</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            Mobile bottom tab bar (390px) with iOS home indicator.
            Two types: Default (icon + label tabs) and Action (circle button in center).
            Two themes: Accent (brand color active state) and Neutral.
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="docs-page-body">

        {/* ── When to Use ── */}
        <div className="docs-when-to-use">
          <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>When to use</h3>
          <ul className="text-body-small">
            <li>Use as the primary navigation bar at the bottom of mobile screens.</li>
            <li>Use <strong>Default</strong> type for 3–5 destination tabs with icon and label.</li>
            <li>Use <strong>Action</strong> type to add a prominent center action button (e.g. create, compose).</li>
            <li>Use <strong>Accent</strong> theme to highlight the active tab with brand color.</li>
            <li>Use <strong>Neutral</strong> theme for a more subdued active state.</li>
          </ul>
        </div>

        {/* ── Examples ── */}
        <h2 className="docs-section-title text-h3">Examples</h2>

        <div className="docs-demo-grid">

          {/* Default / Accent */}
          <DemoBlock
            title="Default — Accent"
            description="Standard tab bar with icon + label. Active tab uses brand accent color."
            fullWidth
            code={`const items = [
  { id: 'home',    icon: <HomeSmile size={24} />,            activeIcon: <HomeSmileSolid size={24} />,            label: 'Home' },
  { id: 'gallery', icon: <Image size={24} />,                activeIcon: <ImageSolid size={24} />,                label: 'Gallery' },
  { id: 'stats',   icon: <HorizontalBarChart02 size={24} />, activeIcon: <HorizontalBarChart02Solid size={24} />, label: 'Stats' },
  { id: 'profile', icon: <ImageCircle size={24} />,          activeIcon: <ImageCircleSolid size={24} />,          label: 'Profile' },
];

<BottomNavigation theme="accent" items={items} activeId={active} onItemClick={setActive} />`}
          >
            <DefaultAccentDemo />
          </DemoBlock>

          {/* Default / Neutral */}
          <DemoBlock
            title="Default — Neutral"
            description="Standard tab bar with neutral active state color."
            fullWidth
            code={`<BottomNavigation theme="neutral" items={items} activeId={active} onItemClick={setActive} />`}
          >
            <DefaultNeutralDemo />
          </DemoBlock>

          {/* Action / Accent */}
          <DemoBlock
            title="Action — Accent"
            description="Center action button (48×48 circle with Plus icon). Remaining tabs use accent active color."
            fullWidth
            code={`const items = [
  { id: 'home',    icon: <HomeSmile size={24} />,            activeIcon: <HomeSmileSolid size={24} />,            label: 'Home' },
  { id: 'gallery', icon: <Image size={24} />,                activeIcon: <ImageSolid size={24} />,                label: 'Gallery' },
  { id: 'action',  type: 'action',                                                                                label: 'Add' },
  { id: 'stats',   icon: <HorizontalBarChart02 size={24} />, activeIcon: <HorizontalBarChart02Solid size={24} />, label: 'Stats' },
  { id: 'profile', icon: <ImageCircle size={24} />,          activeIcon: <ImageCircleSolid size={24} />,          label: 'Profile' },
];

<BottomNavigation theme="accent" items={items} activeId={active} onItemClick={setActive} />`}
          >
            <ActionAccentDemo />
          </DemoBlock>

          {/* Action / Neutral */}
          <DemoBlock
            title="Action — Neutral"
            description="Center action button with neutral theme. Circle uses neutral solid fill."
            fullWidth
            code={`<BottomNavigation theme="neutral" items={items} activeId={active} onItemClick={setActive} />`}
          >
            <ActionNeutralDemo />
          </DemoBlock>

        </div>

        {/* ── API ── */}
        <h2 className="docs-section-title text-h3">API — BottomNavigation</h2>
        <ApiTable
          columns={['Property', 'Description', 'Type', 'Default']}
          rows={[
            [<code>items</code>, 'Array of tab items', <code>BottomNavItemData[]</code>, '—'],
            [<code>activeId</code>, 'ID of the currently active tab', <code>string</code>, '—'],
            [<code>onItemClick</code>, 'Callback when a tab is clicked', <code>(id: string) =&gt; void</code>, '—'],
            [<code>theme</code>, 'Color of the active tab — brand accent or neutral', <><code>'accent'</code> | <code>'neutral'</code></>, <code>'accent'</code>],
            [<code>showHomeIndicator</code>, 'Show iOS home indicator (34px) below the bar', <code>boolean</code>, <code>true</code>],
          ]}
        />

        <h2 className="docs-section-title text-h3" style={{ marginTop: 'var(--gap-2xlarge)' }}>API — BottomNavItemData</h2>
        <ApiTable
          columns={['Property', 'Description', 'Type', 'Default']}
          rows={[
            [<code>id</code>, 'Unique identifier for the tab', <code>string</code>, '—'],
            [<code>type</code>, "Tab type — 'default' shows icon+label; 'action' shows a 48×48 circle with Plus icon", <><code>'default'</code> | <code>'action'</code></>, <code>'default'</code>],
            [<code>icon</code>, 'Icon shown when inactive (line style). Used for type=\'default\' only', <code>ReactNode</code>, '—'],
            [<code>activeIcon</code>, "Icon shown when active (solid style). Falls back to icon if not provided", <code>ReactNode</code>, '—'],
            [<code>label</code>, "Tab label below the icon (default type) or aria-label (action type)", <code>string</code>, '—'],
          ]}
        />

      </div>
    </>
  );
}
