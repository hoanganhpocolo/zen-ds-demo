import { useState } from 'react';
import { ProgressBar, ProgressCircle } from '@zen/components';
import { DemoBlock } from './DemoBlock';

export function ProgressPage() {
  const [value, setValue] = useState(40);

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
        <h1 className="docs-page-title text-display-1">Progress</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            Two display types: Bar for linear progress, Circle for circular progress.
            Both auto-transition to a done state at 100%.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        {/* ── Interactive ── */}
        <h2 className="docs-section-title text-h3">Interactive</h2>
        <div className="docs-demo-grid">
          <DemoBlock title="Bar + Circle — live preview" fullWidth>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-large)', width: '100%' }}>
              <div style={{ display: 'flex', gap: 'var(--gap-2xlarge)', alignItems: 'center', flexWrap: 'wrap' }}>
                <ProgressCircle value={value} theme="accent"  label={`Accent · ${value}%`} />
                <ProgressCircle value={value} theme="neutral" label={`Neutral · ${value}%`} />
              </div>
              <ProgressBar value={value} theme="accent"  label={`Accent · ${value}%`}  style={{ width: '100%' }} />
              <ProgressBar value={value} theme="neutral" label={`Neutral · ${value}%`} style={{ width: '100%' }} />
              <ProgressBar value={value} theme="status"  label={`Status · ${value}%`}  style={{ width: '100%' }} />
              <input
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>
          </DemoBlock>
        </div>

        {/* ── Progress Bar ── */}
        <h2 className="docs-section-title text-h3">Progress Bar</h2>
        <div className="docs-demo-grid">

          <DemoBlock title="Themes">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)', width: '100%' }}>
              <ProgressBar value={60} theme="accent"  label="Accent"  style={{ width: '100%' }} />
              <ProgressBar value={60} theme="neutral" label="Neutral" style={{ width: '100%' }} />
            </div>
          </DemoBlock>

          <DemoBlock title="Status theme (auto-colors by value)">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)', width: '100%' }}>
              <ProgressBar value={0}   theme="status" label="0%"   style={{ width: '100%' }} />
              <ProgressBar value={20}  theme="status" label="20%"  style={{ width: '100%' }} />
              <ProgressBar value={40}  theme="status" label="40%"  style={{ width: '100%' }} />
              <ProgressBar value={80}  theme="status" label="80%"  style={{ width: '100%' }} />
              <ProgressBar value={100} theme="status" label="100%" style={{ width: '100%' }} />
            </div>
          </DemoBlock>

        </div>

        {/* ── Progress Circle ── */}
        <h2 className="docs-section-title text-h3">Progress Circle</h2>
        <div className="docs-demo-grid">

          <DemoBlock title="Accent theme">
            <div style={{ display: 'flex', gap: 'var(--gap-large)', alignItems: 'center', flexWrap: 'wrap' }}>
              <ProgressCircle value={0}   theme="accent" label="0%"   />
              <ProgressCircle value={25}  theme="accent" label="25%"  />
              <ProgressCircle value={50}  theme="accent" label="50%"  />
              <ProgressCircle value={75}  theme="accent" label="75%"  />
              <ProgressCircle value={100} theme="accent" label="100%" />
            </div>
          </DemoBlock>

          <DemoBlock title="Neutral theme">
            <div style={{ display: 'flex', gap: 'var(--gap-large)', alignItems: 'center', flexWrap: 'wrap' }}>
              <ProgressCircle value={0}   theme="neutral" label="0%"   />
              <ProgressCircle value={25}  theme="neutral" label="25%"  />
              <ProgressCircle value={50}  theme="neutral" label="50%"  />
              <ProgressCircle value={75}  theme="neutral" label="75%"  />
              <ProgressCircle value={100} theme="neutral" label="100%" />
            </div>
          </DemoBlock>

          <DemoBlock title="Sizes">
            <div style={{ display: 'flex', gap: 'var(--gap-large)', alignItems: 'center' }}>
              <ProgressCircle value={60} size="m" theme="accent" label="Medium" />
              <ProgressCircle value={60} size="s" theme="accent" label="Small"  />
            </div>
          </DemoBlock>

          <DemoBlock title="Done state (value = 100)">
            <div style={{ display: 'flex', gap: 'var(--gap-large)', alignItems: 'center' }}>
              <ProgressCircle value={100} size="m" theme="accent"  label="Accent"  />
              <ProgressCircle value={100} size="m" theme="neutral" label="Neutral" />
              <ProgressCircle value={100} size="s" theme="accent"  label="Small"   />
            </div>
          </DemoBlock>

        </div>

        {/* ── API ── */}
        <h2 className="docs-section-title text-h3">API — ProgressBar</h2>
        <table className="docs-api-table text-body-small">
          <thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead>
          <tbody>
            <tr><td><code>value</code></td><td>Progress value 0–100</td><td><code>number</code></td><td>—</td></tr>
            <tr><td><code>theme</code></td><td>Color theme</td><td><code>'accent' | 'neutral' | 'status'</code></td><td><code>'neutral'</code></td></tr>
            <tr><td><code>label</code></td><td>Label to the right of bar</td><td><code>ReactNode</code></td><td>—</td></tr>
          </tbody>
        </table>

        <h2 className="docs-section-title text-h3">API — ProgressCircle</h2>
        <table className="docs-api-table text-body-small">
          <thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead>
          <tbody>
            <tr><td><code>value</code></td><td>Progress value 0–100. Automatically shows done state at 100</td><td><code>number</code></td><td>—</td></tr>
            <tr><td><code>size</code></td><td>m = 32px · s = 20px</td><td><code>'m' | 's'</code></td><td><code>'m'</code></td></tr>
            <tr><td><code>theme</code></td><td>Color theme</td><td><code>'accent' | 'neutral'</code></td><td><code>'accent'</code></td></tr>
            <tr><td><code>label</code></td><td>Label to the right</td><td><code>ReactNode</code></td><td>—</td></tr>
          </tbody>
        </table>

      </div>
    </>
  );
}
