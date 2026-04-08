import { useState } from 'react';
import { NumberField } from '@zen/components';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

export function NumberFieldPage() {
  const [qty, setQty] = useState<number | undefined>(1);
  const [centered, setCentered] = useState<number | undefined>(5);

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
        <h1 className="docs-page-title text-display-1">Number Field</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A numeric input with increment/decrement stepper buttons. Supports left-aligned (trailing steppers) and center-aligned (split steppers) layouts.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

      {/* ── When to Use ── */}
      <div className="docs-when-to-use">
        <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>When to use</h3>
        <ul className="text-body-small">
          <li>For numeric input where the user needs to type or step through values.</li>
          <li>Use <strong>align="left"</strong> (default) for form-style inputs with trailing [−][+] buttons.</li>
          <li>Use <strong>align="center"</strong> for compact quantity selectors with split [−] input [+] layout.</li>
          <li>Use <strong>min</strong> and <strong>max</strong> to constrain the range.</li>
        </ul>
      </div>

      {/* ── Examples ── */}
      <h2 className="docs-section-title text-h3">Examples</h2>

      <div className="docs-demo-grid">
        {/* Sizes — left-aligned */}
        <DemoBlock
          title="Sizes (Left-aligned)"
          description="4 sizes with trailing stepper buttons."
          direction="column"
          fullWidth
        >
          <NumberField size="s" label="Small" placeholder="0" />
          <NumberField size="m" label="Medium (default)" placeholder="0" />
          <NumberField size="l" label="Large" placeholder="0" />
          <NumberField size="xl" label="XLarge" placeholder="0" />
        </DemoBlock>

        {/* Center-aligned */}
        <DemoBlock
          title="Center-aligned"
          description="Split [−] [value] [+] layout for compact quantity selectors."
          direction="column"
          fullWidth
        >
          <NumberField
            size="s"
            label="Quantity (Small)"
            align="center"
            value={centered}
            onChange={setCentered}
            min={0}
            max={99}
          />
          <NumberField
            size="m"
            label="Quantity (Medium)"
            align="center"
            value={centered}
            onChange={setCentered}
            min={0}
            max={99}
          />
          <NumberField
            size="l"
            label="Quantity (Large)"
            align="center"
            value={centered}
            onChange={setCentered}
            min={0}
            max={99}
          />
        </DemoBlock>

        {/* Controlled with min/max */}
        <DemoBlock
          title="Controlled with Min/Max"
          description="Constrained to 1–10. Stepper buttons disable at boundaries."
          direction="column"
          fullWidth
        >
          <NumberField
            label="Quantity"
            value={qty}
            onChange={setQty}
            min={1}
            max={10}
            helpText="Between 1 and 10."
          />
        </DemoBlock>

        {/* Step */}
        <DemoBlock
          title="Custom Step"
          description="Step by 0.5 or any custom increment."
          direction="column"
          fullWidth
        >
          <NumberField label="Temperature" placeholder="36.5" step={0.5} helpText="Step by 0.5" />
          <NumberField label="Score" placeholder="0" step={10} min={0} max={100} helpText="Step by 10" />
        </DemoBlock>

        {/* With help text & error */}
        <DemoBlock
          title="Help Text & Error"
          description="Standard help text and error states."
          direction="column"
          fullWidth
        >
          <NumberField label="Age" placeholder="18" helpText="Must be 18 or older." min={0} />
          <NumberField label="Seats" placeholder="1" error="Please select at least 1 seat." defaultValue="" />
        </DemoBlock>

        {/* Read-only & Disabled */}
        <DemoBlock
          title="Read-only & Disabled"
          description="Read-only shows dashed border. Disabled dims the field."
          direction="column"
          fullWidth
        >
          <NumberField label="Read-only" defaultValue={42} readOnly />
          <NumberField label="Disabled" placeholder="0" disabled helpText="This field is disabled." />
        </DemoBlock>
      </div>

      {/* ── API ── */}
      <h2 className="docs-section-title text-h3">API</h2>

      <ApiTable
        columns={['Property', 'Description', 'Type', 'Default']}
        rows={[
          [<code>label</code>, 'Label text above the field', <code>string</code>, '—'],
          [<code>size</code>, 'Size variant', <><code>'s'</code> | <code>'m'</code> | <code>'l'</code> | <code>'xl'</code></>, <code>'m'</code>],
          [<code>align</code>, 'Layout: left = trailing [−][+], center = split [−] value [+]', <><code>'left'</code> | <code>'center'</code></>, <code>'left'</code>],
          [<code>step</code>, 'Step increment', <code>number</code>, <code>1</code>],
          [<code>min</code>, 'Minimum value', <code>number</code>, '—'],
          [<code>max</code>, 'Maximum value', <code>number</code>, '—'],
          [<code>leading</code>, 'Leading element (left-aligned mode only)', <code>ReactNode</code>, '—'],
          [<code>helpText</code>, 'Help text below the field', <><code>string</code> | <code>{'{ message, tone?, icon? }'}</code></>, '—'],
          [<code>error</code>, 'Error state', <code>boolean | string</code>, '—'],
          [<code>disabled</code>, 'Disable the input', <code>boolean</code>, <code>false</code>],
          [<code>readOnly</code>, 'Read-only mode', <code>boolean</code>, <code>false</code>],
        ]}
      />
      </div>
    </>
  );
}
