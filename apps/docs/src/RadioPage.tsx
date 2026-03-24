import { useState } from 'react';
import { Radio, RadioGroup } from '@zen/components';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

export function RadioPage() {
  const [plan, setPlan] = useState('monthly');
  const [delivery, setDelivery] = useState('standard');

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
        <h1 className="docs-page-title text-display-1">Radio Button</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            Single-select control for choosing one option from a group.
            Supports label, caption, bordered card variant, and left/right mark position.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        <h2 className="docs-section-title text-h3">States</h2>
        <div className="docs-demo-grid">

          <DemoBlock title="Default">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-xsmall)' }}>
              <Radio name="demo-states" label="Unselected" defaultChecked={false} />
              <Radio name="demo-states" label="Selected" defaultChecked />
              <Radio name="demo-states" label="Disabled unselected" disabled />
              <Radio name="demo-states" label="Disabled selected" disabled defaultChecked />
            </div>
          </DemoBlock>

          <DemoBlock title="With caption">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-xsmall)' }}>
              <Radio
                name="demo-caption"
                label="Standard plan"
                caption="Billed monthly, cancel anytime"
                defaultChecked={false}
              />
              <Radio
                name="demo-caption"
                label="Pro plan"
                caption="Billed annually, save 20%"
                defaultChecked
              />
              <Radio
                name="demo-caption"
                label="Enterprise"
                caption="Custom pricing, contact sales"
                disabled
              />
            </div>
          </DemoBlock>

        </div>

        <h2 className="docs-section-title text-h3">Border variant</h2>
        <div className="docs-demo-grid">

          <DemoBlock title="Radio mark — left">
            <RadioGroup
              name="plan"
              value={plan}
              onChange={setPlan}
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-xsmall)', width: '100%' }}
            >
              <Radio
                value="monthly"
                label="Monthly billing"
                caption="$12 / month"
                border
              />
              <Radio
                value="annual"
                label="Annual billing"
                caption="$99 / year — save 31%"
                border
              />
              <Radio
                value="lifetime"
                label="Lifetime access"
                caption="One-time payment"
                border
                disabled
              />
            </RadioGroup>
          </DemoBlock>

          <DemoBlock title="Radio mark — right">
            <RadioGroup
              name="delivery"
              value={delivery}
              onChange={setDelivery}
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-xsmall)', width: '100%' }}
            >
              <Radio
                value="standard"
                label="Standard delivery"
                caption="3–5 business days"
                radioSide="right"
                border
              />
              <Radio
                value="express"
                label="Express delivery"
                caption="1–2 business days"
                radioSide="right"
                border
              />
              <Radio
                value="overnight"
                label="Overnight delivery"
                caption="Next business day"
                radioSide="right"
                border
              />
            </RadioGroup>
          </DemoBlock>

        </div>

        <h2 className="docs-section-title text-h3">RadioGroup</h2>
        <div className="docs-demo-grid">

          <DemoBlock title="Controlled group">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-xsmall)', width: '100%' }}>
              <RadioGroup
                name="size"
                defaultValue="m"
                style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-3xsmall)' }}
              >
                <Radio value="xs" label="Extra small" />
                <Radio value="s"  label="Small" />
                <Radio value="m"  label="Medium" />
                <Radio value="l"  label="Large" />
                <Radio value="xl" label="Extra large" />
              </RadioGroup>
            </div>
          </DemoBlock>

          <DemoBlock title="Mark on right side">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-xsmall)', width: '100%' }}>
              <RadioGroup
                name="color"
                defaultValue="blue"
                style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-3xsmall)' }}
              >
                <Radio value="red"    label="Red"    radioSide="right" />
                <Radio value="green"  label="Green"  radioSide="right" />
                <Radio value="blue"   label="Blue"   radioSide="right" />
                <Radio value="purple" label="Purple" radioSide="right" />
              </RadioGroup>
            </div>
          </DemoBlock>

        </div>

        <h2 className="docs-section-title text-h3">API — Radio</h2>
        <ApiTable
          columns={['Property', 'Description', 'Type', 'Default']}
          rows={[
            [<code>value</code>, 'Option value for RadioGroup matching', <code>string</code>, '—'],
            [<code>label</code>, 'Label text', <code>string</code>, '—'],
            [<code>caption</code>, 'Secondary caption below label', <code>string</code>, '—'],
            [<code>radioSide</code>, 'Mark position', <><code>'left'</code> | <code>'right'</code></>, <code>'left'</code>],
            [<code>border</code>, 'Bordered card variant', <code>boolean</code>, <code>false</code>],
            [<code>checked</code>, 'Controlled checked state', <code>boolean</code>, '—'],
            [<code>disabled</code>, 'Disable interaction', <code>boolean</code>, <code>false</code>],
          ]}
        />

        <h2 className="docs-section-title text-h3">API — RadioGroup</h2>
        <ApiTable
          columns={['Property', 'Description', 'Type', 'Default']}
          rows={[
            [<code>value</code>, 'Controlled selected value', <code>string</code>, '—'],
            [<code>defaultValue</code>, 'Initial value (uncontrolled)', <code>string</code>, '—'],
            [<code>onChange</code>, 'Called when selection changes', <code>(value: string) =&gt; void</code>, '—'],
            [<code>name</code>, 'Shared name for all child inputs', <code>string</code>, '—'],
          ]}
        />

      </div>
    </>
  );
}
