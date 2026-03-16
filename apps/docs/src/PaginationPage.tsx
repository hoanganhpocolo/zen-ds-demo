import { useState } from 'react';
import { Pagination } from '@zen/components';
import { DemoBlock } from './DemoBlock';

export function PaginationPage() {
  const [primaryPage, setPrimaryPage] = useState(1);
  const [secondaryPage, setSecondaryPage] = useState(1);
  const [inlinePage, setInlinePage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const total = 100;

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
        <h1 className="docs-page-title text-display-1">Pagination</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            Navigates through pages of content. Three themes: Primary (solid active),
            Secondary (subtle active), and Inline (page-size selector + range label + nav).
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        <h2 className="docs-section-title text-h3">Themes</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-large)' }}>

          <DemoBlock title="Primary">
            <Pagination
              theme="primary"
              page={primaryPage}
              totalPages={10}
              onChange={setPrimaryPage}
            />
            <p className="text-body-small" style={{ color: 'var(--color-content-neutral-tertiary)', marginTop: 'var(--gap-xsmall)' }}>
              Page {primaryPage} of 10
            </p>
          </DemoBlock>

          <DemoBlock title="Secondary">
            <Pagination
              theme="secondary"
              page={secondaryPage}
              totalPages={10}
              onChange={setSecondaryPage}
            />
            <p className="text-body-small" style={{ color: 'var(--color-content-neutral-tertiary)', marginTop: 'var(--gap-xsmall)' }}>
              Page {secondaryPage} of 10
            </p>
          </DemoBlock>

          <DemoBlock title="Inline">
            <Pagination
              theme="inline"
              page={inlinePage}
              total={total}
              pageSize={pageSize}
              pageSizeOptions={[5, 10, 20, 50]}
              onChange={setInlinePage}
              onPageSizeChange={(s) => { setPageSize(s); setInlinePage(1); }}
            />
          </DemoBlock>
        </div>

        <h2 className="docs-section-title text-h3">Page States</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-large)' }}>

          <DemoBlock title="First page">
            <Pagination theme="primary" page={1} totalPages={10} />
          </DemoBlock>

          <DemoBlock title="Middle page">
            <Pagination theme="primary" page={5} totalPages={10} />
          </DemoBlock>

          <DemoBlock title="Last page">
            <Pagination theme="primary" page={10} totalPages={10} />
          </DemoBlock>

          <DemoBlock title="Few pages (≤ 7)">
            <Pagination theme="primary" page={3} totalPages={5} />
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
              <td><code>theme</code></td>
              <td>Visual theme</td>
              <td><code>'primary' | 'secondary' | 'inline'</code></td>
              <td><code>'primary'</code></td>
            </tr>
            <tr>
              <td><code>page</code></td>
              <td>Current page (1-indexed)</td>
              <td><code>number</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>totalPages</code></td>
              <td>Total pages (primary / secondary)</td>
              <td><code>number</code></td>
              <td><code>1</code></td>
            </tr>
            <tr>
              <td><code>total</code></td>
              <td>Total items count (inline)</td>
              <td><code>number</code></td>
              <td><code>0</code></td>
            </tr>
            <tr>
              <td><code>pageSize</code></td>
              <td>Items per page (inline)</td>
              <td><code>number</code></td>
              <td><code>10</code></td>
            </tr>
            <tr>
              <td><code>pageSizeOptions</code></td>
              <td>Page size dropdown options (inline)</td>
              <td><code>number[]</code></td>
              <td><code>[10, 20, 50, 100]</code></td>
            </tr>
            <tr>
              <td><code>onChange</code></td>
              <td>Called with new page number</td>
              <td><code>(page: number) =&gt; void</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>onPageSizeChange</code></td>
              <td>Called when page size changes (inline)</td>
              <td><code>(size: number) =&gt; void</code></td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
