import { useState } from 'react';
import { Slider } from '@zen/components';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

export function SliderPage() {
  const [val, setVal] = useState(40);

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
        <h1 className="docs-page-title text-display-1">Slider</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A horizontal range input for selecting a numeric value within a range. Available in 3 sizes and 3 themes.
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="docs-page-body">

        {/* ── When to Use ── */}
        <div className="docs-when-to-use">
          <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>When to use</h3>
          <ul className="text-body-small">
            <li>To let users select a value within a continuous or stepped range.</li>
            <li>Use <strong>Small</strong> for compact UIs where space is limited.</li>
            <li>Use <strong>Medium</strong> as the default for most interfaces.</li>
            <li>Use <strong>Large</strong> for prominent controls or touch-first interfaces.</li>
            <li>Use <strong>White</strong> theme on dark or image backgrounds.</li>
          </ul>
        </div>

        {/* ── Examples ── */}
        <h2 className="docs-section-title text-h3">Examples</h2>

        <div className="docs-demo-grid">

          {/* Size */}
          <DemoBlock
            title="Size"
            description="3 sizes: Small (10px track), Medium (24px), Large (32px). Default is Medium."
            fullWidth
            direction="column"
            code={`<Slider size="small" defaultValue={60} showLabels />
<Slider size="medium" defaultValue={60} showLabels />
<Slider size="large" defaultValue={60} showLabels />`}
          >
            <Slider size="small" defaultValue={60} showLabels style={{ maxWidth: 480, width: '100%' }} />
            <Slider size="medium" defaultValue={60} showLabels style={{ maxWidth: 480, width: '100%' }} />
            <Slider size="large" defaultValue={60} showLabels style={{ maxWidth: 480, width: '100%' }} />
          </DemoBlock>

          {/* Theme */}
          <DemoBlock
            title="Theme"
            description="3 fill themes: Neutral, Accent, and White (for dark backgrounds)."
            fullWidth
            direction="column"
            code={`<Slider theme="neutral" defaultValue={50} showLabels />
<Slider theme="accent" defaultValue={65} showLabels />

{/* White theme — use on dark backgrounds */}
<Slider theme="white" defaultValue={40} showLabels />`}
          >
            <Slider theme="neutral" defaultValue={50} showLabels style={{ maxWidth: 480, width: '100%' }} />
            <Slider theme="accent" defaultValue={65} showLabels style={{ maxWidth: 480, width: '100%' }} />
            <Slider theme="white" defaultValue={40} showLabels style={{ maxWidth: 480, width: '100%' }} />
          </DemoBlock>

          {/* Controlled */}
          <DemoBlock
            title="Controlled"
            description="Pass value and onChange to control the slider externally."
            fullWidth
            direction="column"
            code={`const [val, setVal] = useState(40);

<Slider value={val} onChange={setVal} showLabels />
<p>Value: <strong>{val}</strong></p>`}
          >
            <Slider value={val} onChange={setVal} showLabels style={{ maxWidth: 480, width: '100%' }} />
            <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)' }}>
              Value: <strong style={{ color: 'var(--color-content-neutral-primary)' }}>{val}</strong>
            </p>
          </DemoBlock>

          {/* Disabled */}
          <DemoBlock
            title="Disabled — Medium"
            description="Disabled sliders use dedicated disabled tokens and block all interaction."
            fullWidth
            code={`<Slider defaultValue={45} disabled showLabels />`}
          >
            <Slider defaultValue={45} disabled showLabels style={{ maxWidth: 480, width: '100%' }} />
          </DemoBlock>

          <DemoBlock
            title="Disabled — Small"
            description="Small disabled: container keeps neutral-subtle, fill and thumb use disabled-neutral-solid."
            fullWidth
            code={`<Slider size="small" defaultValue={45} disabled showLabels />`}
          >
            <Slider size="small" defaultValue={45} disabled showLabels style={{ maxWidth: 480, width: '100%' }} />
          </DemoBlock>

        </div>

        {/* ── API ── */}
        <h2 className="docs-section-title text-h3">API</h2>
        <ApiTable
          columns={['Property', 'Description', 'Type', 'Default']}
          rows={[
            [<code>value</code>, 'Controlled value', <code>number</code>, '—'],
            [<code>defaultValue</code>, 'Uncontrolled default value', <code>number</code>, <code>50</code>],
            [<code>min</code>, 'Minimum value', <code>number</code>, <code>0</code>],
            [<code>max</code>, 'Maximum value', <code>number</code>, <code>100</code>],
            [<code>step</code>, 'Step increment', <code>number</code>, <code>1</code>],
            [<code>onChange</code>, 'Called when value changes', <code>(value: number) =&gt; void</code>, '—'],
            [<code>theme</code>, 'Fill color theme', <><code>'neutral'</code> | <code>'accent'</code> | <code>'white'</code></>, <code>'neutral'</code>],
            [<code>size</code>, 'Track and thumb size', <><code>'small'</code> | <code>'medium'</code> | <code>'large'</code></>, <code>'medium'</code>],
            [<code>showLabels</code>, 'Show min/max labels below track', <code>boolean</code>, <code>false</code>],
            [<code>disabled</code>, 'Disabled state', <code>boolean</code>, <code>false</code>],
          ]}
        />

      </div>
    </>
  );
}
