import { useState } from 'react';
import { Pagination } from '@zen/components';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

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
            <span className="text-subheading">
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
        <ApiTable
          columns={['Property', 'Description', 'Type', 'Default']}
          rows={[
            [<code>theme</code>, 'Visual theme', <><code>'primary'</code> | <code>'secondary'</code> | <code>'inline'</code></>, <code>'primary'</code>],
            [<code>page</code>, 'Current page (1-indexed)', <code>number</code>, '—'],
            [<code>totalPages</code>, 'Total pages (primary / secondary)', <code>number</code>, <code>1</code>],
            [<code>total</code>, 'Total items count (inline)', <code>number</code>, <code>0</code>],
            [<code>pageSize</code>, 'Items per page (inline)', <code>number</code>, <code>10</code>],
            [<code>pageSizeOptions</code>, 'Page size dropdown options (inline)', <code>number[]</code>, <code>[10, 20, 50, 100]</code>],
            [<code>onChange</code>, 'Called with new page number', <code>(page: number) =&gt; void</code>, '—'],
            [<code>onPageSizeChange</code>, 'Called when page size changes (inline)', <code>(size: number) =&gt; void</code>, '—'],
          ]}
        />
      </div>
    </>
  );
}
