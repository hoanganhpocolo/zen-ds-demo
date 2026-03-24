import { useState } from 'react';
import { Search } from '@zen/components';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

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
            <span className="text-subheading">
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
        <ApiTable
          columns={['Property', 'Description', 'Type', 'Default']}
          rows={[
            [<code>value</code>, 'Controlled value', <code>string</code>, '—'],
            [<code>onChange</code>, 'Change callback', <code>(value: string) =&gt; void</code>, '—'],
            [<code>onSearch</code>, 'Called on Enter key', <code>(value: string) =&gt; void</code>, '—'],
            [<code>placeholder</code>, 'Placeholder text', <code>string</code>, <code>"Search"</code>],
            [<code>size</code>, 'Size variant', <><code>"default"</code> | <code>"small"</code></>, <code>"default"</code>],
            [<code>theme</code>, 'Visual theme', <><code>"default"</code> | <code>"filter-dropdown"</code> | <code>"filter-icon"</code></>, <code>"default"</code>],
            [<code>showSearchIcon</code>, 'Show left search icon', <code>boolean</code>, <code>true</code>],
            [<code>filterLabel</code>, 'Label for filter-dropdown trailing', <code>string</code>, <code>"All"</code>],
            [<code>onFilterClick</code>, 'Called when filter button clicked', <code>() =&gt; void</code>, '—'],
            [<code>trailing</code>, 'Custom trailing content (default theme)', <code>ReactNode</code>, '—'],
          ]}
        />

      </div>
    </>
  );
}
