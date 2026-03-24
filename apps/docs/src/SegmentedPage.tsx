import { useState } from 'react';
import { Segmented } from '@zen/components';
import { Home01, Settings01, User } from '@zen/icons/line';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

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
  const [sizeMd, setSizeMd] = useState('week');
  const [sizeSm, setSizeSm] = useState('week');
  const [iconMd, setIconMd] = useState('home');
  const [iconSm, setIconSm] = useState('home');

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
        <h1 className="docs-page-title text-display-1">Segmented Control</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A tab-like control for switching between mutually exclusive options. Two levels: Secondary (neutral) and Primary (brand/dark).
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        {/* ── Sizes ── */}
        <h2 className="docs-section-title text-h3">Sizes</h2>
        <div className="docs-demo-grid">

          <DemoBlock title="Medium (default)" description="32px height">
            <Segmented items={ITEMS_3} value={sizeMd} onChange={setSizeMd} size="medium" />
          </DemoBlock>

          <DemoBlock title="Small" description="24px height">
            <Segmented items={ITEMS_3} value={sizeSm} onChange={setSizeSm} size="small" />
          </DemoBlock>

          <DemoBlock title="Medium + icons">
            <Segmented items={ICON_ITEMS} value={iconMd} onChange={setIconMd} size="medium" />
          </DemoBlock>

          <DemoBlock title="Small + icons">
            <Segmented items={ICON_ITEMS} value={iconSm} onChange={setIconSm} size="small" />
          </DemoBlock>

        </div>

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
        <ApiTable
          columns={['Property', 'Description', 'Type', 'Default']}
          rows={[
            [<code>items</code>, 'Array of items', <code>SegmentedItem[]</code>, '—'],
            [<code>value</code>, 'Controlled selected value', <code>string</code>, '—'],
            [<code>defaultValue</code>, 'Uncontrolled default', <code>string</code>, 'first item'],
            [<code>onChange</code>, 'Selection callback', <code>(value: string) =&gt; void</code>, '—'],
            [<code>level</code>, 'Visual level', <><code>"primary"</code> | <code>"secondary"</code></>, <code>"secondary"</code>],
            [<code>size</code>, 'Size variant', <><code>"medium"</code> | <code>"small"</code></>, <code>"medium"</code>],
            [<code>fullWidth</code>, 'Stretch to fill parent', <code>boolean</code>, <code>false</code>],
          ]}
        />

        <h2 className="docs-section-title text-h3">SegmentedItem</h2>
        <ApiTable
          columns={['Property', 'Description', 'Type', 'Default']}
          rows={[
            [<code>value</code>, 'Unique identifier', <code>string</code>, '—'],
            [<code>label</code>, 'Display text', <code>string</code>, '—'],
            [<code>icon</code>, 'Leading icon', <code>ReactNode</code>, '—'],
            [<code>disabled</code>, 'Disable this item', <code>boolean</code>, <code>false</code>],
          ]}
        />

      </div>
    </>
  );
}
