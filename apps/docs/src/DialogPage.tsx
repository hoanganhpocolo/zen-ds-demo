import { useState } from 'react';
import { Dialog, Button, Segmented } from '@zen/components';
import type { DialogTheme } from '@zen/components';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

const THEMES: { theme: DialogTheme; label: string }[] = [
  { theme: 'default',  label: 'Default' },
  { theme: 'info',     label: 'Info' },
  { theme: 'positive', label: 'Positive' },
  { theme: 'warning',  label: 'Warning' },
  { theme: 'negative', label: 'Negative' },
];

export function DialogPage() {
  const [openTheme, setOpenTheme] = useState<DialogTheme | null>(null);
  const [previewTheme, setPreviewTheme] = useState<DialogTheme>('default');

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

        <DemoBlock
          title={THEMES.find(t => t.theme === previewTheme)?.label ?? ''}
          direction="column"
          previewStyle={{ alignItems: 'center' }}
        >
          <Segmented
            items={THEMES.map(({ theme, label }) => ({ value: theme, label }))}
            value={previewTheme}
            onChange={(v) => setPreviewTheme(v as DialogTheme)}
          />
          <Dialog
            inline
            theme={previewTheme}
            title="Modal Heading Text"
            description="Everything in Zen contains Auto Layout. Moreover, we've redefined all variants and we have created brand-new components."
            primaryLabel="Confirm"
            secondaryLabel="Cancel"
          />
        </DemoBlock>

        <h2 className="docs-section-title text-h3">API</h2>
        <ApiTable
          columns={['Property', 'Description', 'Type', 'Default']}
          rows={[
            [<code>open</code>, 'Controls visibility', <code>boolean</code>, <code>false</code>],
            [<code>theme</code>, 'Color/icon theme', <><code>'default'</code> | <code>'info'</code> | <code>'positive'</code> | <code>'warning'</code> | <code>'negative'</code></>, <code>'default'</code>],
            [<code>title</code>, 'Dialog heading (required)', <code>string</code>, '—'],
            [<code>description</code>, 'Body description text', <code>ReactNode</code>, '—'],
            [<code>primaryLabel</code>, 'Primary button label', <code>string</code>, <code>'Confirm'</code>],
            [<code>secondaryLabel</code>, 'Secondary button label', <code>string</code>, <code>'Cancel'</code>],
            [<code>onPrimary</code>, 'Primary button click', <code>() =&gt; void</code>, '—'],
            [<code>onSecondary</code>, 'Secondary button click (also calls onClose)', <code>() =&gt; void</code>, '—'],
            [<code>onClose</code>, 'Called on backdrop click or Escape key', <code>() =&gt; void</code>, '—'],
          ]}
        />
      </div>
    </>
  );
}
