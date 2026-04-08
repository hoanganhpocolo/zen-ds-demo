import { useState } from 'react';
import { Badge } from '@zen/components';
import { Star01, Check } from '@zen/icons/line';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

const SEMANTIC_COLORS = ['neutral', 'accent', 'info', 'positive', 'negative', 'warning'] as const;
const SUPPORT_COLORS = ['yellow', 'orange', 'red', 'crimson', 'pink', 'plum', 'purple', 'violet', 'indigo', 'blue', 'cyan', 'teal', 'green', 'brown'] as const;
const ALL_COLORS = [...SEMANTIC_COLORS, ...SUPPORT_COLORS] as const;

export function BadgePage() {
  const [removed, setRemoved] = useState(false);

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
        <h1 className="docs-page-title text-display-1">Badge</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A compact status indicator that communicates state, category, or metadata. Supports 3 variants,
            2 sizes, 21 color themes, leading icon, dot indicator, and a removable action.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        {/* ── Variants ── */}
        <h2 className="docs-section-title text-h3">Variants</h2>
        <div className="docs-demo-grid">
          <DemoBlock title="Solid" description="High-contrast fill. Use for prominent status labels." fullWidth>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-xsmall)' }}>
              {ALL_COLORS.map((color) => (
                <Badge key={color} label={color} color={color} variant="solid" />
              ))}
            </div>
          </DemoBlock>

          <DemoBlock title="Subtle" description="Soft tinted background. Default and most common variant." fullWidth>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-xsmall)' }}>
              {ALL_COLORS.map((color) => (
                <Badge key={color} label={color} color={color} variant="subtle" />
              ))}
            </div>
          </DemoBlock>

          <DemoBlock title="Ghost" description="No background, colored text only. Use in dense layouts." fullWidth>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-xsmall)' }}>
              {SEMANTIC_COLORS.map((color) => (
                <Badge key={color} label={color} color={color} variant="ghost" />
              ))}
            </div>
          </DemoBlock>
        </div>

        {/* ── Sizes ── */}
        <h2 className="docs-section-title text-h3">Sizes</h2>
        <div className="docs-demo-grid">
          <DemoBlock title="Medium (m)" description="Default size, 28px height.">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-xsmall)' }}>
              {SEMANTIC_COLORS.map((color) => (
                <Badge key={color} label={color} color={color} variant="subtle" size="m" />
              ))}
            </div>
          </DemoBlock>
          <DemoBlock title="Small (s)" description="Compact size, 20px height.">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-xsmall)' }}>
              {SEMANTIC_COLORS.map((color) => (
                <Badge key={color} label={color} color={color} variant="subtle" size="s" />
              ))}
            </div>
          </DemoBlock>
        </div>

        {/* ── Leading Icon & Dot ── */}
        <h2 className="docs-section-title text-h3">Leading Icon & Dot</h2>
        <div className="docs-demo-grid">
          <DemoBlock title="Dot (default)" description="Default dot indicator shown when no icon is provided.">
            <Badge label="Active" color="positive" variant="subtle" />
            <Badge label="Pending" color="warning" variant="subtle" />
            <Badge label="Error" color="negative" variant="subtle" />
            <Badge label="Small dot" color="accent" variant="subtle" size="s" />
          </DemoBlock>

          <DemoBlock title="No dot" description="Set dot={false} to remove the dot indicator.">
            <Badge label="Active" color="positive" variant="subtle" dot={false} />
            <Badge label="Pending" color="warning" variant="subtle" dot={false} />
            <Badge label="Label only" color="neutral" variant="solid" dot={false} />
            <Badge label="Small" color="accent" variant="subtle" size="s" dot={false} />
          </DemoBlock>

          <DemoBlock title="Custom icon" description="Pass any icon via the icon prop. Replaces the dot.">
            <Badge label="Featured" color="accent" variant="subtle" icon={<Star01 size={12} />} />
            <Badge label="Verified" color="positive" variant="solid" icon={<Check size={12} />} />
            <Badge label="Featured" color="accent" variant="subtle" size="s" icon={<Star01 size={10} />} />
            <Badge label="Verified" color="positive" variant="solid" size="s" icon={<Check size={10} />} />
          </DemoBlock>
        </div>

        {/* ── Removable ── */}
        <h2 className="docs-section-title text-h3">Removable</h2>
        <div className="docs-demo-grid">
          <DemoBlock title="onRemove" description="Pass onRemove to show a × button. Clicking it fires the callback.">
            {removed
              ? <span className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)' }}>Badge removed — refresh to reset</span>
              : <Badge label="Removable" color="accent" variant="subtle" onRemove={() => setRemoved(true)} />
            }
            <Badge label="Tag" color="neutral" variant="subtle" onRemove={() => {}} />
            <Badge label="Category" color="blue" variant="subtle" onRemove={() => {}} size="s" />
          </DemoBlock>

          <DemoBlock title="Removable — Solid" description="Remove button works across all variants and sizes.">
            <Badge label="Active" color="positive" variant="solid" onRemove={() => {}} />
            <Badge label="Error" color="negative" variant="solid" onRemove={() => {}} />
            <Badge label="Warn" color="warning" variant="solid" onRemove={() => {}} size="s" />
          </DemoBlock>
        </div>

        {/* ── Inverse ── */}
        <h2 className="docs-section-title text-h3">Inverse</h2>
        <div className="docs-demo-grid">
          <DemoBlock
            title="Inverse"
            description="Adapts to dark surfaces — solid uses the surface background, subtle goes transparent."
            previewStyle={{ background: 'var(--color-bg-fill-neutral-solid-default)', borderRadius: 0 }}
          >
            <Badge label="Inverse solid" color="inverse" variant="solid" />
            <Badge label="Inverse subtle" color="inverse" variant="subtle" />
          </DemoBlock>
        </div>

        {/* ── API ── */}
        <h2 className="docs-section-title text-h3">API</h2>
        <ApiTable
          columns={['Property', 'Description', 'Type', 'Default']}
          rows={[
            [<code>label</code>, 'Badge label text', <code>string</code>, '—'],
            [<code>color</code>, 'Color theme', <><code>'neutral'</code> | <code>'accent'</code> | <code>'inverse'</code> | <code>'info'</code> | <code>'positive'</code> | <code>'negative'</code> | <code>'warning'</code> | <code>'yellow'</code> | <code>'orange'</code> | <code>'red'</code> | <code>'crimson'</code> | <code>'pink'</code> | <code>'plum'</code> | <code>'purple'</code> | <code>'violet'</code> | <code>'indigo'</code> | <code>'blue'</code> | <code>'cyan'</code> | <code>'teal'</code> | <code>'green'</code> | <code>'brown'</code></>, <code>'neutral'</code>],
            [<code>variant</code>, 'Visual style', <><code>'solid'</code> | <code>'subtle'</code> | <code>'ghost'</code></>, <code>'subtle'</code>],
            [<code>size</code>, 'Badge size', <><code>'m'</code> | <code>'s'</code></>, <code>'m'</code>],
            [<code>icon</code>, 'Leading icon element. Replaces the dot when provided.', <code>ReactNode</code>, '—'],
            [<code>dot</code>, 'Show the default dot indicator. Ignored when icon is provided.', <code>boolean</code>, <code>true</code>],
            [<code>onRemove</code>, 'Shows a × remove button. Called on click.', <code>() =&gt; void</code>, '—'],
          ]}
        />

      </div>
    </>
  );
}
