import { useState } from 'react';
import { BottomSheet, Button, InputField } from '@zen/components';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

export function BottomSheetPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [actionOpen, setActionOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [minimalOpen, setMinimalOpen] = useState(false);

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
        <h1 className="docs-page-title text-display-1">Bottom Sheet</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A mobile-first overlay that slides up from the bottom of the screen. Supports modal mode with header, body, and footer buttons, or action mode for simple action lists. Features glassmorphism background and system indicators.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

      {/* ── When to Use ── */}
      <div className="docs-when-to-use">
        <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>When to use</h3>
        <ul className="text-body-small">
          <li>For mobile confirmations, forms, or option menus that slide up from the bottom.</li>
          <li>Use <strong>footer</strong> to render action buttons (modal mode).</li>
          <li>Without <strong>footer</strong>, the body uses compact padding (action mode).</li>
          <li>Click the overlay backdrop or press <strong>Escape</strong> to close.</li>
        </ul>
      </div>

      {/* ── Examples ── */}
      <h2 className="docs-section-title text-h3">Examples</h2>

      <div className="docs-demo-grid">
        {/* Modal */}
        <DemoBlock
          title="Modal Bottom Sheet"
          description="Full modal with header (title + description + close), body content, and dual footer buttons."
          direction="column"
          fullWidth
        >
          <Button onClick={() => setModalOpen(true)}>Open Modal Sheet</Button>
          <BottomSheet
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Confirm Action"
            description="Are you sure you want to proceed? This action cannot be undone once confirmed."
            footer={
              <>
                <Button variant="secondary" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setModalOpen(false)}>
                  Confirm
                </Button>
              </>
            }
          >
            <div
              style={{
                border: '1px dashed var(--color-border-neutral-subtle-default)',
                borderRadius: 'var(--radius-large)',
                height: 72,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-content-placeholder)',
              }}
              className="text-h4"
            >
              Replace Component Here
            </div>
          </BottomSheet>
        </DemoBlock>

        {/* Action */}
        <DemoBlock
          title="Action Bottom Sheet"
          description="Simple action list without footer buttons. Compact body padding."
          direction="column"
          fullWidth
        >
          <Button variant="secondary" onClick={() => setActionOpen(true)}>
            Open Action Sheet
          </Button>
          <BottomSheet
            open={actionOpen}
            onClose={() => setActionOpen(false)}
            title="Actions"
          >
            {['Edit Profile', 'Share Link', 'Copy URL', 'Report Issue'].map(
              (label) => (
                <button
                  key={label}
                  onClick={() => setActionOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--gap-small)',
                    width: '100%',
                    padding: 'var(--padding-small) var(--padding-medium)',
                    background: 'none',
                    border: 'none',
                    borderRadius: 'var(--radius-base)',
                    cursor: 'pointer',
                    color: 'var(--color-content-neutral-primary)',
                    fontFamily: 'var(--font-family-sans)',
                    fontSize: 'var(--font-size-body-base)',
                    lineHeight: 'var(--line-height-body-base)',
                    fontWeight: 'var(--font-weight-secondary)',
                    textAlign: 'left',
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background =
                      'var(--color-bg-fill-neutral-flat-hover)')
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = 'none')
                  }
                >
                  {label}
                </button>
              ),
            )}
          </BottomSheet>
        </DemoBlock>

        {/* With form content */}
        <DemoBlock
          title="With Form Content"
          description="Bottom sheet body can contain any components — forms, inputs, etc."
          direction="column"
          fullWidth
        >
          <Button variant="secondary" onClick={() => setFormOpen(true)}>
            Open Form Sheet
          </Button>
          <BottomSheet
            open={formOpen}
            onClose={() => setFormOpen(false)}
            title="Add New Item"
            description="Fill in the details below to create a new item."
            footer={
              <>
                <Button variant="secondary" onClick={() => setFormOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setFormOpen(false)}>Save</Button>
              </>
            }
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--gap-medium)',
              }}
            >
              <InputField label="Name" placeholder="Enter name" />
              <InputField
                label="Email"
                placeholder="you@example.com"
                type="email"
              />
            </div>
          </BottomSheet>
        </DemoBlock>

        {/* No header */}
        <DemoBlock
          title="Without Header"
          description="Set header={false} to hide the header and close button."
          direction="column"
          fullWidth
        >
          <Button variant="secondary" onClick={() => setMinimalOpen(true)}>
            Open Minimal Sheet
          </Button>
          <BottomSheet
            open={minimalOpen}
            onClose={() => setMinimalOpen(false)}
            header={false}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--gap-medium)',
                padding: 'var(--padding-medium)',
              }}
            >
              <p
                className="text-body-base"
                style={{
                  color: 'var(--color-content-neutral-secondary)',
                  textAlign: 'center',
                }}
              >
                This is a minimal bottom sheet with no header. Tap the backdrop or swipe down to close.
              </p>
              <Button onClick={() => setMinimalOpen(false)}>Got it</Button>
            </div>
          </BottomSheet>
        </DemoBlock>
      </div>

      {/* ── API ── */}
      <h2 className="docs-section-title text-h3">API</h2>

      <ApiTable
        columns={['Property', 'Description', 'Type', 'Default']}
        rows={[
          [<code>open</code>, 'Whether the sheet is visible', <code>boolean</code>, '—'],
          [<code>onClose</code>, 'Called when the sheet should close', <code>() =&gt; void</code>, '—'],
          [<code>title</code>, 'Header title text', <code>string</code>, '—'],
          [<code>description</code>, 'Description text below the title', <code>string</code>, '—'],
          [<code>header</code>, 'Show the header section', <code>boolean</code>, <code>true</code>],
          [<code>footer</code>, 'Footer buttons (enables modal mode)', <code>ReactNode</code>, '—'],
          [<code>children</code>, 'Body content', <code>ReactNode</code>, '—'],
        ]}
      />
      </div>
    </>
  );
}
