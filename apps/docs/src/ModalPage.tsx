import { useState } from 'react';
import { Modal } from '@zen/components';
import type { ModalLayout } from '@zen/components';
import { Button } from '@zen/components';
import { DemoBlock } from './DemoBlock';

const LAYOUTS: { layout: ModalLayout; label: string; description: string }[] = [
  { layout: 'basic',      label: 'Basic',       description: '440px — single column, body slot' },
  { layout: 'big',        label: 'Big',         description: '960px — wide single column, body slot' },
  { layout: 'fixed-left', label: 'Fixed Left',  description: '876px — 240px fixed side slot + content' },
  { layout: 'half-half',  label: 'Half / Half', description: '876px — equal side slot + content' },
  { layout: '3-4',        label: '3 / 4',       description: '767px — 3/7 side slot + 4/7 content' },
];

export function ModalPage() {
  const [openLayout, setOpenLayout] = useState<ModalLayout | null>(null);

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
        <h1 className="docs-page-title text-display-1">Modal</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A modal form container with 5 layout variants. Renders in a portal over a blurred backdrop.
            Each layout provides configurable slot areas for composing any content inside the modal.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        {/* Portal modals */}
        {LAYOUTS.map(({ layout }) => (
          <Modal
            key={layout}
            open={openLayout === layout}
            layout={layout}
            title="Modal Heading Text"
            caption="Everything in Zen contains Auto Layout. Moreover, we've redefined all variants and we have created brand-new components."
            primaryLabel="Confirm"
            secondaryLabel="Cancel"
            onPrimary={() => setOpenLayout(null)}
            onClose={() => setOpenLayout(null)}
          />
        ))}

        <h2 className="docs-section-title text-h3">Layouts</h2>
        <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)', marginBottom: 'var(--gap-large)' }}>
          Click a button to open each layout variant.
        </p>

        <div className="docs-demo-grid">
          {LAYOUTS.map(({ layout, label, description }) => (
            <DemoBlock key={layout} title={label}>
              <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)', marginBottom: 'var(--gap-small)' }}>
                {description}
              </p>
              <Button
                variant="tertiary"
                size="s"
                onClick={() => setOpenLayout(layout)}
              >
                Open {label}
              </Button>
            </DemoBlock>
          ))}
        </div>

        <h2 className="docs-section-title text-h3">With Slot Content</h2>
        <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)', marginBottom: 'var(--gap-large)' }}>
          Slots accept any ReactNode. When empty, a dashed placeholder is shown.
        </p>

        <div className="docs-demo-grid">
          <DemoBlock title="Basic with children">
            <Button
              variant="tertiary"
              size="s"
              onClick={() => setOpenLayout('basic')}
            >
              Open with slot
            </Button>
            <Modal
              open={false}
              layout="basic"
              title="Modal Heading Text"
              caption="Everything in Zen contains Auto Layout. Moreover, we've redefined all variants and we have created brand-new components."
            />
          </DemoBlock>
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
              <td><code>layout</code></td>
              <td>Panel layout variant</td>
              <td><code>'basic' | 'big' | 'fixed-left' | 'half-half' | '3-4'</code></td>
              <td><code>'basic'</code></td>
            </tr>
            <tr>
              <td><code>title</code></td>
              <td>Modal heading (required)</td>
              <td><code>string</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>caption</code></td>
              <td>Subheading / description text</td>
              <td><code>ReactNode</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>children</code></td>
              <td>Body slot content</td>
              <td><code>ReactNode</code></td>
              <td>Dashed placeholder</td>
            </tr>
            <tr>
              <td><code>sideSlot</code></td>
              <td>Left side-panel slot (multi-column only)</td>
              <td><code>ReactNode</code></td>
              <td>Dashed placeholder</td>
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
