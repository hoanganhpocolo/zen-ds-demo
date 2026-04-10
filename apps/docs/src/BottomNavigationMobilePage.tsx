import { useState } from 'react';
import { BottomNavigation } from '@zen/components';
import type { BottomNavItemData } from '@zen/components';
import { HomeSmile, Image, HorizontalBarChart02, ImageCircle } from '@zen/icons/line';
import { HomeSmile as HomeSmileSolid, Image as ImageSolid, HorizontalBarChart02 as HorizontalBarChart02Solid, ImageCircle as ImageCircleSolid } from '@zen/icons/solid';
import { ApiTable } from './ApiTable';

const MobileFrame = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    background: 'var(--color-bg-canvas-default)',
    borderRadius: 'var(--radius-large)',
    overflow: 'hidden',
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

function AccentExamples() {
  const [active, setActive] = useState('home');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)' }}>
      <MobileFrame>
        <BottomNavigation theme="accent" items={DEFAULT_ITEMS} activeId={active} onItemClick={setActive} />
      </MobileFrame>
    </div>
  );
}

function NeutralExamples() {
  const [active, setActive] = useState('home');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)' }}>
      <MobileFrame>
        <BottomNavigation theme="neutral" items={DEFAULT_ITEMS} activeId={active} onItemClick={setActive} />
      </MobileFrame>
    </div>
  );
}

function ActionAccentExamples() {
  const [active, setActive] = useState('home');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)' }}>
      <MobileFrame>
        <BottomNavigation theme="accent" items={ACTION_ITEMS} activeId={active} onItemClick={setActive} />
      </MobileFrame>
    </div>
  );
}

function ActionNeutralExamples() {
  const [active, setActive] = useState('home');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)' }}>
      <MobileFrame>
        <BottomNavigation theme="neutral" items={ACTION_ITEMS} activeId={active} onItemClick={setActive} />
      </MobileFrame>
    </div>
  );
}

export function BottomNavigationMobilePage() {
  return (
    <>
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
            Two types: Default (icon + label tabs) and Action (circle button).
            Two themes each: Accent (brand color) and Neutral.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        <h2 className="docs-section-title text-h3">Default</h2>

        <h3 className="docs-subsection-title text-h4">Accent</h3>
        <AccentExamples />

        <h3 className="docs-subsection-title text-h4" style={{ marginTop: 'var(--gap-large)' }}>Neutral</h3>
        <NeutralExamples />

        <h2 className="docs-section-title text-h3" style={{ marginTop: 'var(--gap-2xlarge)' }}>Action</h2>

        <h3 className="docs-subsection-title text-h4">Accent</h3>
        <ActionAccentExamples />

        <h3 className="docs-subsection-title text-h4" style={{ marginTop: 'var(--gap-large)' }}>Neutral</h3>
        <ActionNeutralExamples />

        <h2 className="docs-section-title text-h3" style={{ marginTop: 'var(--gap-2xlarge)' }}>API — BottomNavigation</h2>
        <ApiTable
          columns={['Prop', 'Type', 'Default', 'Description']}
          rows={[
            [<code>items</code>, <code>BottomNavItemData[]</code>, '—', 'Array of tab items'],
            [<code>activeId</code>, <code>string</code>, '—', 'ID of the currently active tab'],
            [<code>onItemClick</code>, <code>(id: string) =&gt; void</code>, '—', 'Callback when a tab is clicked'],
            [<code>theme</code>, <><code>'accent'</code> | <code>'neutral'</code></>, <code>'accent'</code>, 'Color of the active tab — brand accent or neutral'],
            [<code>showHomeIndicator</code>, <code>boolean</code>, <code>true</code>, 'Show iOS home indicator (34px) below the bar'],
          ]}
        />

        <h2 className="docs-section-title text-h3" style={{ marginTop: 'var(--gap-2xlarge)' }}>API — BottomNavItemData</h2>
        <ApiTable
          columns={['Prop', 'Type', 'Default', 'Description']}
          rows={[
            [<code>id</code>, <code>string</code>, '—', 'Unique identifier for the tab'],
            [<code>type</code>, <><code>'default'</code> | <code>'action'</code></>, <code>'default'</code>, 'Tab type — default shows icon+label; action shows a 48×48 circle with Plus icon'],
            [<code>icon</code>, <code>ReactNode</code>, '—', 'Icon shown when inactive (line style). Used for type=\'default\' only'],
            [<code>activeIcon</code>, <code>ReactNode</code>, '—', 'Icon shown when active (solid style). Falls back to icon if not provided'],
            [<code>label</code>, <code>string</code>, '—', 'Tab label shown below the icon (default type) or used as aria-label (action type)'],
          ]}
        />

      </div>
    </>
  );
}
