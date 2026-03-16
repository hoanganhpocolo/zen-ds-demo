import { useState } from 'react';
import { SidePanel, Button } from '@zen/components';

function SidePanelDemo({ variant }: { variant: 'standard' | 'modal' }) {
  const [open, setOpen] = useState(false);
  const isModal = variant === 'modal';

  return (
    <div style={{
      position: 'relative',
      height: 520,
      overflow: 'hidden',
      background: 'var(--color-bg-canvas-default)',
      borderRadius: 'var(--radius-2xlarge)',
      display: 'flex',
      alignItems: 'stretch',
    }}>
      {/* Mock app content */}
      <div style={{
        flex: 1,
        padding: 'var(--padding-3xlarge)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--gap-medium)',
        transition: 'margin-right 300ms ease',
        marginRight: (!isModal && open) ? 440 : 0,
      }}>
        <p className="text-h4" style={{ color: 'var(--color-content-neutral-primary)' }}>
          {isModal ? 'Modal variant' : 'Standard variant'}
        </p>
        <p className="text-body-base" style={{ color: 'var(--color-content-neutral-secondary)', maxWidth: 400 }}>
          {isModal
            ? 'The modal variant floats over the content with a backdrop overlay.'
            : 'The standard variant pushes the content to the left as it slides in.'}
        </p>
        <div>
          <Button variant="primary" size="m" onClick={() => setOpen(true)}>
            Open Side Panel
          </Button>
        </div>
      </div>

      {/* Backdrop — modal only */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.32)',
          opacity: (isModal && open) ? 1 : 0,
          pointerEvents: (isModal && open) ? 'auto' : 'none',
          transition: 'opacity 280ms ease',
          zIndex: 1,
        }}
      />

      {/* Sliding panel */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: isModal ? 'center' : 'stretch',
        padding: isModal ? 'var(--padding-2xsmall)' : 0,
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 2,
      }}>
        <SidePanel
          variant={variant}
          title="Panel Title"
          description="Everything in Zen contains Auto Layout. Moreover, we've redefined all variants and we have created brand-new components."
          onClose={() => setOpen(false)}
          footer={
            <>
              <Button variant="tertiary" size="m" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="primary" size="m" onClick={() => setOpen(false)}>Confirm</Button>
            </>
          }
          style={{ height: isModal ? 'auto' : '100%' }}
        >
          <div style={{
            border: '1px dashed var(--color-border-neutral-subtle-default)',
            borderRadius: 'var(--radius-large)',
            height: 120,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-content-placeholder)',
          }}>
            <span className="text-body-base">Content slot</span>
          </div>
        </SidePanel>
      </div>
    </div>
  );
}

export function SidePanelPage() {
  return (
    <div className="docs-page-body">
      <div className="docs-page-header" style={{ marginBottom: 'var(--gap-3xlarge)' }}>
        <h1 className="text-h1 docs-page-title">Side Panel</h1>
        <p className="text-body-base docs-page-description">
          A panel that slides in from the side of the screen. Available in two variants: standard (pushes content, with left border) and modal (floats over content with backdrop).
        </p>
      </div>

      {/* Standard demo */}
      <h2 className="text-h3 docs-section-title">Standard</h2>
      <div style={{ marginBottom: 'var(--gap-3xlarge)' }} className="docs-demo">
        <SidePanelDemo variant="standard" />
        <div className="docs-demo-meta">
          <p className="text-body-small docs-demo-title" style={{ fontWeight: 'var(--font-weight-secondary)' }}>Standard</p>
          <p className="text-body-small docs-demo-description">Attached panel — content shifts left as the panel slides in from the right.</p>
        </div>
      </div>

      {/* Modal demo */}
      <h2 className="text-h3 docs-section-title">Modal</h2>
      <div style={{ marginBottom: 'var(--gap-3xlarge)' }} className="docs-demo">
        <SidePanelDemo variant="modal" />
        <div className="docs-demo-meta">
          <p className="text-body-small docs-demo-title" style={{ fontWeight: 'var(--font-weight-secondary)' }}>Modal</p>
          <p className="text-body-small docs-demo-description">Floating panel with backdrop — click the overlay or close button to dismiss.</p>
        </div>
      </div>

      {/* API */}
      <h2 className="text-h3 docs-section-title">API</h2>
      <table className="docs-api-table">
        <thead>
          <tr>
            <th className="text-body-small">Prop</th>
            <th className="text-body-small">Type</th>
            <th className="text-body-small">Default</th>
            <th className="text-body-small">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>variant</code></td><td><code>'standard' | 'modal'</code></td><td><code>'standard'</code></td><td>Panel variant</td></tr>
          <tr><td><code>title</code></td><td><code>ReactNode</code></td><td>—</td><td>Heading text</td></tr>
          <tr><td><code>description</code></td><td><code>ReactNode</code></td><td>—</td><td>Description below heading</td></tr>
          <tr><td><code>footer</code></td><td><code>ReactNode</code></td><td>—</td><td>Footer slot — typically action buttons</td></tr>
          <tr><td><code>onClose</code></td><td><code>() =&gt; void</code></td><td>—</td><td>Close button handler (hides button if not provided)</td></tr>
          <tr><td><code>children</code></td><td><code>ReactNode</code></td><td>—</td><td>Body content</td></tr>
        </tbody>
      </table>
    </div>
  );
}
