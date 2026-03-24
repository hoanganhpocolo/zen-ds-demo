import { Button } from '@zen/components';
import { Heart, SearchMedium, Plus, Settings01, Bell01, Star01, Mail01 } from '@zen/icons/line';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

const allVariants = ['primary', 'accent', 'secondary', 'tertiary', 'danger', 'danger-subtle', 'positive', 'positive-subtle', 'flat-primary', 'flat-accent'] as const;
const overlayVariants = ['inverse', 'white', 'white-overlay', 'black-overlay'] as const;

export function ButtonPage() {
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
          code={`<Button variant="primary">Primary</Button>
<Button variant="accent">Accent</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="danger">Danger</Button>
<Button variant="danger-subtle">Danger Subtle</Button>
<Button variant="positive">Positive</Button>
<Button variant="positive-subtle">Positive Subtle</Button>
<Button variant="flat-primary">Flat Primary</Button>
<Button variant="flat-accent">Flat Accent</Button>`}
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
          code={`<Button variant="primary" size="xs">XS</Button>
<Button variant="primary" size="s">Small</Button>
<Button variant="primary" size="m">Medium</Button>
<Button variant="primary" size="l">Large</Button>
<Button variant="primary" size="xl">XL</Button>`}
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
          code={`import { Plus, SearchMedium, Settings01, Mail01 } from '@zen/icons/line';

<Button variant="primary" size="xl" icon={<Plus size={32} />}>Create</Button>
<Button variant="primary" size="l" icon={<SearchMedium size={24} />}>Search</Button>
<Button variant="accent" size="m" icon={<Plus size={24} />}>New</Button>
<Button variant="tertiary" size="s" icon={<Settings01 size={20} />}>Settings</Button>
<Button variant="secondary" size="xs" icon={<Mail01 size={16} />}>Email</Button>`}
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
          code={`<Button variant="primary" loading>Saving...</Button>
<Button variant="accent" loading>Processing</Button>
<Button variant="secondary" loading>Loading</Button>
<Button variant="tertiary" loading>Wait</Button>`}
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
          code={`<Button variant="primary" disabled>Primary</Button>
<Button variant="accent" disabled>Accent</Button>
<Button variant="secondary" disabled>Secondary</Button>
<Button variant="tertiary" disabled>Tertiary</Button>
<Button variant="danger" disabled>Danger</Button>`}
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
          code={`import { Plus } from '@zen/icons/line';

// Omit children — icon prop alone creates a square button
<Button variant="primary" size="2xs" icon={<Plus size={16} />} />
<Button variant="primary" size="xs" icon={<Plus size={20} />} />
<Button variant="primary" size="s" icon={<Plus size={20} />} />
<Button variant="primary" size="m" icon={<Plus size={24} />} />
<Button variant="primary" size="l" icon={<Plus size={24} />} />
<Button variant="primary" size="xl" icon={<Plus size={32} />} />`}
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

      <ApiTable
        columns={['Property', 'Description', 'Type', 'Default']}
        rows={[
          [<code>variant</code>, 'Visual style of the button', <><code>'primary'</code> | <code>'accent'</code> | <code>'secondary'</code> | <code>'tertiary'</code> | <code>'danger'</code> | <code>'danger-subtle'</code> | <code>'positive'</code> | <code>'positive-subtle'</code> | <code>'flat-primary'</code> | <code>'flat-accent'</code> | <code>'inverse'</code> | <code>'white'</code> | <code>'white-overlay'</code> | <code>'black-overlay'</code></>, <code>'primary'</code>],
          [<code>size</code>, 'Button size', <><code>'2xs'</code> | <code>'xs'</code> | <code>'s'</code> | <code>'m'</code> | <code>'l'</code> | <code>'xl'</code></>, <code>'m'</code>],
          [<code>icon</code>, 'Leading icon element. When passed without children, renders as icon-only (square) button.', <code>ReactNode</code>, '—'],
          [<code>iconRight</code>, 'Trailing icon element', <code>ReactNode</code>, '—'],
          [<code>loading</code>, 'Shows a spinner and disables interaction', <code>boolean</code>, <code>false</code>],
          [<code>disabled</code>, 'Prevents interaction and applies disabled styling', <code>boolean</code>, <code>false</code>],
          [<code>onClick</code>, 'Click handler', <code>(e: MouseEvent) =&gt; void</code>, '—'],
          [<code>className</code>, 'Additional CSS class name', <code>string</code>, '—'],
          [<code>children</code>, 'Button label text. Omit for icon-only mode.', <code>ReactNode</code>, '—'],
        ]}
      />

      {/* ── Design Tokens ── */}
      <h2 className="docs-section-title text-h3" style={{ marginTop: 'var(--gap-3xlarge)' }}>Design Tokens</h2>

      <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>Component Tokens</h3>
      <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)', marginBottom: 'var(--gap-medium)' }}>
        Primary and Accent variants use component tokens that swap via <code className="docs-code">data-component-theme</code> attribute.
      </p>
      <ApiTable
        columns={['Token', 'Brand mode', 'Neutral mode']}
        colWidths={['50%', '25%', '25%']}
        rows={[
          [<code>--comp-button-primary-color-bg-default</code>, 'Accent solid', 'Neutral solid'],
          [<code>--comp-button-accent-color-bg-default</code>, 'Neutral solid', 'Accent solid'],
          [<code>--comp-button-primary-color-border-focused</code>, 'Accent focus ring', 'Neutral focus ring'],
          [<code>--comp-button-accent-color-border-focused</code>, 'Neutral focus ring', 'Accent focus ring'],
        ]}
        style={{ marginBottom: 'var(--gap-xlarge)' }}
      />

      <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>Size Tokens</h3>
      <ApiTable
        columns={['Size', 'Height', 'Recommended icon', 'Token']}
        colWidths={['12%', '15%', '23%', '50%']}
        rows={[
          [<code>2xs</code>, '24px', '16px', <code>--button-size-2xsmall</code>],
          [<code>xs</code>, '32px', '20px', <code>--button-size-xsmall</code>],
          [<code>s</code>, '40px', '20px', <code>--button-size-small</code>],
          [<code>m</code>, '48px', '24px', <code>--button-size-medium</code>],
          [<code>l</code>, '56px', '24px', <code>--button-size-large</code>],
          [<code>xl</code>, '64px', '32px', <code>--button-size-xlarge</code>],
        ]}
      />
      </div>
    </>
  );
}
