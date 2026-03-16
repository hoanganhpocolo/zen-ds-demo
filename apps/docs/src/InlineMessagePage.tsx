import { useState } from 'react';
import { InlineMessage } from '@zen/components';
import type { InlineMessageTheme } from '@zen/components';
import { DemoBlock } from './DemoBlock';

const THEMES: InlineMessageTheme[] = ['neutral', 'info', 'positive', 'warning', 'negative'];

export function InlineMessagePage() {
  const [visible, setVisible] = useState(true);

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
        <h1 className="docs-page-title text-display-1">Inline Message</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A contextual message that appears inline within content. Supports 5 semantic themes, optional title, caption, action, and close button.
          </p>
        </div>
      </div>

      <div className="docs-page-body">
        <h2 className="docs-section-title text-h3">Themes</h2>
        <div className="docs-demo-grid">
          {THEMES.map((theme) => (
            <DemoBlock key={theme} title={theme.charAt(0).toUpperCase() + theme.slice(1)}>
              <InlineMessage
                theme={theme}
                title="Inline Message"
                caption="A narrow visual element that displays relevant messages or prompts within the context of the main content."
              />
            </DemoBlock>
          ))}
        </div>

        <h2 className="docs-section-title text-h3">With Close Button</h2>
        <div className="docs-demo-grid">
          {THEMES.map((theme) => (
            <DemoBlock key={theme} title={theme}>
              <InlineMessage
                theme={theme}
                title="Inline Message"
                caption="A narrow visual element that displays relevant messages."
                closable
                onClose={() => {}}
              />
            </DemoBlock>
          ))}
        </div>

        <h2 className="docs-section-title text-h3">With Action</h2>
        <div className="docs-demo-grid">
          {THEMES.map((theme) => (
            <DemoBlock key={theme} title={theme}>
              <InlineMessage
                theme={theme}
                title="Inline Message"
                caption="A narrow visual element that displays relevant messages."
                actionLabel="Learn More"
                onAction={() => {}}
                closable
                onClose={() => {}}
              />
            </DemoBlock>
          ))}
        </div>

        <h2 className="docs-section-title text-h3">Caption only</h2>
        <div className="docs-demo-grid">
          {THEMES.map((theme) => (
            <DemoBlock key={theme} title={theme}>
              <InlineMessage
                theme={theme}
                caption="A narrow visual element that displays relevant messages or prompts within the context of the main content."
                closable
                onClose={() => {}}
              />
            </DemoBlock>
          ))}
        </div>

        <h2 className="docs-section-title text-h3">Dismissible</h2>
        <DemoBlock title="Close to dismiss" description="Message disappears on close.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-small)', width: '100%' }}>
            {visible ? (
              <InlineMessage
                theme="info"
                title="Did you know?"
                caption="You can dismiss this message by clicking the close button."
                closable
                onClose={() => setVisible(false)}
              />
            ) : (
              <p className="text-body-small" style={{ color: 'var(--color-content-neutral-tertiary)' }}>
                Message dismissed.{' '}
                <button
                  style={{ color: 'var(--color-content-link)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  onClick={() => setVisible(true)}
                >
                  Restore
                </button>
              </p>
            )}
          </div>
        </DemoBlock>

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
              <td><code>theme</code></td>
              <td>Color theme</td>
              <td><code>'neutral' | 'info' | 'positive' | 'warning' | 'negative'</code></td>
              <td><code>'neutral'</code></td>
            </tr>
            <tr>
              <td><code>title</code></td>
              <td>Bold title text</td>
              <td><code>string</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>caption</code></td>
              <td>Body caption text</td>
              <td><code>ReactNode</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>actionLabel</code></td>
              <td>Action button label</td>
              <td><code>string</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>onAction</code></td>
              <td>Action button click handler</td>
              <td><code>() =&gt; void</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>closable</code></td>
              <td>Show close button</td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
            </tr>
            <tr>
              <td><code>onClose</code></td>
              <td>Close button click handler</td>
              <td><code>() =&gt; void</code></td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
