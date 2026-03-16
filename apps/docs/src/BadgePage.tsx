import { Badge } from '@zen/components';
import { DemoBlock } from './DemoBlock';

const COLORS = ['neutral', 'accent', 'info', 'positive', 'negative', 'warning'] as const;

export function BadgePage() {
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
        <h1 className="docs-page-title text-display-1">Badge</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A compact status indicator with a colored dot and label.
            Supports solid, subtle, and ghost variants across six semantic colors.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        <h2 className="docs-section-title text-h3">Variants</h2>
        <div className="docs-demo-grid">
          <DemoBlock title="Solid">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-xsmall)' }}>
              {COLORS.map((color) => (
                <Badge key={color} label={color} color={color} variant="solid" />
              ))}
            </div>
          </DemoBlock>
          <DemoBlock title="Subtle">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-xsmall)' }}>
              {COLORS.map((color) => (
                <Badge key={color} label={color} color={color} variant="subtle" />
              ))}
            </div>
          </DemoBlock>
          <DemoBlock title="Ghost">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-xsmall)' }}>
              {COLORS.map((color) => (
                <Badge key={color} label={color} color={color} variant="ghost" />
              ))}
            </div>
          </DemoBlock>
        </div>

        <h2 className="docs-section-title text-h3">Sizes</h2>
        <div className="docs-demo-grid">
          <DemoBlock title="Medium (m)">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-xsmall)' }}>
              {COLORS.map((color) => (
                <Badge key={color} label={color} color={color} variant="subtle" size="m" />
              ))}
            </div>
          </DemoBlock>
          <DemoBlock title="Small (s)">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-xsmall)' }}>
              {COLORS.map((color) => (
                <Badge key={color} label={color} color={color} variant="subtle" size="s" />
              ))}
            </div>
          </DemoBlock>
        </div>

        <h2 className="docs-section-title text-h3">API</h2>
        <table className="docs-api-table text-body-small">
          <thead>
            <tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr>
          </thead>
          <tbody>
            <tr><td><code>label</code></td><td>Badge label text</td><td><code>string</code></td><td>—</td></tr>
            <tr><td><code>color</code></td><td>Semantic color</td><td><code>'neutral' | 'accent' | 'info' | 'positive' | 'negative' | 'warning'</code></td><td><code>'neutral'</code></td></tr>
            <tr><td><code>variant</code></td><td>Visual style</td><td><code>'solid' | 'subtle' | 'ghost'</code></td><td><code>'subtle'</code></td></tr>
            <tr><td><code>size</code></td><td>Size</td><td><code>'m' | 's'</code></td><td><code>'m'</code></td></tr>
          </tbody>
        </table>

      </div>
    </>
  );
}
