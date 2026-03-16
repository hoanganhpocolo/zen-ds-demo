import { useState } from 'react';
import { Chip, Avatar } from '@zen/components';
import { Star01 } from '@zen/icons/line';
import { DemoBlock } from './DemoBlock';

export function ChipPage() {
  const [selected, setSelected] = useState(false);
  const [filters, setFilters] = useState<string[]>(['Design']);

  const toggleFilter = (f: string) =>
    setFilters((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f],
    );

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
        <h1 className="docs-page-title text-display-1">Chip</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            Compact, interactive element for selections, filters, and tags. Supports leading/trailing elements including icons, photos, and avatars.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

      {/* ── When to Use ── */}
      <div className="docs-when-to-use">
        <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>When to use</h3>
        <ul className="text-body-small">
          <li>For filter selections, tag inputs, or compact toggleable options.</li>
          <li>Use <strong>leading</strong> for icons, photos, or avatars before the label.</li>
          <li>Use <strong>trailing</strong> for avatars or custom elements after the label.</li>
          <li>Use <strong>dropdown</strong> for chips that open a menu.</li>
          <li>Use <strong>onRemove</strong> for dismissible chips with a close button.</li>
        </ul>
      </div>

      {/* ── Examples ── */}
      <h2 className="docs-section-title text-h3">Examples</h2>

      <div className="docs-demo-grid">
        {/* Basic */}
        <DemoBlock
          title="Basic"
          description="Text-only chips in two levels."
          direction="row"
        >
          <Chip label="Primary" level="primary" />
          <Chip label="Secondary" level="secondary" />
        </DemoBlock>

        {/* Selected */}
        <DemoBlock
          title="Selected"
          description="Chips in selected state."
          direction="row"
        >
          <Chip label="Primary" level="primary" selected />
          <Chip label="Secondary" level="secondary" selected />
        </DemoBlock>

        {/* Sizes */}
        <DemoBlock
          title="Sizes"
          description="Medium (default) and small."
          direction="row"
        >
          <Chip label="Medium" size="m" />
          <Chip label="Small" size="s" />
          <Chip label="Medium" size="m" selected />
          <Chip label="Small" size="s" selected />
        </DemoBlock>

        {/* Leading icon */}
        <DemoBlock
          title="Leading Icon"
          description="Chip with a leading icon."
          direction="row"
        >
          <Chip label="Favorites" leading={<Star01 size={20} />} />
          <Chip label="Favorites" leading={<Star01 size={20} />} selected />
        </DemoBlock>

        {/* Leading photo */}
        <DemoBlock
          title="Leading Photo"
          description="Chip with a leading photo/avatar."
          direction="row"
        >
          <Chip
            label="John Doe"
            leading={<img src="https://i.pravatar.cc/48?img=3" alt="" />}
          />
          <Chip
            label="Jane Doe"
            leading={<img src="https://i.pravatar.cc/48?img=5" alt="" />}
            selected
          />
        </DemoBlock>

        {/* Trailing avatar */}
        <DemoBlock
          title="Trailing Avatar"
          description="Chip with a trailing avatar element."
          direction="row"
        >
          <Chip
            label="Assigned to"
            trailing={<Avatar size="xs">K</Avatar>}
          />
        </DemoBlock>

        {/* Dropdown */}
        <DemoBlock
          title="Dropdown"
          description="Chip with a dropdown chevron."
          direction="row"
        >
          <Chip label="Category" dropdown />
          <Chip label="Status" dropdown selected />
        </DemoBlock>

        {/* Removable */}
        <DemoBlock
          title="Removable"
          description="Chip with a close button (onRemove)."
          direction="row"
        >
          <Chip label="Tag A" onRemove={() => {}} />
          <Chip label="Tag B" onRemove={() => {}} selected />
          <Chip label="With icon" leading={<Star01 size={20} />} onRemove={() => {}} />
        </DemoBlock>

        {/* Controlled */}
        <DemoBlock
          title="Controlled Toggle"
          description="Click to toggle selected state."
          direction="row"
        >
          <Chip
            label={selected ? 'Selected' : 'Click me'}
            selected={selected}
            onClick={() => setSelected(!selected)}
          />
        </DemoBlock>

        {/* Filter group */}
        <DemoBlock
          title="Filter Group"
          description="Multi-select chip group for filtering."
          direction="row"
        >
          {['Design', 'Development', 'Marketing', 'Sales'].map((f) => (
            <Chip
              key={f}
              label={f}
              selected={filters.includes(f)}
              onClick={() => toggleFilter(f)}
            />
          ))}
        </DemoBlock>

        {/* Disabled */}
        <DemoBlock
          title="Disabled"
          description="Disabled state."
          direction="row"
        >
          <Chip label="Disabled" disabled />
          <Chip label="Disabled Selected" selected disabled />
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
            <td>Chip label text</td>
            <td><code>string</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>size</code></td>
            <td>Size variant</td>
            <td><code>'s'</code> | <code>'m'</code></td>
            <td><code>'m'</code></td>
          </tr>
          <tr>
            <td><code>level</code></td>
            <td>Visual level</td>
            <td><code>'primary'</code> | <code>'secondary'</code></td>
            <td><code>'primary'</code></td>
          </tr>
          <tr>
            <td><code>selected</code></td>
            <td>Selected state</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td><code>leading</code></td>
            <td>Leading element (icon, photo, avatar)</td>
            <td><code>ReactNode</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>trailing</code></td>
            <td>Trailing element (avatar, custom)</td>
            <td><code>ReactNode</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>dropdown</code></td>
            <td>Show dropdown chevron</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td><code>onRemove</code></td>
            <td>Show close button, called on click</td>
            <td><code>() =&gt; void</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>disabled</code></td>
            <td>Disable the chip</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
}
