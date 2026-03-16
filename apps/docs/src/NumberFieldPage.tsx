import { useState } from 'react';
import { NumberField } from '@zen/components';
import { DemoBlock } from './DemoBlock';

export function NumberFieldPage() {
  const [qty, setQty] = useState<number | undefined>(1);
  const [centered, setCentered] = useState<number | undefined>(5);

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
            <td>Label text above the field</td>
            <td><code>string</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>size</code></td>
            <td>Size variant</td>
            <td><code>'s'</code> | <code>'m'</code> | <code>'l'</code> | <code>'xl'</code></td>
            <td><code>'m'</code></td>
          </tr>
          <tr>
            <td><code>align</code></td>
            <td>Layout: left = trailing [−][+], center = split [−] value [+]</td>
            <td><code>'left'</code> | <code>'center'</code></td>
            <td><code>'left'</code></td>
          </tr>
          <tr>
            <td><code>step</code></td>
            <td>Step increment</td>
            <td><code>number</code></td>
            <td><code>1</code></td>
          </tr>
          <tr>
            <td><code>min</code></td>
            <td>Minimum value</td>
            <td><code>number</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>max</code></td>
            <td>Maximum value</td>
            <td><code>number</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>leading</code></td>
            <td>Leading element (left-aligned mode only)</td>
            <td><code>ReactNode</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>helpText</code></td>
            <td>Help text below the field</td>
            <td><code>string</code> | <code>{'{ message, tone?, icon? }'}</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>error</code></td>
            <td>Error state</td>
            <td><code>boolean | string</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>disabled</code></td>
            <td>Disable the input</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td><code>readOnly</code></td>
            <td>Read-only mode</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
}
