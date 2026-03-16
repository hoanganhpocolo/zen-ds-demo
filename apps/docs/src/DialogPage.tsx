import { useState } from 'react';
import { Dialog } from '@zen/components';
import type { DialogTheme } from '@zen/components';
import { Button } from '@zen/components';
import { DemoBlock } from './DemoBlock';

const THEMES: { theme: DialogTheme; label: string }[] = [
  { theme: 'default',  label: 'Default' },
  { theme: 'info',     label: 'Info' },
  { theme: 'positive', label: 'Positive' },
  { theme: 'warning',  label: 'Warning' },
  { theme: 'negative', label: 'Negative' },
];

export function DialogPage() {
  const [openTheme, setOpenTheme] = useState<DialogTheme | null>(null);

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
        <h1 className="docs-page-title text-display-1">Dialog</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A modal dialog for confirmations, alerts, and status messages. Renders in a portal over a blurred backdrop. Supports 5 semantic themes with matching icons.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        {/* Portal dialogs */}
        {THEMES.map(({ theme }) => (
          <Dialog
            key={theme}
            open={openTheme === theme}
            theme={theme}
            title="Modal Heading Text"
            description="Everything in Zen contains Auto Layout. Moreover, we've redefined all variants and we have created brand-new components."
            primaryLabel="Confirm"
            secondaryLabel="Cancel"
            onPrimary={() => setOpenTheme(null)}
            onClose={() => setOpenTheme(null)}
          />
        ))}

        <h2 className="docs-section-title text-h3">Themes</h2>
        <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)', marginBottom: 'var(--gap-large)' }}>
          Click a button to open the dialog.
        </p>

        <div className="docs-demo-grid">
          {THEMES.map(({ theme, label }) => (
            <DemoBlock key={theme} title={label}>
              <Button
                variant="tertiary"
                size="s"
                onClick={() => setOpenTheme(theme)}
              >
                Open {label} dialog
              </Button>
            </DemoBlock>
          ))}
        </div>

        <h2 className="docs-section-title text-h3">Static Preview</h2>
        <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)', marginBottom: 'var(--gap-large)' }}>
          Dialog panels shown inline (without portal/backdrop).
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-large)' }}>
          {THEMES.map(({ theme, label }) => (
            <DemoBlock key={theme} title={label}>
              {/* Render panel only, no portal */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 440,
                  maxWidth: '100%',
                  borderRadius: 'var(--radius-giant)',
                  overflow: 'hidden',
                  background: 'var(--color-bg-surface-default)',
                  border: '1px solid var(--color-border-neutral-subtle-light-default)',
                  boxShadow: '0px 4px 24px 0px rgba(0,0,0,0.08)',
                }}
              >
                <Dialog
                  open={false}
                  theme={theme}
                  title="Modal Heading Text"
                  description="Everything in Zen contains Auto Layout. Moreover, we've redefined all variants and we have created brand-new components."
                  primaryLabel="Confirm"
                  secondaryLabel="Cancel"
                />
              </div>
            </DemoBlock>
          ))}
        </div>

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
              <td><code>open</code></td>
              <td>Controls visibility</td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
            </tr>
            <tr>
              <td><code>theme</code></td>
              <td>Color/icon theme</td>
              <td><code>'default' | 'info' | 'positive' | 'warning' | 'negative'</code></td>
              <td><code>'default'</code></td>
            </tr>
            <tr>
              <td><code>title</code></td>
              <td>Dialog heading (required)</td>
              <td><code>string</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>description</code></td>
              <td>Body description text</td>
              <td><code>ReactNode</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>primaryLabel</code></td>
              <td>Primary button label</td>
              <td><code>string</code></td>
              <td><code>'Confirm'</code></td>
            </tr>
            <tr>
              <td><code>secondaryLabel</code></td>
              <td>Secondary button label</td>
              <td><code>string</code></td>
              <td><code>'Cancel'</code></td>
            </tr>
            <tr>
              <td><code>onPrimary</code></td>
              <td>Primary button click</td>
              <td><code>() =&gt; void</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>onSecondary</code></td>
              <td>Secondary button click (also calls onClose)</td>
              <td><code>() =&gt; void</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>onClose</code></td>
              <td>Called on backdrop click or Escape key</td>
              <td><code>() =&gt; void</code></td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
