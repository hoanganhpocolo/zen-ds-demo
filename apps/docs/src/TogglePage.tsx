import { useState } from 'react';
import { Toggle } from '@zen/components';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

export function TogglePage() {
  const [notifications, setNotifications] = useState(false);

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
        <h1 className="docs-page-title text-display-1">Toggle</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A toggle switch for binary on/off states. Supports sizes, label and caption text, toggle-first or text-first layout, and an optional bordered card variant.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        {/* ── When to Use ── */}
        <div className="docs-when-to-use">
          <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>When to use</h3>
          <ul className="text-body-small">
            <li>For instant on/off settings that take effect immediately — e.g. enable notifications, dark mode.</li>
            <li>Use <strong>toggleSide="left"</strong> to place the switch before the label (Toggle-First).</li>
            <li>Use <strong>border</strong> for card-style settings rows in forms or settings panels.</li>
            <li>Use <strong>caption</strong> to add a description below the label.</li>
          </ul>
        </div>

        {/* ── Examples ── */}
        <h2 className="docs-section-title text-h3">Examples</h2>

        <div className="docs-demo-grid">

          {/* Basic */}
          <DemoBlock
            title="Basic"
            description="Default toggle switch (text-first, medium size)."
            direction="column"
            fullWidth
          >
            <Toggle label="Enable notifications" />
            <Toggle label="Dark mode" defaultChecked />
          </DemoBlock>

          {/* With caption */}
          <DemoBlock
            title="With Caption"
            description="Optional caption provides additional context below the label."
            direction="column"
            fullWidth
          >
            <Toggle
              label="Push notifications"
              caption="Receive alerts when something important happens."
            />
            <Toggle
              label="Marketing emails"
              caption="We'll send you product updates and offers."
              defaultChecked
            />
          </DemoBlock>

          {/* Toggle-First */}
          <DemoBlock
            title="Toggle-First"
            description="Toggle switch placed on the left with toggleSide='left'."
            direction="column"
            fullWidth
          >
            <Toggle label="Wi-Fi" toggleSide="left" defaultChecked />
            <Toggle label="Bluetooth" toggleSide="left" />
            <Toggle label="Airplane mode" toggleSide="left" caption="Disables all wireless connections." />
          </DemoBlock>

          {/* Sizes */}
          <DemoBlock
            title="Sizes"
            description="Three sizes: small (32×20), medium (40×24), large (48×28)."
            direction="column"
            fullWidth
          >
            <Toggle label="Small" size="small" defaultChecked />
            <Toggle label="Medium" size="medium" defaultChecked />
            <Toggle label="Large" size="large" defaultChecked />
          </DemoBlock>

          {/* Controlled */}
          <DemoBlock
            title="Controlled"
            description="Fully controlled with checked and onChange props."
            direction="column"
            fullWidth
          >
            <Toggle
              label="Notifications"
              caption="Receive alerts and updates."
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
            <p className="text-body-small" style={{ color: 'var(--color-content-neutral-tertiary)' }}>
              State: {notifications ? 'On' : 'Off'}
            </p>
          </DemoBlock>

          {/* Disabled */}
          <DemoBlock
            title="Disabled"
            description="Disabled state for both on and off."
            direction="column"
            fullWidth
          >
            <Toggle label="Disabled off" disabled />
            <Toggle label="Disabled on" disabled defaultChecked />
            <Toggle label="Disabled with caption" caption="This option is not available." disabled />
          </DemoBlock>

          {/* Border / Card variant */}
          <DemoBlock
            title="Bordered"
            description="Card-style variant for settings panels. Uses border and padding."
            direction="column"
            fullWidth
          >
            <Toggle
              label="Push notifications"
              caption="Receive alerts when something important happens."
              border
              defaultChecked
            />
            <Toggle
              label="Marketing emails"
              caption="Product updates and offers."
              border
            />
            <Toggle
              label="Unavailable option"
              caption="This setting cannot be changed."
              border
              disabled
            />
          </DemoBlock>

          {/* Border + Toggle-First */}
          <DemoBlock
            title="Bordered Toggle-First"
            description="Bordered card with the toggle switch on the left."
            direction="column"
            fullWidth
          >
            <Toggle
              label="Dark mode"
              caption="Switch between light and dark appearance."
              border
              toggleSide="left"
              defaultChecked
            />
            <Toggle
              label="Compact view"
              caption="Reduce spacing to fit more content."
              border
              toggleSide="left"
            />
          </DemoBlock>

        </div>

        {/* ── API ── */}
        <h2 className="docs-section-title text-h3">API</h2>

        <ApiTable
          columns={['Property', 'Description', 'Type', 'Default']}
          rows={[
            [<code>label</code>, 'Label text', <code>string</code>, '—'],
            [<code>caption</code>, 'Caption text below the label', <code>string</code>, '—'],
            [<code>size</code>, 'Toggle switch size', <><code>'small'</code> | <code>'medium'</code> | <code>'large'</code></>, <code>'medium'</code>],
            [<code>toggleSide</code>, 'Side the switch sits on relative to the label', <><code>'left'</code> | <code>'right'</code></>, <code>'right'</code>],
            [<code>border</code>, 'Show bordered card wrapper', <code>boolean</code>, <code>false</code>],
            [<code>checked</code>, 'Controlled checked state', <code>boolean</code>, '—'],
            [<code>defaultChecked</code>, 'Initial checked state (uncontrolled)', <code>boolean</code>, <code>false</code>],
            [<code>disabled</code>, 'Disable the toggle', <code>boolean</code>, <code>false</code>],
            [<code>onChange</code>, 'Change handler', <code>React.ChangeEventHandler&lt;HTMLInputElement&gt;</code>, '—'],
          ]}
        />
      </div>
    </>
  );
}
