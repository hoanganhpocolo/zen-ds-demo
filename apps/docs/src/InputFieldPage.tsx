import { useState } from 'react';
import { InputField, Avatar } from '@zen/components';
import { SearchSmall, Mail01, Eye, EyeOff, ChevronDown } from '@zen/icons/line';
import { DemoBlock } from './DemoBlock';

export function InputFieldPage() {
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [charVal, setCharVal] = useState('');

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
        <h1 className="docs-page-title text-display-1">Input Field</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A text input field with label, leading/trailing addons, help text, character count, and error states. Composed from atomic primitives in Figma but exposed as a single flat API in code.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

      {/* ── When to Use ── */}
      <div className="docs-when-to-use">
        <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>When to use</h3>
        <ul className="text-body-small">
          <li>For single-line text input: email, name, search, password, etc.</li>
          <li>Use <strong>leading</strong>/<strong>trailing</strong> slots for icons, avatars, country selectors, or action buttons.</li>
          <li>Use <strong>error</strong> to show validation errors with a negative border and help text.</li>
          <li>Use <strong>clearable</strong> to add a clear button when the field has content.</li>
        </ul>
      </div>

      {/* ── Examples ── */}
      <h2 className="docs-section-title text-h3">Examples</h2>

      <div className="docs-demo-grid">
        {/* Sizes */}
        <DemoBlock
          title="Sizes"
          description="4 sizes: Small (40px), Medium (48px), Large (56px), XLarge (64px)."
          direction="column"
          fullWidth
        >
          <InputField size="s" label="Small" placeholder="Placeholder" />
          <InputField size="m" label="Medium (default)" placeholder="Placeholder" />
          <InputField size="l" label="Large" placeholder="Placeholder" />
          <InputField size="xl" label="XLarge" placeholder="Placeholder" />
        </DemoBlock>

        {/* Glassmorphism on gradient */}
        <DemoBlock
          title="Glassmorphism Effect"
          description="The subtle translucent background with backdrop-blur creates a frosted-glass look on vibrant surfaces."
          direction="column"
          fullWidth
          previewStyle={{
            background: 'radial-gradient(ellipse at 30% 0%, #7ec8e3 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #ffd966 0%, transparent 45%), radial-gradient(ellipse at 90% 80%, #e8512d 0%, transparent 50%), radial-gradient(ellipse at 10% 90%, #1b4f8a 0%, transparent 50%), linear-gradient(160deg, #5ba3d9 0%, #2d5f8a 30%, #c47a3a 65%, #d94f2b 100%)',
            borderRadius: 'var(--radius-large)',
            padding: 'var(--padding-2xlarge)',
          }}
        >
          <div data-theme="dark" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)', width: '100%' }}>
            <InputField label="Email" placeholder="you@example.com" leading={<Mail01 size={20} />} />
            <InputField label="Search" placeholder="Search anything..." leading={<SearchSmall size={20} />} clearable />
            <InputField size="l" label="Large on gradient" placeholder="See the blur effect" />
          </div>
        </DemoBlock>

        {/* Basic with label */}
        <DemoBlock
          title="With Label & Help Text"
          description="Label and neutral help text below the field."
          direction="column"
          fullWidth
        >
          <InputField label="Email" placeholder="you@example.com" helpText="We'll never share your email." />
          <InputField label="Username" placeholder="Choose a username" helpText={{ message: "3-20 characters, letters and numbers only.", icon: true }} />
        </DemoBlock>

        {/* Leading & Trailing */}
        <DemoBlock
          title="Leading & Trailing"
          description="Slots for icons, avatars, or any custom element."
          direction="column"
          fullWidth
        >
          <InputField
            label="Search"
            placeholder="Search..."
            leading={<SearchSmall size={20} />}
          />
          <InputField
            label="Email"
            placeholder="you@example.com"
            leading={<Mail01 size={20} />}
            trailing={<ChevronDown size={20} />}
          />
          <InputField
            label="Phone"
            placeholder="Enter phone number"
            leading={
              <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-2xsmall)' }}>
                <Avatar size="2xs" color="blue" background="solid">V</Avatar>
                <span className="text-body-small" style={{ fontWeight: 'var(--font-weight-secondary)' }}>VN</span>
                <ChevronDown size={16} />
              </span>
            }
          />
        </DemoBlock>

        {/* Clearable */}
        <DemoBlock
          title="Clearable"
          description="Shows a clear button when the field has content."
          direction="column"
          fullWidth
        >
          <InputField label="Clearable input" placeholder="Type something..." clearable defaultValue="Hello World" />
        </DemoBlock>

        {/* Password with toggle */}
        <DemoBlock
          title="Password with Toggle"
          description="Using trailing slot for a show/hide toggle."
          direction="column"
          fullWidth
        >
          <InputField
            label="Password"
            type={showPw ? 'text' : 'password'}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            trailing={
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'inherit', display: 'flex' }}
              >
                {showPw ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            }
          />
        </DemoBlock>

        {/* Error states */}
        <DemoBlock
          title="Error States"
          description="Pass error as boolean or string to show validation errors."
          direction="column"
          fullWidth
        >
          <InputField label="Email" placeholder="you@example.com" error="Please enter a valid email address." defaultValue="invalid-email" />
          <InputField label="Username" placeholder="Choose a username" error defaultValue="" helpText="This field is required." />
        </DemoBlock>

        {/* Character count */}
        <DemoBlock
          title="Character Count"
          description="Display remaining character count below the field."
          direction="column"
          fullWidth
        >
          <InputField
            label="Bio"
            placeholder="Tell us about yourself"
            value={charVal}
            onChange={(e) => setCharVal(e.target.value.slice(0, 100))}
            charCount={`${charVal.length}/100`}
            helpText="Keep it brief."
          />
        </DemoBlock>

        {/* Read-only & Disabled */}
        <DemoBlock
          title="Read-only & Disabled"
          description="Read-only shows dashed border. Disabled dims the entire field."
          direction="column"
          fullWidth
        >
          <InputField label="Read-only" defaultValue="Cannot edit this" readOnly />
          <InputField label="Disabled" placeholder="Disabled input" disabled helpText="This field is disabled." />
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
            <td><code>label</code></td>
            <td>Label text above the field</td>
            <td><code>string</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>size</code></td>
            <td>Size variant</td>
            <td><code>'s'</code> | <code>'m'</code> | <code>'l'</code> | <code>'xl'</code></td>
            <td><code>'m'</code></td>
          </tr>
          <tr>
            <td><code>leading</code></td>
            <td>Element rendered before the input (icon, avatar, etc.)</td>
            <td><code>ReactNode</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>trailing</code></td>
            <td>Element rendered after the input (icon, button, etc.)</td>
            <td><code>ReactNode</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>clearable</code></td>
            <td>Show clear button when input has value</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td><code>helpText</code></td>
            <td>Help text below the field</td>
            <td><code>string</code> | <code>{'{ message, tone?, icon? }'}</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>charCount</code></td>
            <td>Character count display (e.g. "0/100")</td>
            <td><code>string</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>error</code></td>
            <td>Error state — pass string for error message, boolean for just the border</td>
            <td><code>boolean | string</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>disabled</code></td>
            <td>Disable the input</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td><code>readOnly</code></td>
            <td>Read-only mode (dashed border)</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
        </tbody>
      </table>

      {/* ── Design Tokens ── */}
      <h2 className="docs-section-title text-h3" style={{ marginTop: 'var(--gap-3xlarge)' }}>Design Tokens</h2>

      <table className="docs-api-table text-body-small">
        <thead>
          <tr>
            <th>Size</th>
            <th>Height</th>
            <th>Padding</th>
            <th>Radius</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>xl</code></td>
            <td><code>--input-size-xlarge</code> (64px)</td>
            <td>16px × 16px</td>
            <td><code>--radius-input-xlarge</code></td>
          </tr>
          <tr>
            <td><code>l</code></td>
            <td><code>--input-size-large</code> (56px)</td>
            <td>16px × 16px</td>
            <td><code>--radius-input-large</code></td>
          </tr>
          <tr>
            <td><code>m</code></td>
            <td><code>--input-size-medium</code> (48px)</td>
            <td>16px × 12px</td>
            <td><code>--radius-input-medium</code></td>
          </tr>
          <tr>
            <td><code>s</code></td>
            <td><code>--input-size-small</code> (40px)</td>
            <td>12px × 8px</td>
            <td><code>--radius-input-small</code></td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
}
