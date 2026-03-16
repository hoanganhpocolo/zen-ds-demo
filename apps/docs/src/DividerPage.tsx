import { Divider } from '@zen/components';
import { DemoBlock } from './DemoBlock';

export function DividerPage() {
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
        <h1 className="docs-page-title text-display-1">Divider</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A visual separator between content sections. Supports horizontal and vertical orientations with three color intensities.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

      {/* ── When to Use ── */}
      <div className="docs-when-to-use">
        <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>When to use</h3>
        <ul className="text-body-small">
          <li>To visually separate groups of content or sections.</li>
          <li>Use <strong>default</strong> for subtle separation, <strong>medium</strong> for standard borders, <strong>high</strong> for strong emphasis.</li>
          <li>Use <strong>vertical</strong> orientation to separate inline or row elements.</li>
        </ul>
      </div>

      {/* ── Examples ── */}
      <h2 className="docs-section-title text-h3">Examples</h2>

      <div className="docs-demo-grid">
        {/* Default */}
        <DemoBlock
          title="Default"
          description="Subtle light border — the lightest separator."
        >
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)' }}>
            <p className="text-body-small">Content above</p>
            <Divider />
            <p className="text-body-small">Content below</p>
          </div>
        </DemoBlock>

        {/* Medium */}
        <DemoBlock
          title="Medium"
          description="Standard subtle border."
        >
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)' }}>
            <p className="text-body-small">Content above</p>
            <Divider color="medium" />
            <p className="text-body-small">Content below</p>
          </div>
        </DemoBlock>

        {/* High */}
        <DemoBlock
          title="High"
          description="Solid border — strongest visual separation."
        >
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)' }}>
            <p className="text-body-small">Content above</p>
            <Divider color="high" />
            <p className="text-body-small">Content below</p>
          </div>
        </DemoBlock>

        {/* Vertical */}
        <DemoBlock
          title="Vertical"
          description="Vertical divider between inline elements."
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-medium)', height: 40 }}>
            <span className="text-body-small">Left</span>
            <Divider orientation="vertical" color="medium" />
            <span className="text-body-small">Right</span>
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
            <td><code>color</code></td>
            <td>Border color intensity</td>
            <td><code>'default' | 'medium' | 'high'</code></td>
            <td><code>'default'</code></td>
          </tr>
          <tr>
            <td><code>orientation</code></td>
            <td>Direction of the divider</td>
            <td><code>'horizontal' | 'vertical'</code></td>
            <td><code>'horizontal'</code></td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
}
