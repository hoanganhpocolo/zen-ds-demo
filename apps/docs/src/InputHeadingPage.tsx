import { useState } from 'react';
import { InputHeading } from '@zen/components';
import { DemoBlock } from './DemoBlock';

export function InputHeadingPage() {
  const [title, setTitle] = useState('');

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
        <h1 className="docs-page-title text-display-1">Input Heading</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            An inline editable heading. Click directly on the text to edit — no label, no border, just a heading that becomes editable on interaction. Shows a subtle background on hover and focus.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

      {/* ── When to Use ── */}
      <div className="docs-when-to-use">
        <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>When to use</h3>
        <ul className="text-body-small">
          <li>For page or section titles that users can edit inline.</li>
          <li>For document names, project titles, or any heading-level text that needs to be editable.</li>
          <li>Use <strong>size="h1"</strong> for primary titles (36px) and <strong>size="h2"</strong> for secondary titles (28px).</li>
          <li>Press <strong>Enter</strong> to confirm, <strong>Shift+Enter</strong> for multi-line.</li>
        </ul>
      </div>

      {/* ── Examples ── */}
      <h2 className="docs-section-title text-h3">Examples</h2>

      <div className="docs-demo-grid">
        {/* Sizes */}
        <DemoBlock
          title="Sizes"
          description="H1 (36px, text-h1 typography) and H2 (28px, text-h3 typography). Click to edit."
          direction="column"
          fullWidth
        >
          <InputHeading size="h1" placeholder="H1 — Click to edit" />
          <InputHeading size="h2" placeholder="H2 — Click to edit" />
        </DemoBlock>

        {/* With content */}
        <DemoBlock
          title="With Content"
          description="Pre-filled headings. Hover to see the subtle background, click to edit."
          direction="column"
          fullWidth
        >
          <InputHeading size="h1" defaultValue="Project Overview" />
          <InputHeading size="h2" defaultValue="Design System Components" />
        </DemoBlock>

        {/* Controlled */}
        <DemoBlock
          title="Controlled"
          description="Fully controlled with onChange. Current value is tracked in state."
          direction="column"
          fullWidth
        >
          <InputHeading
            size="h1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Type your title..."
          />
          <p className="text-body-small" style={{ color: 'var(--color-content-neutral-tertiary)' }}>
            Value: {title ? `"${title}"` : '(empty)'}
          </p>
        </DemoBlock>

        {/* Multi-line */}
        <DemoBlock
          title="Multi-line"
          description="Use Shift+Enter to create multiple lines. The input auto-resizes."
          direction="column"
          fullWidth
        >
          <InputHeading size="h1" defaultValue={"A Very Long Heading\nThat Spans Two Lines"} />
          <InputHeading size="h2" defaultValue={"Another Long Heading\nWith Multiple Lines"} />
        </DemoBlock>

        {/* In context */}
        <DemoBlock
          title="In Context"
          description="Used as a page title with body text below — the heading blends seamlessly."
          direction="column"
          fullWidth
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)' }}>
            <InputHeading size="h1" defaultValue="Quarterly Report" />
            <p className="text-body-base" style={{ color: 'var(--color-content-neutral-secondary)' }}>
              This is some body text below the editable heading. The heading looks like a normal heading until you hover over it, revealing the subtle edit affordance.
            </p>
          </div>
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
            <td><code>size</code></td>
            <td>Heading size — H1 uses h1 typography, H2 uses h3 typography</td>
            <td><code>'h1'</code> | <code>'h2'</code></td>
            <td><code>'h2'</code></td>
          </tr>
          <tr>
            <td><code>placeholder</code></td>
            <td>Placeholder text shown when empty</td>
            <td><code>string</code></td>
            <td><code>'Heading'</code></td>
          </tr>
          <tr>
            <td><code>value</code></td>
            <td>Controlled value</td>
            <td><code>string</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>defaultValue</code></td>
            <td>Default value (uncontrolled)</td>
            <td><code>string</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>onChange</code></td>
            <td>Change handler</td>
            <td><code>ChangeEventHandler</code></td>
            <td>—</td>
          </tr>
        </tbody>
      </table>

      {/* ── Design Tokens ── */}
      <h2 className="docs-section-title text-h3" style={{ marginTop: 'var(--gap-3xlarge)' }}>Design Tokens</h2>

      <table className="docs-api-table text-body-small">
        <thead>
          <tr>
            <th>Size</th>
            <th>Font Size</th>
            <th>Line Height</th>
            <th>Letter Spacing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>h1</code></td>
            <td><code>--font-size-h1</code> (36px)</td>
            <td><code>--line-height-h1</code> (44px)</td>
            <td><code>--letter-spacing-h1</code></td>
          </tr>
          <tr>
            <td><code>h2</code></td>
            <td><code>--font-size-h3</code> (28px)</td>
            <td><code>--line-height-h3</code> (36px)</td>
            <td><code>--letter-spacing-h3</code></td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
}
