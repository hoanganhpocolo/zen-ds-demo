import { useState } from 'react';
import { Segmented } from '@zen/components';
import { Home01, Settings01, User } from '@zen/icons/line';
import { DemoBlock } from './DemoBlock';

const ITEMS_2 = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
];

const ITEMS_3 = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
];

const ITEMS_4 = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'year', label: 'Year' },
];

const ICON_ITEMS = [
  { value: 'home', label: 'Home', icon: <Home01 size={16} /> },
  { value: 'settings', label: 'Settings', icon: <Settings01 size={16} /> },
  { value: 'profile', label: 'Profile', icon: <User size={16} /> },
];

export function SegmentedPage() {
  const [sec2, setSec2] = useState('day');
  const [sec3, setSec3] = useState('week');
  const [sec4, setSec4] = useState('month');
  const [pri2, setPri2] = useState('day');
  const [pri3, setPri3] = useState('week');
  const [iconSec, setIconSec] = useState('home');
  const [iconPri, setIconPri] = useState('settings');
  const [full, setFull] = useState('week');

  return (
    <>
      <div className="docs-page-header">
        <div className="docs-page-header-top">
          <div className="docs-page-header-breadcrumb">
            <span className="text-h4" style={{ letterSpacing: '-0.04em' }}>
              <span style={{ color: 'var(--color-content-neutral-primary)' }}>Zen Design System </span>
              <span style={{ color: 'var(--color-content-neutral-tertiary)' }}>by Đìzai Studio</span>
            </span>
          </div>
        </div>
        <div className="docs-page-header-divider" />
        <h1 className="docs-page-title text-display-1">Segmented Control</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A tab-like control for switching between mutually exclusive options. Two levels: Secondary (neutral) and Primary (brand/dark).
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        {/* ── Secondary ── */}
        <h2 className="docs-section-title text-h3">Secondary</h2>
        <div className="docs-demo-grid">

          <DemoBlock title="2 items">
            <Segmented items={ITEMS_2} value={sec2} onChange={setSec2} />
          </DemoBlock>

          <DemoBlock title="3 items">
            <Segmented items={ITEMS_3} value={sec3} onChange={setSec3} />
          </DemoBlock>

          <DemoBlock title="4 items">
            <Segmented items={ITEMS_4} value={sec4} onChange={setSec4} />
          </DemoBlock>

        </div>

        {/* ── Primary ── */}
        <h2 className="docs-section-title text-h3">Primary</h2>
        <div className="docs-demo-grid">

          <DemoBlock title="2 items">
            <Segmented level="primary" items={ITEMS_2} value={pri2} onChange={setPri2} />
          </DemoBlock>

          <DemoBlock title="3 items">
            <Segmented level="primary" items={ITEMS_3} value={pri3} onChange={setPri3} />
          </DemoBlock>

        </div>

        {/* ── With Icons ── */}
        <h2 className="docs-section-title text-h3">With Icons</h2>
        <div className="docs-demo-grid">

          <DemoBlock title="Secondary + icons">
            <Segmented items={ICON_ITEMS} value={iconSec} onChange={setIconSec} />
          </DemoBlock>

          <DemoBlock title="Primary + icons">
            <Segmented level="primary" items={ICON_ITEMS} value={iconPri} onChange={setIconPri} />
          </DemoBlock>

        </div>

        {/* ── Full Width ── */}
        <h2 className="docs-section-title text-h3">Full Width</h2>
        <div className="docs-demo-grid">

          <DemoBlock title="Full width" fullWidth>
            <Segmented items={ITEMS_3} value={full} onChange={setFull} fullWidth />
          </DemoBlock>

        </div>

        {/* ── API ── */}
        <h2 className="docs-section-title text-h3">API</h2>
        <table className="docs-api-table text-body-small">
          <thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead>
          <tbody>
            <tr><td><code>items</code></td><td>Array of items</td><td><code>SegmentedItem[]</code></td><td>—</td></tr>
            <tr><td><code>value</code></td><td>Controlled selected value</td><td><code>string</code></td><td>—</td></tr>
            <tr><td><code>defaultValue</code></td><td>Uncontrolled default</td><td><code>string</code></td><td>first item</td></tr>
            <tr><td><code>onChange</code></td><td>Selection callback</td><td><code>(value: string) =&gt; void</code></td><td>—</td></tr>
            <tr><td><code>level</code></td><td>Visual level</td><td><code>"primary" | "secondary"</code></td><td><code>"secondary"</code></td></tr>
            <tr><td><code>size</code></td><td>Size variant</td><td><code>"medium"</code></td><td><code>"medium"</code></td></tr>
            <tr><td><code>fullWidth</code></td><td>Stretch to fill parent</td><td><code>boolean</code></td><td><code>false</code></td></tr>
          </tbody>
        </table>

        <h2 className="docs-section-title text-h3">SegmentedItem</h2>
        <table className="docs-api-table text-body-small">
          <thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead>
          <tbody>
            <tr><td><code>value</code></td><td>Unique identifier</td><td><code>string</code></td><td>—</td></tr>
            <tr><td><code>label</code></td><td>Display text</td><td><code>string</code></td><td>—</td></tr>
            <tr><td><code>icon</code></td><td>Leading icon</td><td><code>ReactNode</code></td><td>—</td></tr>
            <tr><td><code>disabled</code></td><td>Disable this item</td><td><code>boolean</code></td><td><code>false</code></td></tr>
          </tbody>
        </table>

      </div>
    </>
  );
}
