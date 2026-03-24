import { useState } from 'react';
import { AlertBanner, Button } from '@zen/components';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

export function AlertBannerPage() {
  const [visible, setVisible] = useState(true);

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
        <h1 className="docs-page-title text-display-1">Alert Banner</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A full-width banner that displays important messages or notifications. Typically placed at the top of a page or section to draw user attention.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

      {/* ── When to Use ── */}
      <div className="docs-when-to-use">
        <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>When to use</h3>
        <ul className="text-body-small">
          <li>To communicate system-wide messages, status updates, or important announcements.</li>
          <li>Use <strong>Default</strong> for general messages, <strong>Info</strong> for informational notices.</li>
          <li>Use <strong>Positive</strong> for success confirmations, <strong>Warning</strong> for caution messages.</li>
          <li>Use <strong>Negative</strong> for errors or critical issues.</li>
          <li>Use size <strong>Small</strong> for inline or less prominent alerts.</li>
        </ul>
      </div>

      {/* ── Examples ── */}
      <h2 className="docs-section-title text-h3">Examples</h2>

      <div className="docs-demo-grid">
        {/* Themes */}
        <DemoBlock
          title="Theme"
          description="5 semantic themes for different alert types."
          direction="column"
          fullWidth
        >
          <AlertBanner theme="default" onClose={() => {}}>This is a default alert message</AlertBanner>
          <AlertBanner theme="info" onClose={() => {}}>This is an informational message</AlertBanner>
          <AlertBanner theme="positive" onClose={() => {}}>Operation completed successfully</AlertBanner>
          <AlertBanner theme="warning" onClose={() => {}}>Please review before continuing</AlertBanner>
          <AlertBanner theme="negative" onClose={() => {}}>An error occurred, please try again</AlertBanner>
        </DemoBlock>

        {/* Sizes */}
        <DemoBlock
          title="Size"
          description="Medium (default) with action button support, and Small for compact alerts."
          direction="column"
          fullWidth
        >
          <AlertBanner theme="info" size="m" onClose={() => {}}>Medium — default size with action support</AlertBanner>
          <AlertBanner theme="info" size="s" onClose={() => {}}>Small — compact variant for inline use</AlertBanner>
        </DemoBlock>

        {/* With Action */}
        <DemoBlock
          title="With Action"
          description="Medium size supports an action button using the inverse Button variant."
          direction="column"
          fullWidth
        >
          <AlertBanner
            theme="default"
            action={<Button variant="inverse" size="s">Action</Button>}
            onClose={() => {}}
          >
            Alert with action button
          </AlertBanner>
          <AlertBanner
            theme="info"
            action={<Button variant="inverse" size="s">View</Button>}
            onClose={() => {}}
          >
            New update available for your account
          </AlertBanner>
          <AlertBanner
            theme="negative"
            action={<Button variant="inverse" size="s">Retry</Button>}
            onClose={() => {}}
          >
            Payment failed — please update your billing info
          </AlertBanner>
        </DemoBlock>

        {/* Without Icon */}
        <DemoBlock
          title="Without Icon"
          description="Pass icon={null} to hide the leading icon."
          direction="column"
          fullWidth
        >
          <AlertBanner theme="default" icon={null} onClose={() => {}}>No icon alert message</AlertBanner>
          <AlertBanner theme="warning" icon={null} onClose={() => {}}>Warning without an icon</AlertBanner>
        </DemoBlock>

        {/* Dismissible */}
        <DemoBlock
          title="Dismissible"
          description="Provide onClose to show the close button. The banner can be hidden with state."
          direction="column"
          fullWidth
        >
          {visible ? (
            <AlertBanner theme="positive" onClose={() => setVisible(false)}>
              Click the X to dismiss this alert
            </AlertBanner>
          ) : (
            <Button variant="tertiary" size="s" onClick={() => setVisible(true)}>
              Show alert again
            </Button>
          )}
        </DemoBlock>

        {/* All Themes × Sizes */}
        <DemoBlock
          title="All Themes — Small"
          description="Compact variant for all 5 themes."
          direction="column"
          fullWidth
        >
          {(['default', 'info', 'positive', 'warning', 'negative'] as const).map((t) => (
            <AlertBanner key={t} theme={t} size="s" onClose={() => {}}>
              {t.charAt(0).toUpperCase() + t.slice(1)} alert message
            </AlertBanner>
          ))}
        </DemoBlock>
      </div>

      {/* ── API ── */}
      <h2 className="docs-section-title text-h3">API</h2>

      <ApiTable
        columns={['Property', 'Description', 'Type', 'Default']}
        rows={[
          [<code>children</code>, 'Alert message content', <code>ReactNode</code>, '—'],
          [<code>theme</code>, 'Color theme', <><code>'default'</code> | <code>'info'</code> | <code>'positive'</code> | <code>'warning'</code> | <code>'negative'</code></>, <code>'default'</code>],
          [<code>size</code>, 'Size variant', <><code>'m'</code> | <code>'s'</code></>, <code>'m'</code>],
          [<code>icon</code>, <>Leading icon. Auto-selected by theme if omitted. Pass <code>null</code> to hide.</>, <><code>ReactNode | null</code></>, 'Auto'],
          [<code>action</code>, 'Action button element (only shown at size "m")', <code>ReactNode</code>, '—'],
          [<code>onClose</code>, 'Called when the close button is clicked. If omitted, close button is hidden.', <code>() =&gt; void</code>, '—'],
        ]}
      />

      {/* ── Design Tokens ── */}
      <h2 className="docs-section-title text-h3" style={{ marginTop: 'var(--gap-3xlarge)' }}>Design Tokens</h2>

      <ApiTable
        columns={['Theme', 'Background', 'Text Color']}
        rows={[
          [<code>default</code>, <code>--color-bg-fill-neutral-solid-default</code>, <code>--color-content-inverse</code>],
          [<code>info</code>, <code>--color-bg-fill-info-solid-default</code>, <code>--color-content-on-colors</code>],
          [<code>positive</code>, <code>--color-bg-fill-positive-solid-default</code>, <code>--color-content-on-colors</code>],
          [<code>warning</code>, <code>--color-bg-fill-warning-solid-default</code>, <code>--color-content-on-brights</code>],
          [<code>negative</code>, <code>--color-bg-fill-negative-solid-default</code>, <code>--color-content-on-colors</code>],
        ]}
      />
      </div>
    </>
  );
}
