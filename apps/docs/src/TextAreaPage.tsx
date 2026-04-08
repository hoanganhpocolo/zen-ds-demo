import { useState } from 'react';
import { TextArea } from '@zen/components';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

export function TextAreaPage() {
  const [bioVal, setBioVal] = useState('');

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
        <h1 className="docs-page-title text-display-1">Text Area</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A multi-line text input with label, help text, character count, and error states. Uses the same FieldShell as InputField for visual consistency.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

      {/* ── When to Use ── */}
      <div className="docs-when-to-use">
        <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>When to use</h3>
        <ul className="text-body-small">
          <li>For multi-line text input: comments, descriptions, bio, feedback, etc.</li>
          <li>Use <strong>rows</strong> to control the initial visible height.</li>
          <li>Use <strong>noResize</strong> to prevent the user from resizing.</li>
          <li>Use <strong>charCount</strong> to show remaining characters.</li>
        </ul>
      </div>

      {/* ── Examples ── */}
      <h2 className="docs-section-title text-h3">Examples</h2>

      <div className="docs-demo-grid">
        {/* Sizes */}
        <DemoBlock
          title="Sizes"
          description="3 sizes: Small, Medium (default), Large. Typography scales with size."
          direction="column"
          fullWidth
        >
          <TextArea size="s" label="Small" placeholder="Write something..." rows={2} />
          <TextArea size="m" label="Medium (default)" placeholder="Write something..." rows={3} />
          <TextArea size="l" label="Large" placeholder="Write something..." rows={3} />
        </DemoBlock>

        {/* With label & help text */}
        <DemoBlock
          title="With Label & Help Text"
          description="Label and neutral help text below the field."
          direction="column"
          fullWidth
        >
          <TextArea label="Description" placeholder="Describe your project..." helpText="Markdown is supported." />
          <TextArea label="Notes" placeholder="Add notes..." helpText={{ message: "Optional, but helpful for context.", icon: true }} />
        </DemoBlock>

        {/* Character count */}
        <DemoBlock
          title="Character Count"
          description="Display remaining character count below the field."
          direction="column"
          fullWidth
        >
          <TextArea
            label="Bio"
            placeholder="Tell us about yourself"
            value={bioVal}
            onChange={(e) => setBioVal(e.target.value.slice(0, 200))}
            charCount={`${bioVal.length}/200`}
            helpText="Keep it brief."
            rows={4}
          />
        </DemoBlock>

        {/* Error states */}
        <DemoBlock
          title="Error States"
          description="Pass error as boolean or string to show validation errors."
          direction="column"
          fullWidth
        >
          <TextArea label="Feedback" placeholder="Your feedback..." error="This field is required." defaultValue="" />
          <TextArea label="Comments" placeholder="Add a comment..." error defaultValue="" helpText="Please provide more detail." />
        </DemoBlock>

        {/* No resize */}
        <DemoBlock
          title="No Resize"
          description="Disable the resize handle with the noResize prop."
          direction="column"
          fullWidth
        >
          <TextArea label="Fixed height" placeholder="Cannot resize this textarea" noResize rows={3} />
        </DemoBlock>

        {/* Read-only & Disabled */}
        <DemoBlock
          title="Read-only & Disabled"
          description="Read-only shows dashed border. Disabled dims the entire field."
          direction="column"
          fullWidth
        >
          <TextArea label="Read-only" defaultValue="This content cannot be edited by the user." readOnly rows={2} />
          <TextArea label="Disabled" placeholder="Disabled textarea" disabled helpText="This field is disabled." rows={2} />
        </DemoBlock>
      </div>

      {/* ── API ── */}
      <h2 className="docs-section-title text-h3">API</h2>

      <ApiTable
        columns={['Property', 'Description', 'Type', 'Default']}
        rows={[
          [<code>label</code>, 'Label text above the field', <code>string</code>, '—'],
          [<code>size</code>, 'Size variant', <><code>'s'</code> | <code>'m'</code> | <code>'l'</code></>, <code>'m'</code>],
          [<code>rows</code>, 'Visible number of lines', <code>number</code>, <code>3</code>],
          [<code>noResize</code>, 'Disable resize handle', <code>boolean</code>, <code>false</code>],
          [<code>helpText</code>, 'Help text below the field', <><code>string</code> | <code>{'{ message, tone?, icon? }'}</code></>, '—'],
          [<code>charCount</code>, 'Character count display', <code>string</code>, '—'],
          [<code>error</code>, 'Error state', <code>boolean | string</code>, '—'],
          [<code>disabled</code>, 'Disable the textarea', <code>boolean</code>, <code>false</code>],
          [<code>readOnly</code>, 'Read-only mode (dashed border)', <code>boolean</code>, <code>false</code>],
        ]}
      />
      </div>
    </>
  );
}
