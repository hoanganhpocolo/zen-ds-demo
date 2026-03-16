import { useState } from 'react';
import { Search } from '@zen/components';
import { DemoBlock } from './DemoBlock';

export function SearchPage() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [filter, setFilter] = useState('All');

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
        <h1 className="docs-page-title text-display-1">Search</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            Search input with three themes: Default, Filter Dropdown, and Filter Icon.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        {/* ── Sizes ── */}
        <h2 className="docs-section-title text-h3">Sizes</h2>
        <div className="docs-demo-grid">

          <DemoBlock title="Default (48px)">
            <Search
              value={value1}
              onChange={setValue1}
              placeholder="Search"
            />
          </DemoBlock>

          <DemoBlock title="Small (40px)">
            <Search
              size="small"
              value={value2}
              onChange={setValue2}
              placeholder="Search"
            />
          </DemoBlock>

        </div>

        {/* ── Themes ── */}
        <h2 className="docs-section-title text-h3">Themes</h2>
        <div className="docs-demo-grid">

          <DemoBlock title="Default">
            <Search
              value={value3}
              onChange={setValue3}
              placeholder="Search"
            />
          </DemoBlock>

          <DemoBlock title="Filter Dropdown">
            <Search
              theme="filter-dropdown"
              value={value4}
              onChange={setValue4}
              filterLabel={filter}
              onFilterClick={() => setFilter(filter === 'All' ? 'Recent' : 'All')}
              placeholder="Search"
            />
          </DemoBlock>

          <DemoBlock title="Filter Icon">
            <Search
              theme="filter-icon"
              value={value5}
              onChange={setValue5}
              placeholder="Search"
            />
          </DemoBlock>

        </div>

        {/* ── Without search icon ── */}
        <h2 className="docs-section-title text-h3">Without Search Icon</h2>
        <div className="docs-demo-grid">

          <DemoBlock title="Default — no icon">
            <Search
              showSearchIcon={false}
              placeholder="Search"
            />
          </DemoBlock>

          <DemoBlock title="Filter Dropdown — no icon">
            <Search
              theme="filter-dropdown"
              showSearchIcon={false}
              filterLabel="All"
              placeholder="Search"
            />
          </DemoBlock>

          <DemoBlock title="Filter Icon — no icon">
            <Search
              theme="filter-icon"
              showSearchIcon={false}
              placeholder="Search"
            />
          </DemoBlock>

        </div>

        {/* ── API ── */}
        <h2 className="docs-section-title text-h3">API</h2>
        <table className="docs-api-table text-body-small">
          <thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead>
          <tbody>
            <tr><td><code>value</code></td><td>Controlled value</td><td><code>string</code></td><td>—</td></tr>
            <tr><td><code>onChange</code></td><td>Change callback</td><td><code>(value: string) =&gt; void</code></td><td>—</td></tr>
            <tr><td><code>onSearch</code></td><td>Called on Enter key</td><td><code>(value: string) =&gt; void</code></td><td>—</td></tr>
            <tr><td><code>placeholder</code></td><td>Placeholder text</td><td><code>string</code></td><td><code>"Search"</code></td></tr>
            <tr><td><code>size</code></td><td>Size variant</td><td><code>"default" | "small"</code></td><td><code>"default"</code></td></tr>
            <tr><td><code>theme</code></td><td>Visual theme</td><td><code>"default" | "filter-dropdown" | "filter-icon"</code></td><td><code>"default"</code></td></tr>
            <tr><td><code>showSearchIcon</code></td><td>Show left search icon</td><td><code>boolean</code></td><td><code>true</code></td></tr>
            <tr><td><code>filterLabel</code></td><td>Label for filter-dropdown trailing</td><td><code>string</code></td><td><code>"All"</code></td></tr>
            <tr><td><code>onFilterClick</code></td><td>Called when filter button clicked</td><td><code>() =&gt; void</code></td><td>—</td></tr>
            <tr><td><code>trailing</code></td><td>Custom trailing content (default theme)</td><td><code>ReactNode</code></td><td>—</td></tr>
          </tbody>
        </table>

      </div>
    </>
  );
}
