import { Breadcrumb, BreadcrumbItem } from '@zen/components';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

export function BreadcrumbPage() {
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
        <h1 className="docs-page-title text-display-1">Breadcrumb</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A navigation trail showing the current page's location within a hierarchy. Items support master (with home icon) and sub levels. The last item is automatically styled as the current page.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

      {/* ── When to Use ── */}
      <div className="docs-when-to-use">
        <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>When to use</h3>
        <ul className="text-body-small">
          <li>For showing hierarchical navigation path (e.g. Home &gt; Category &gt; Page).</li>
          <li>Use <strong>master</strong> on the first item to show a home icon.</li>
          <li>The last <code>BreadcrumbItem</code> is automatically marked as the current page (medium emphasis, non-clickable).</li>
          <li>Pass <strong>href</strong> to make items into links.</li>
        </ul>
      </div>

      {/* ── Examples ── */}
      <h2 className="docs-section-title text-h3">Examples</h2>

      <div className="docs-demo-grid">
        {/* Basic */}
        <DemoBlock
          title="Basic"
          description="Simple breadcrumb with text items. Last item shows as current page."
          direction="column"
          fullWidth
        >
          <Breadcrumb>
            <BreadcrumbItem href="#">Home</BreadcrumbItem>
            <BreadcrumbItem href="#">Products</BreadcrumbItem>
            <BreadcrumbItem>Zen Components</BreadcrumbItem>
          </Breadcrumb>
        </DemoBlock>

        {/* With master (home icon) */}
        <DemoBlock
          title="With Home Icon"
          description="First item uses master prop to show a home icon alongside the label."
          direction="column"
          fullWidth
        >
          <Breadcrumb>
            <BreadcrumbItem master href="#">Home</BreadcrumbItem>
            <BreadcrumbItem href="#">Design System</BreadcrumbItem>
            <BreadcrumbItem href="#">Components</BreadcrumbItem>
            <BreadcrumbItem>Button</BreadcrumbItem>
          </Breadcrumb>
        </DemoBlock>

        {/* Two levels */}
        <DemoBlock
          title="Two Levels"
          description="Minimal breadcrumb with just root and current page."
          direction="column"
          fullWidth
        >
          <Breadcrumb>
            <BreadcrumbItem master href="#">Dashboard</BreadcrumbItem>
            <BreadcrumbItem>Settings</BreadcrumbItem>
          </Breadcrumb>
        </DemoBlock>

        {/* Deep hierarchy */}
        <DemoBlock
          title="Deep Hierarchy"
          description="Many levels deep — items wrap to next line when space is limited."
          direction="column"
          fullWidth
        >
          <Breadcrumb>
            <BreadcrumbItem master href="#">Home</BreadcrumbItem>
            <BreadcrumbItem href="#">Organization</BreadcrumbItem>
            <BreadcrumbItem href="#">Team</BreadcrumbItem>
            <BreadcrumbItem href="#">Projects</BreadcrumbItem>
            <BreadcrumbItem href="#">Zen Design System</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
          </Breadcrumb>
        </DemoBlock>

        {/* Without links */}
        <DemoBlock
          title="Without Links"
          description="Items without href still show hover states but don't navigate."
          direction="column"
          fullWidth
        >
          <Breadcrumb>
            <BreadcrumbItem master>Home</BreadcrumbItem>
            <BreadcrumbItem>Category</BreadcrumbItem>
            <BreadcrumbItem>Current Page</BreadcrumbItem>
          </Breadcrumb>
        </DemoBlock>
      </div>

      {/* ── API ── */}
      <h2 className="docs-section-title text-h3">API</h2>

      <h3 className="text-body-base" style={{ fontWeight: 'var(--font-weight-primary)', marginBottom: 'var(--gap-small)' }}>Breadcrumb</h3>
      <ApiTable
        columns={['Property', 'Description', 'Type', 'Default']}
        rows={[
          [<code>separator</code>, 'Custom separator between items', <code>ReactNode</code>, 'Chevron right icon'],
          [<code>children</code>, 'BreadcrumbItem elements', <code>ReactNode</code>, '—'],
        ]}
      />

      <h3 className="text-body-base" style={{ fontWeight: 'var(--font-weight-primary)', marginTop: 'var(--gap-xlarge)', marginBottom: 'var(--gap-small)' }}>BreadcrumbItem</h3>
      <ApiTable
        columns={['Property', 'Description', 'Type', 'Default']}
        rows={[
          [<code>master</code>, 'Show home icon (root/first item)', <code>boolean</code>, <code>false</code>],
          [<code>icon</code>, 'Custom icon (replaces default home icon)', <code>ReactNode</code>, 'Home icon'],
          [<code>href</code>, 'Link URL', <code>string</code>, '—'],
          [<code>children</code>, 'Label text', <code>ReactNode</code>, '—'],
        ]}
      />
      </div>
    </>
  );
}
