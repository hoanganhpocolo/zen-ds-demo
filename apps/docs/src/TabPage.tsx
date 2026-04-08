import { useState } from 'react';
import { TabItem, TabGroup } from '@zen/components';
import { Home01, User, Settings01, Bell01 } from '@zen/icons/line';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

const tabs = ['Overview', 'Details', 'Settings', 'Activity'];

function InteractiveTabsIndicator() {
  const [selected, setSelected] = useState(0);
  return (
    <TabGroup tabStyle="indicator">
      {tabs.map((t, i) => (
        <TabItem
          key={t}
          label={t}
          tabStyle="indicator"
          selected={selected === i}
          onClick={() => setSelected(i)}
        />
      ))}
    </TabGroup>
  );
}

function InteractiveTabsSubtle() {
  const [selected, setSelected] = useState(0);
  return (
    <TabGroup tabStyle="subtle">
      {tabs.map((t, i) => (
        <TabItem
          key={t}
          label={t}
          tabStyle="subtle"
          selected={selected === i}
          onClick={() => setSelected(i)}
        />
      ))}
    </TabGroup>
  );
}

const iconTabs = [
  { label: 'Home', icon: <Home01 size={20} /> },
  { label: 'Profile', icon: <User size={20} /> },
  { label: 'Settings', icon: <Settings01 size={20} /> },
  { label: 'Notifications', icon: <Bell01 size={20} /> },
];

const iconOnlyTabs = [
  <Home01 size={24} />,
  <User size={24} />,
  <Settings01 size={24} />,
  <Bell01 size={24} />,
];

const smallTabs = ['Overview', 'Details', 'Settings'];

function InteractiveTabsWithIcons() {
  const [selIndicator, setSelIndicator] = useState(0);
  const [selSubtle, setSelSubtle] = useState(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-large)' }}>
      <TabGroup tabStyle="indicator">
        {iconTabs.map((t, i) => (
          <TabItem key={i} label={t.label} icon={t.icon} tabStyle="indicator" selected={selIndicator === i} onClick={() => setSelIndicator(i)} />
        ))}
      </TabGroup>
      <TabGroup tabStyle="subtle">
        {iconTabs.map((t, i) => (
          <TabItem key={i} label={t.label} icon={t.icon} tabStyle="subtle" selected={selSubtle === i} onClick={() => setSelSubtle(i)} />
        ))}
      </TabGroup>
    </div>
  );
}

function InteractiveTabsIconOnly() {
  const [selIndicator, setSelIndicator] = useState(0);
  const [selSubtle, setSelSubtle] = useState(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-large)' }}>
      <TabGroup tabStyle="indicator">
        {iconOnlyTabs.map((icon, i) => (
          <TabItem key={i} icon={icon} tabStyle="indicator" selected={selIndicator === i} onClick={() => setSelIndicator(i)} />
        ))}
      </TabGroup>
      <TabGroup tabStyle="subtle">
        {iconOnlyTabs.map((icon, i) => (
          <TabItem key={i} icon={icon} tabStyle="subtle" selected={selSubtle === i} onClick={() => setSelSubtle(i)} />
        ))}
      </TabGroup>
    </div>
  );
}

function InteractiveTabsSmall() {
  const [selIndicator, setSelIndicator] = useState(0);
  const [selSubtle, setSelSubtle] = useState(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-large)' }}>
      <TabGroup tabStyle="indicator">
        {smallTabs.map((t, i) => (
          <TabItem key={t} label={t} tabStyle="indicator" size="s" selected={selIndicator === i} onClick={() => setSelIndicator(i)} />
        ))}
      </TabGroup>
      <TabGroup tabStyle="subtle">
        {smallTabs.map((t, i) => (
          <TabItem key={t} label={t} tabStyle="subtle" size="s" selected={selSubtle === i} onClick={() => setSelSubtle(i)} />
        ))}
      </TabGroup>
    </div>
  );
}

// ── Code snippets ──────────────────────────────────────────────────────────

const CODE_INDICATOR = `\
const tabs = ['Overview', 'Details', 'Settings', 'Activity'];

function MyTabs() {
  const [selected, setSelected] = useState(0);
  return (
    <TabGroup tabStyle="indicator">
      {tabs.map((t, i) => (
        <TabItem
          key={t}
          label={t}
          tabStyle="indicator"
          selected={selected === i}
          onClick={() => setSelected(i)}
        />
      ))}
    </TabGroup>
  );
}`;

const CODE_SUBTLE = `\
const tabs = ['Overview', 'Details', 'Settings', 'Activity'];

function MyTabs() {
  const [selected, setSelected] = useState(0);
  return (
    <TabGroup tabStyle="subtle">
      {tabs.map((t, i) => (
        <TabItem
          key={t}
          label={t}
          tabStyle="subtle"
          selected={selected === i}
          onClick={() => setSelected(i)}
        />
      ))}
    </TabGroup>
  );
}`;

const CODE_WITH_ICONS = `\
import { Home01, User, Settings01, Bell01 } from '@zen/icons/line';

const iconTabs = [
  { label: 'Home',          icon: <Home01 size={20} /> },
  { label: 'Profile',       icon: <User size={20} /> },
  { label: 'Settings',      icon: <Settings01 size={20} /> },
  { label: 'Notifications', icon: <Bell01 size={20} /> },
];

function MyTabs() {
  const [selected, setSelected] = useState(0);
  return (
    <TabGroup tabStyle="indicator">
      {iconTabs.map((t, i) => (
        <TabItem
          key={t.label}
          label={t.label}
          icon={t.icon}
          tabStyle="indicator"
          selected={selected === i}
          onClick={() => setSelected(i)}
        />
      ))}
    </TabGroup>
  );
}`;

const CODE_ICON_ONLY = `\
import { Home01, User, Settings01, Bell01 } from '@zen/icons/line';

const icons = [
  <Home01 size={24} />,
  <User size={24} />,
  <Settings01 size={24} />,
  <Bell01 size={24} />,
];

function MyTabs() {
  const [selected, setSelected] = useState(0);
  return (
    <TabGroup tabStyle="indicator">
      {icons.map((icon, i) => (
        <TabItem
          key={i}
          icon={icon}
          tabStyle="indicator"
          selected={selected === i}
          onClick={() => setSelected(i)}
        />
      ))}
    </TabGroup>
  );
}`;

const CODE_SMALL = `\
// Pass size="s" to both TabItem and TabGroup for compact layouts
function MyTabs() {
  const [selected, setSelected] = useState(0);
  return (
    <TabGroup tabStyle="indicator">
      {['Overview', 'Details', 'Settings'].map((t, i) => (
        <TabItem
          key={t}
          label={t}
          tabStyle="indicator"
          size="s"
          selected={selected === i}
          onClick={() => setSelected(i)}
        />
      ))}
    </TabGroup>
  );
}`;

const CODE_DISABLED = `\
<TabGroup>
  <TabItem label="Active"   tabStyle="indicator" selected />
  <TabItem label="Default"  tabStyle="indicator" />
  <TabItem label="Disabled" tabStyle="indicator" disabled />
</TabGroup>

<TabGroup>
  <TabItem label="Active"   tabStyle="subtle" selected />
  <TabItem label="Default"  tabStyle="subtle" />
  <TabItem label="Disabled" tabStyle="subtle" disabled />
</TabGroup>`;

// ── Page ───────────────────────────────────────────────────────────────────

export function TabPage() {
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
        <h1 className="docs-page-title text-display-1">Tab</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            Navigation tabs in two styles — indicator (bottom border) and subtle (filled background). Supports label, icon, or both.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        {/* Indicator */}
        <h2 className="text-h3 docs-section-title">Indicator</h2>
        <DemoBlock
          title="Indicator"
          description="Selected tab shows a bottom border accent line."
          code={CODE_INDICATOR}
          style={{ marginBottom: 'var(--gap-3xlarge)' }}
        >
          <InteractiveTabsIndicator />
        </DemoBlock>

        {/* Subtle */}
        <h2 className="text-h3 docs-section-title">Subtle</h2>
        <DemoBlock
          title="Subtle"
          description="Selected tab shows a filled background highlight."
          code={CODE_SUBTLE}
          style={{ marginBottom: 'var(--gap-3xlarge)' }}
        >
          <InteractiveTabsSubtle />
        </DemoBlock>

        {/* With icons */}
        <h2 className="text-h3 docs-section-title">With Icons</h2>
        <DemoBlock
          title="With Icons"
          description="Icon and label together — icon is 20px, gap 8px."
          code={CODE_WITH_ICONS}
          style={{ marginBottom: 'var(--gap-3xlarge)' }}
        >
          <InteractiveTabsWithIcons />
        </DemoBlock>

        {/* Icon only */}
        <h2 className="text-h3 docs-section-title">Icon Only</h2>
        <DemoBlock
          title="Icon Only"
          description="Square padding — no label, icon fills the tab."
          code={CODE_ICON_ONLY}
          style={{ marginBottom: 'var(--gap-3xlarge)' }}
        >
          <InteractiveTabsIconOnly />
        </DemoBlock>

        {/* Small size */}
        <h2 className="text-h3 docs-section-title">Small Size</h2>
        <DemoBlock
          title="Small (s)"
          description="Smaller text (14px) and icon (20px) for compact layouts."
          code={CODE_SMALL}
          style={{ marginBottom: 'var(--gap-3xlarge)' }}
        >
          <InteractiveTabsSmall />
        </DemoBlock>

        {/* Disabled */}
        <h2 className="text-h3 docs-section-title">Disabled</h2>
        <DemoBlock
          title="Disabled"
          description="Disabled tabs are non-interactive with muted text."
          code={CODE_DISABLED}
          style={{ marginBottom: 'var(--gap-3xlarge)' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-large)' }}>
            <TabGroup>
              <TabItem label="Active" tabStyle="indicator" selected />
              <TabItem label="Default" tabStyle="indicator" />
              <TabItem label="Disabled" tabStyle="indicator" disabled />
            </TabGroup>
            <TabGroup>
              <TabItem label="Active" tabStyle="subtle" selected />
              <TabItem label="Default" tabStyle="subtle" />
              <TabItem label="Disabled" tabStyle="subtle" disabled />
            </TabGroup>
          </div>
        </DemoBlock>

        {/* API */}
        <h2 className="text-h3 docs-section-title">API — TabItem</h2>
        <ApiTable
          style={{ marginBottom: 'var(--gap-3xlarge)' }}
          columns={['Prop', 'Type', 'Default', 'Description']}
          rows={[
            [<code>tabStyle</code>, <><code>'indicator'</code> | <code>'subtle'</code></>, <code>'indicator'</code>, 'Visual style'],
            [<code>size</code>, <><code>'m'</code> | <code>'s'</code></>, <code>'m'</code>, 'Size variant'],
            [<code>selected</code>, <code>boolean</code>, <code>false</code>, 'Active/selected state'],
            [<code>disabled</code>, <code>boolean</code>, <code>false</code>, 'Disabled state'],
            [<code>label</code>, <code>ReactNode</code>, '—', 'Tab label text'],
            [<code>icon</code>, <code>ReactNode</code>, '—', 'Icon element (use @zen/icons)'],
          ]}
        />

      </div>
    </>
  );
}
