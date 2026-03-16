import { Button } from '@zen/components';
import { Heart, SearchMedium, Plus, Settings01, Bell01, Star01, Mail01 } from '@zen/icons/line';
import { DemoBlock } from './DemoBlock';

const allVariants = ['primary', 'accent', 'secondary', 'tertiary', 'danger', 'danger-subtle', 'positive', 'positive-subtle', 'flat-primary', 'flat-accent'] as const;
const overlayVariants = ['inverse', 'white', 'white-overlay', 'black-overlay'] as const;

export function ButtonPage() {
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
        <h1 className="docs-page-title text-display-1">Button</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            Buttons allow users to take actions and make choices with a single tap. They communicate actions that users can take throughout the UI.
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="docs-page-body">

      {/* ── When to Use ── */}
      <div className="docs-when-to-use">
        <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>When to use</h3>
        <ul className="text-body-small">
          <li>To trigger an operation or submit data.</li>
          <li>To navigate to a new page or section (as a call-to-action).</li>
          <li>Use <strong>Primary</strong> for the main action, <strong>Secondary/Tertiary</strong> for less prominent actions.</li>
          <li>Use <strong>Danger</strong> for destructive actions like delete or remove.</li>
          <li>Use <strong>Overlay</strong> variants on images or colored backgrounds.</li>
          <li>Use <strong>Flat</strong> variants for inline or toolbar actions where a visible background is unnecessary.</li>
        </ul>
      </div>

      {/* ── Examples ── */}
      <h2 className="docs-section-title text-h3">Examples</h2>

      <div className="docs-demo-grid">
        {/* Variant */}
        <DemoBlock
          title="Variant"
          description="14 button variants for different semantic purposes. Primary and Accent swap based on component theme."
          fullWidth
        >
          <Button variant="primary">Primary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="danger-subtle">Danger Subtle</Button>
          <Button variant="positive">Positive</Button>
          <Button variant="positive-subtle">Positive Subtle</Button>
          <Button variant="flat-primary">Flat Primary</Button>
          <Button variant="flat-accent">Flat Accent</Button>
        </DemoBlock>

        {/* Size */}
        <DemoBlock
          title="Size"
          description="6 sizes from 2XS (24px, icon-only) to XL (64px). Default is M."
        >
          <Button variant="primary" size="xs">XS</Button>
          <Button variant="primary" size="s">Small</Button>
          <Button variant="primary" size="m">Medium</Button>
          <Button variant="primary" size="l">Large</Button>
          <Button variant="primary" size="xl">XL</Button>
        </DemoBlock>

        {/* With Icon */}
        <DemoBlock
          title="Icon"
          description="Leading icon adapts size to the button. Pair with text for clarity."
        >
          <Button variant="primary" size="xl" icon={<Plus size={32} />}>Create</Button>
          <Button variant="primary" size="l" icon={<SearchMedium size={24} />}>Search</Button>
          <Button variant="accent" size="m" icon={<Plus size={24} />}>New</Button>
          <Button variant="tertiary" size="s" icon={<Settings01 size={20} />}>Settings</Button>
          <Button variant="secondary" size="xs" icon={<Mail01 size={16} />}>Email</Button>
        </DemoBlock>

        {/* Loading */}
        <DemoBlock
          title="Loading"
          description="A loading state replaces the icon with a spinner and disables interaction."
        >
          <Button variant="primary" loading>Saving...</Button>
          <Button variant="accent" loading>Processing</Button>
          <Button variant="secondary" loading>Loading</Button>
          <Button variant="tertiary" loading>Wait</Button>
        </DemoBlock>

        {/* Disabled */}
        <DemoBlock
          title="Disabled"
          description="Disabled buttons use dedicated disabled tokens — not opacity. Cursor changes to not-allowed."
        >
          <Button variant="primary" disabled>Primary</Button>
          <Button variant="accent" disabled>Accent</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="tertiary" disabled>Tertiary</Button>
          <Button variant="danger" disabled>Danger</Button>
        </DemoBlock>

        {/* Icon Only */}
        <DemoBlock
          title="Icon Only"
          description="Omit children to get a square icon button. Supports all sizes including 2XS (24px)."
        >
          <Button variant="primary" size="2xs" icon={<Plus size={16} />} />
          <Button variant="primary" size="xs" icon={<Plus size={20} />} />
          <Button variant="primary" size="s" icon={<Plus size={20} />} />
          <Button variant="primary" size="m" icon={<Plus size={24} />} />
          <Button variant="primary" size="l" icon={<Plus size={24} />} />
          <Button variant="primary" size="xl" icon={<Plus size={32} />} />
        </DemoBlock>

        {/* Icon Only Variants */}
        <DemoBlock
          title="Icon Only — Variants"
          description="Icon-only works with all 14 button variants."
          fullWidth
        >
          <Button variant="primary" icon={<Heart size={24} />} />
          <Button variant="accent" icon={<Star01 size={24} />} />
          <Button variant="secondary" icon={<Bell01 size={24} />} />
          <Button variant="tertiary" icon={<Settings01 size={24} />} />
          <Button variant="danger" icon={<Heart size={24} />} />
          <Button variant="danger-subtle" icon={<Heart size={24} />} />
          <Button variant="positive" icon={<Plus size={24} />} />
          <Button variant="positive-subtle" icon={<Plus size={24} />} />
          <Button variant="flat-primary" icon={<Settings01 size={24} />} />
          <Button variant="flat-accent" icon={<Heart size={24} />} />
        </DemoBlock>

        {/* All States Matrix */}
        <DemoBlock
          title="All States"
          description="Every variant in Default, Disabled, and Loading states."
          direction="column"
          fullWidth
        >
          {allVariants.map((v) => (
            <div key={v} style={{ display: 'flex', gap: 'var(--gap-small)', alignItems: 'center' }}>
              <span className="text-caption" style={{ width: 120, flexShrink: 0, color: 'var(--color-content-neutral-secondary)' }}>{v}</span>
              <Button variant={v}>Default</Button>
              <Button variant={v} disabled>Disabled</Button>
              <Button variant={v} loading>Loading</Button>
            </div>
          ))}
        </DemoBlock>

        {/* Overlay */}
        <DemoBlock
          title="Overlay"
          description="Use on images or colored backgrounds. 4 levels: Inverse, White, White Overlay, Black Overlay."
          direction="column"
          fullWidth
          previewStyle={{
            background: 'linear-gradient(135deg, var(--color-brand-9) 0%, #764ba2 100%)',
            borderRadius: 0,
          }}
        >
          {overlayVariants.map((v) => (
            <div key={v} style={{ display: 'flex', gap: 'var(--gap-small)', alignItems: 'center' }}>
              <span className="text-caption" style={{ width: 120, flexShrink: 0, color: 'rgba(255,255,255,0.7)' }}>{v}</span>
              <Button variant={v}>Default</Button>
              <Button variant={v} disabled>Disabled</Button>
              <Button variant={v} loading>Loading</Button>
            </div>
          ))}
        </DemoBlock>

        {/* Overlay Icon Only */}
        <DemoBlock
          title="Overlay — Icon Only"
          description="Icon-only overlay buttons for actions on images or media."
          direction="column"
          fullWidth
          previewStyle={{
            background: 'linear-gradient(135deg, var(--color-brand-9) 0%, #764ba2 100%)',
            borderRadius: 0,
          }}
        >
          <div style={{ display: 'flex', gap: 'var(--gap-small)', alignItems: 'center' }}>
            <span className="text-caption" style={{ width: 120, flexShrink: 0, color: 'rgba(255,255,255,0.7)' }}>Sizes</span>
            <Button variant="white-overlay" size="2xs" icon={<Plus size={16} />} />
            <Button variant="white-overlay" size="xs" icon={<Plus size={20} />} />
            <Button variant="white-overlay" size="s" icon={<Plus size={20} />} />
            <Button variant="white-overlay" size="m" icon={<Plus size={24} />} />
            <Button variant="white-overlay" size="l" icon={<Plus size={24} />} />
            <Button variant="white-overlay" size="xl" icon={<Plus size={32} />} />
          </div>
          {overlayVariants.map((v) => (
            <div key={v} style={{ display: 'flex', gap: 'var(--gap-small)', alignItems: 'center' }}>
              <span className="text-caption" style={{ width: 120, flexShrink: 0, color: 'rgba(255,255,255,0.7)' }}>{v}</span>
              <Button variant={v} icon={<Heart size={24} />} />
              <Button variant={v} icon={<Heart size={24} />} disabled />
              <Button variant={v} icon={<Heart size={24} />} loading />
            </div>
          ))}
        </DemoBlock>

        {/* Flat Icon Only */}
        <DemoBlock
          title="Flat — Icon Only"
          description="Transparent by default, background appears on hover. Ideal for toolbars and inline actions."
          direction="column"
        >
          <div style={{ display: 'flex', gap: 'var(--gap-small)', alignItems: 'center' }}>
            <span className="text-caption" style={{ width: 100, flexShrink: 0, color: 'var(--color-content-neutral-secondary)' }}>Sizes</span>
            <Button variant="flat-primary" size="2xs" icon={<Settings01 size={16} />} />
            <Button variant="flat-primary" size="xs" icon={<Settings01 size={20} />} />
            <Button variant="flat-primary" size="s" icon={<Settings01 size={20} />} />
            <Button variant="flat-primary" size="m" icon={<Settings01 size={24} />} />
          </div>
          {(['flat-primary', 'flat-accent'] as const).map((v) => (
            <div key={v} style={{ display: 'flex', gap: 'var(--gap-small)', alignItems: 'center' }}>
              <span className="text-caption" style={{ width: 100, flexShrink: 0, color: 'var(--color-content-neutral-secondary)' }}>{v}</span>
              <Button variant={v} icon={<Heart size={24} />} />
              <Button variant={v} icon={<Heart size={24} />} disabled />
              <Button variant={v} icon={<Heart size={24} />} loading />
            </div>
          ))}
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
            <td><code>variant</code></td>
            <td>Visual style of the button</td>
            <td>
              <code>'primary'</code> | <code>'accent'</code> | <code>'secondary'</code> | <code>'tertiary'</code> | <code>'danger'</code> | <code>'danger-subtle'</code> | <code>'positive'</code> | <code>'positive-subtle'</code> | <code>'flat-primary'</code> | <code>'flat-accent'</code> | <code>'inverse'</code> | <code>'white'</code> | <code>'white-overlay'</code> | <code>'black-overlay'</code>
            </td>
            <td><code>'primary'</code></td>
          </tr>
          <tr>
            <td><code>size</code></td>
            <td>Button size</td>
            <td><code>'2xs'</code> | <code>'xs'</code> | <code>'s'</code> | <code>'m'</code> | <code>'l'</code> | <code>'xl'</code></td>
            <td><code>'m'</code></td>
          </tr>
          <tr>
            <td><code>icon</code></td>
            <td>Leading icon element. When passed without children, renders as icon-only (square) button.</td>
            <td><code>ReactNode</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>iconRight</code></td>
            <td>Trailing icon element</td>
            <td><code>ReactNode</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>loading</code></td>
            <td>Shows a spinner and disables interaction</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td><code>disabled</code></td>
            <td>Prevents interaction and applies disabled styling</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td><code>onClick</code></td>
            <td>Click handler</td>
            <td><code>(e: MouseEvent) =&gt; void</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>className</code></td>
            <td>Additional CSS class name</td>
            <td><code>string</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>children</code></td>
            <td>Button label text. Omit for icon-only mode.</td>
            <td><code>ReactNode</code></td>
            <td>—</td>
          </tr>
        </tbody>
      </table>

      {/* ── Design Tokens ── */}
      <h2 className="docs-section-title text-h3" style={{ marginTop: 'var(--gap-3xlarge)' }}>Design Tokens</h2>

      <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>Component Tokens</h3>
      <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)', marginBottom: 'var(--gap-medium)' }}>
        Primary and Accent variants use component tokens that swap via <code className="docs-code">data-component-theme</code> attribute.
      </p>
      <table className="docs-api-table text-body-small" style={{ marginBottom: 'var(--gap-xlarge)' }}>
        <thead>
          <tr>
            <th>Token</th>
            <th>Brand mode</th>
            <th>Neutral mode</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>--comp-button-primary-color-bg-default</code></td>
            <td>Accent solid</td>
            <td>Neutral solid</td>
          </tr>
          <tr>
            <td><code>--comp-button-accent-color-bg-default</code></td>
            <td>Neutral solid</td>
            <td>Accent solid</td>
          </tr>
          <tr>
            <td><code>--comp-button-primary-color-border-focused</code></td>
            <td>Accent focus ring</td>
            <td>Neutral focus ring</td>
          </tr>
          <tr>
            <td><code>--comp-button-accent-color-border-focused</code></td>
            <td>Neutral focus ring</td>
            <td>Accent focus ring</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>Size Tokens</h3>
      <table className="docs-api-table text-body-small">
        <thead>
          <tr>
            <th>Size</th>
            <th>Height</th>
            <th>Recommended icon</th>
            <th>Token</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>2xs</code></td>
            <td>24px</td>
            <td>16px</td>
            <td><code>--button-size-2xsmall</code></td>
          </tr>
          <tr>
            <td><code>xs</code></td>
            <td>32px</td>
            <td>20px</td>
            <td><code>--button-size-xsmall</code></td>
          </tr>
          <tr>
            <td><code>s</code></td>
            <td>40px</td>
            <td>20px</td>
            <td><code>--button-size-small</code></td>
          </tr>
          <tr>
            <td><code>m</code></td>
            <td>48px</td>
            <td>24px</td>
            <td><code>--button-size-medium</code></td>
          </tr>
          <tr>
            <td><code>l</code></td>
            <td>56px</td>
            <td>24px</td>
            <td><code>--button-size-large</code></td>
          </tr>
          <tr>
            <td><code>xl</code></td>
            <td>64px</td>
            <td>32px</td>
            <td><code>--button-size-xlarge</code></td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
}
