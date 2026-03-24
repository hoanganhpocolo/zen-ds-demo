import { useState } from 'react';
import { Slider } from '@zen/components';
import { ApiTable } from './ApiTable';

export function SliderPage() {
  const [val, setVal] = useState(40);

  return (
    <div className="docs-page-body">
      <div className="docs-page-header" style={{ marginBottom: 'var(--gap-3xlarge)' }}>
        <h1 className="text-h1 docs-page-title">Slider</h1>
        <p className="text-body-base docs-page-description">
          A horizontal range input for selecting a numeric value within a range. Available in 3 sizes and 3 themes.
        </p>
      </div>

      {/* Sizes */}
      <h2 className="text-h3 docs-section-title">Sizes</h2>
      <div className="docs-demo-grid" style={{ marginBottom: 'var(--gap-3xlarge)' }}>
        {(['small', 'medium', 'large'] as const).map((size) => (
          <div key={size} className="docs-demo" data-full-width="true">
            <div className="docs-demo-preview" style={{ padding: 'var(--padding-3xlarge) var(--padding-4xlarge)' }}>
              <Slider size={size} defaultValue={60} showLabels style={{ maxWidth: 400, width: '100%' }} />
            </div>
            <div className="docs-demo-meta">
              <p className="text-body-small docs-demo-title" style={{ fontWeight: 'var(--font-weight-secondary)', textTransform: 'capitalize' }}>{size}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Themes */}
      <h2 className="text-h3 docs-section-title">Themes</h2>
      <div className="docs-demo-grid" style={{ marginBottom: 'var(--gap-3xlarge)' }}>
        <div className="docs-demo" data-full-width="true">
          <div className="docs-demo-preview" style={{ flexDirection: 'column', alignItems: 'stretch', padding: 'var(--padding-3xlarge) var(--padding-4xlarge)', gap: 'var(--gap-xlarge)' }}>
            <Slider theme="neutral" defaultValue={50} showLabels />
            <Slider theme="accent" defaultValue={65} showLabels />
            <div style={{ background: 'var(--color-bg-fill-neutral-solid-default)', borderRadius: 'var(--radius-large)', padding: 'var(--padding-xlarge)' }}>
              <Slider theme="white" defaultValue={40} showLabels />
            </div>
          </div>
          <div className="docs-demo-meta">
            <p className="text-body-small docs-demo-title" style={{ fontWeight: 'var(--font-weight-secondary)' }}>neutral / accent / white</p>
          </div>
        </div>
      </div>

      {/* Controlled */}
      <h2 className="text-h3 docs-section-title">Controlled</h2>
      <div className="docs-demo-grid" style={{ marginBottom: 'var(--gap-3xlarge)' }}>
        <div className="docs-demo" data-full-width="true">
          <div className="docs-demo-preview" style={{ flexDirection: 'column', alignItems: 'center', gap: 'var(--gap-medium)', padding: 'var(--padding-3xlarge) var(--padding-4xlarge)' }}>
            <Slider value={val} onChange={setVal} showLabels style={{ maxWidth: 400, width: '100%' }} />
            <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)' }}>
              Value: <strong style={{ color: 'var(--color-content-neutral-primary)' }}>{val}</strong>
            </p>
          </div>
          <div className="docs-demo-meta">
            <p className="text-body-small docs-demo-title" style={{ fontWeight: 'var(--font-weight-secondary)' }}>Controlled</p>
          </div>
        </div>
      </div>

      {/* Disabled */}
      <h2 className="text-h3 docs-section-title">Disabled</h2>
      <div className="docs-demo-grid" style={{ marginBottom: 'var(--gap-3xlarge)' }}>
        <div className="docs-demo" data-full-width="true">
          <div className="docs-demo-preview" style={{ padding: 'var(--padding-3xlarge) var(--padding-4xlarge)' }}>
            <Slider defaultValue={45} disabled showLabels style={{ maxWidth: 400, width: '100%' }} />
          </div>
          <div className="docs-demo-meta">
            <p className="text-body-small docs-demo-title" style={{ fontWeight: 'var(--font-weight-secondary)' }}>Disabled</p>
          </div>
        </div>
      </div>

      {/* API */}
      <h2 className="text-h3 docs-section-title">API</h2>
      <ApiTable
        columns={['Prop', 'Type', 'Default', 'Description']}
        rows={[
          [<code>value</code>, <code>number</code>, '—', 'Controlled value'],
          [<code>defaultValue</code>, <code>number</code>, <code>50</code>, 'Uncontrolled default'],
          [<code>min</code>, <code>number</code>, <code>0</code>, 'Minimum value'],
          [<code>max</code>, <code>number</code>, <code>100</code>, 'Maximum value'],
          [<code>step</code>, <code>number</code>, <code>1</code>, 'Step increment'],
          [<code>onChange</code>, <code>(value: number) =&gt; void</code>, '—', 'Called when value changes'],
          [<code>theme</code>, <><code>'neutral'</code> | <code>'accent'</code> | <code>'white'</code></>, <code>'neutral'</code>, 'Fill color theme'],
          [<code>size</code>, <><code>'small'</code> | <code>'medium'</code> | <code>'large'</code></>, <code>'medium'</code>, 'Track and thumb size'],
          [<code>showLabels</code>, <code>boolean</code>, <code>false</code>, 'Show min/max labels below track'],
          [<code>disabled</code>, <code>boolean</code>, <code>false</code>, 'Disabled state'],
        ]}
      />
    </div>
  );
}
