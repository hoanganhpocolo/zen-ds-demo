import { useState } from 'react';
import { Checkbox } from '@zen/components';
import { DemoBlock } from './DemoBlock';

export function CheckboxPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      {/* ── Header ── */}
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
        <h1 className="docs-page-title text-display-1">Checkbox</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A checkbox input with label and optional caption. Supports left/right check positioning, controlled/uncontrolled state, and uses component tokens for brand/neutral theming.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

      {/* ── When to Use ── */}
      <div className="docs-when-to-use">
        <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>When to use</h3>
        <ul className="text-body-small">
          <li>For binary choices: agree/disagree, enable/disable, select/deselect.</li>
          <li>Use <strong>checkSide="right"</strong> to place the checkbox after the label.</li>
          <li>Use <strong>caption</strong> for additional context below the label.</li>
          <li>Checkbox color follows the component theme (brand or neutral).</li>
        </ul>
      </div>

      {/* ── Examples ── */}
      <h2 className="docs-section-title text-h3">Examples</h2>

      <div className="docs-demo-grid">
        {/* Basic */}
        <DemoBlock
          title="Basic"
          description="Default checkbox with label. Click to toggle."
          direction="column"
          fullWidth
        >
          <Checkbox label="Accept terms and conditions" />
          <Checkbox label="Subscribe to newsletter" defaultChecked />
        </DemoBlock>

        {/* Check side */}
        <DemoBlock
          title="Check Side"
          description="Checkbox can appear on the left (default) or right of the label."
          direction="column"
          fullWidth
        >
          <Checkbox label="Check on the left" checkSide="left" />
          <Checkbox label="Check on the right" checkSide="right" />
        </DemoBlock>

        {/* With caption */}
        <DemoBlock
          title="With Caption"
          description="Additional context text below the label."
          direction="column"
          fullWidth
        >
          <Checkbox
            label="Enable notifications"
            caption="You'll receive email notifications for important updates."
          />
          <Checkbox
            label="Share analytics"
            caption="Help us improve by sharing anonymous usage data."
            defaultChecked
          />
        </DemoBlock>

        {/* Controlled */}
        <DemoBlock
          title="Controlled"
          description="Fully controlled with checked and onChange props."
          direction="column"
          fullWidth
        >
          <Checkbox
            label="I agree to the privacy policy"
            caption="Please read the privacy policy before agreeing."
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <p className="text-body-small" style={{ color: 'var(--color-content-neutral-tertiary)' }}>
            State: {agreed ? 'Agreed' : 'Not agreed'}
          </p>
        </DemoBlock>

        {/* Disabled */}
        <DemoBlock
          title="Disabled"
          description="Disabled state for both checked and unchecked."
          direction="column"
          fullWidth
        >
          <Checkbox label="Disabled unchecked" disabled />
          <Checkbox label="Disabled checked" disabled defaultChecked />
          <Checkbox
            label="Disabled with caption"
            caption="This option is not available."
            disabled
          />
        </DemoBlock>

        {/* Group example */}
        <DemoBlock
          title="Checkbox Group"
          description="Multiple checkboxes for multi-select scenarios."
          direction="column"
          fullWidth
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-small)' }}>
            <Checkbox label="Design" defaultChecked />
            <Checkbox label="Development" defaultChecked />
            <Checkbox label="Marketing" />
            <Checkbox label="Sales" />
          </div>
        </DemoBlock>
      </div>

      {/* ── API ── */}
      <h2 className="docs-section-title text-h3">API</h2>

      <table className="docs-api-table text-body-small">
        <thead>
          <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>label</code></td>
            <td>Label text</td>
            <td><code>string</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>caption</code></td>
            <td>Caption text below the label</td>
            <td><code>string</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>checkSide</code></td>
            <td>Checkbox position relative to label</td>
            <td><code>'left'</code> | <code>'right'</code></td>
            <td><code>'left'</code></td>
          </tr>
          <tr>
            <td><code>checked</code></td>
            <td>Controlled checked state</td>
            <td><code>boolean</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>defaultChecked</code></td>
            <td>Initial checked state (uncontrolled)</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td><code>disabled</code></td>
            <td>Disable the checkbox</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
}
