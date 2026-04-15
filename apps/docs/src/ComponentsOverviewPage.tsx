import {
  Accordion, AccordionGroup, AlertBanner, Avatar, AvatarGroup, Badge,
  Breadcrumb, BreadcrumbItem, Button, Calendar, Checkbox, Chip,
  Dialog, Divider, InlineMessage, InputField, InputHeading,
  ListItem, MetricCard, Modal, NumberField, Pagination, Popover,
  ProgressBar, ProgressCircle, Radio, RadioGroup,
  RatingStar, Search, Segmented, SelectField,
  Slider, Stepper, TabItem, TabGroup, Tag, TextArea, Toggle,
} from '@zen/components';
import styles from './components-overview-page.module.css';

/** Each card: id matches the route slug, label for display, preview is a mini render */
const components: { id: string; label: string; preview: React.ReactNode }[] = [
  { id: 'accordion', label: 'Accordion', preview: (
    <AccordionGroup size="m"><Accordion title="Section A" /><Accordion title="Section B" defaultExpanded /></AccordionGroup>
  )},
  { id: 'alert-banner', label: 'Alert Banner', preview: (
    <AlertBanner theme="info" style={{ width: '100%' }}>Info alert</AlertBanner>
  )},
  { id: 'avatar', label: 'Avatar', preview: (
    <AvatarGroup><Avatar>AK</Avatar><Avatar>OP</Avatar><Avatar>ZN</Avatar></AvatarGroup>
  )},
  { id: 'badge', label: 'Badge', preview: (
    <div style={{ display: 'flex', gap: 6 }}>
      <Badge label="New" color="accent" variant="solid" size="s" dot={false} />
      <Badge label="99+" color="negative" variant="subtle" size="s" dot={false} />
      <Badge label="Info" color="info" variant="ghost" size="s" dot={false} />
    </div>
  )},
  { id: 'bottom-sheet', label: 'Bottom Sheet', preview: (
    <div style={{ width: '100%', height: 80, borderRadius: '12px 12px 0 0', background: 'var(--color-bg-surface-raised)', boxShadow: 'var(--shadow-action-level-2)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 8 }}>
      <div style={{ width: 32, height: 4, borderRadius: 2, background: 'var(--color-border-neutral-default)', marginBottom: 8 }} />
      <div style={{ width: '60%', height: 8, borderRadius: 4, background: 'var(--color-bg-fill-neutral-subtle-default)' }} />
    </div>
  )},
  { id: 'breadcrumb', label: 'Breadcrumb', preview: (
    <Breadcrumb><BreadcrumbItem>Home</BreadcrumbItem><BreadcrumbItem>Docs</BreadcrumbItem><BreadcrumbItem>Button</BreadcrumbItem></Breadcrumb>
  )},
  { id: 'button', label: 'Button', preview: (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button variant="primary" size="s">Primary</Button>
      <Button variant="secondary" size="s">Secondary</Button>
    </div>
  )},
  { id: 'checkbox', label: 'Checkbox', preview: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Checkbox label="Option A" defaultChecked /><Checkbox label="Option B" />
    </div>
  )},
  { id: 'calendar', label: 'Calendar', preview: (
    <Calendar />
  )},
  { id: 'chip', label: 'Chip', preview: (
    <div style={{ display: 'flex', gap: 6 }}>
      <Chip label="Tag 1" level="primary" /><Chip label="Tag 2" level="secondary" />
    </div>
  )},
  { id: 'dialog', label: 'Dialog', preview: (
    <Dialog theme="info" title="Confirm?" description="Are you sure?" style={{ width: '100%' }} />
  )},
  { id: 'list-item', label: 'List Item', preview: (
    <div style={{ width: '100%' }}><ListItem title="List item" caption="Description" /></div>
  )},
  { id: 'modal', label: 'Modal', preview: (
    <div style={{ width: '80%', background: 'var(--color-bg-surface-raised)', borderRadius: 12, boxShadow: 'var(--shadow-action-level-2)', padding: '12px 16px' }}>
      <div style={{ fontWeight: 600, fontSize: 13 }}>Modal Title</div>
      <div style={{ fontSize: 11, color: 'var(--color-content-neutral-secondary)', marginTop: 4 }}>Content area</div>
    </div>
  )},
  { id: 'pagination', label: 'Pagination', preview: (
    <Pagination totalPages={5} page={2} onChange={() => {}} />
  )},
  { id: 'popover', label: 'Popover', preview: (
    <div style={{ width: '80%', background: 'var(--color-bg-surface-raised)', borderRadius: 8, boxShadow: 'var(--shadow-action-level-2)', padding: 4, fontSize: 12 }}>
      <div style={{ padding: '6px 10px', borderRadius: 6 }}>Option 1</div>
      <div style={{ padding: '6px 10px', borderRadius: 6, background: 'var(--color-bg-fill-accent-subtle-default)' }}>Option 2</div>
      <div style={{ padding: '6px 10px', borderRadius: 6 }}>Option 3</div>
    </div>
  )},
  { id: 'progress', label: 'Progress', preview: (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <ProgressBar value={65} style={{ width: 100 }} />
      <ProgressCircle value={75} size="m" />
    </div>
  )},
  { id: 'divider', label: 'Divider', preview: (
    <div style={{ width: '80%' }}><Divider /></div>
  )},
  { id: 'inline-message', label: 'Inline Message', preview: (
    <InlineMessage theme="info" title="Heads up" style={{ width: '100%' }} />
  )},
  { id: 'metric-card', label: 'Metric Card', preview: (
    <MetricCard metricTitle="Revenue" value="$12.4k" />
  )},
  { id: 'input', label: 'Input Field', preview: (
    <InputField placeholder="Enter text..." size="s" style={{ width: '100%' }} />
  )},
  { id: 'input-heading', label: 'Input Heading', preview: (
    <InputHeading placeholder="Heading text" size="h2" style={{ width: '100%' }} />
  )},
  { id: 'number', label: 'Number Field', preview: (
    <NumberField placeholder="0" size="s" style={{ width: '100%' }} />
  )},
  { id: 'radio', label: 'Radio Button', preview: (
    <RadioGroup name="preview-radio" defaultValue="a">
      <Radio value="a" label="Option A" /><Radio value="b" label="Option B" />
    </RadioGroup>
  )},
  { id: 'rating', label: 'Rating', preview: (
    <RatingStar value={3} />
  )},
  { id: 'search', label: 'Search', preview: (
    <Search placeholder="Search..." size="small" style={{ width: '100%' }} />
  )},
  { id: 'select', label: 'Select Field', preview: (
    <SelectField placeholder="Choose..." size="s" options={[{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B' }]} style={{ width: '100%' }} />
  )},
  { id: 'segmented', label: 'Segmented Control', preview: (
    <Segmented items={[{ value: 'a', label: 'Tab 1' }, { value: 'b', label: 'Tab 2' }]} value="a" onChange={() => {}} />
  )},
  { id: 'sidebar', label: 'Sidebar', preview: (
    <div style={{ width: 80, height: 80, background: 'var(--color-bg-surface-raised)', borderRadius: 8, padding: 8, fontSize: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ height: 6, width: '80%', borderRadius: 3, background: 'var(--color-bg-fill-accent-solid-default)' }} />
      <div style={{ height: 6, width: '60%', borderRadius: 3, background: 'var(--color-bg-fill-neutral-subtle-default)' }} />
      <div style={{ height: 6, width: '70%', borderRadius: 3, background: 'var(--color-bg-fill-neutral-subtle-default)' }} />
    </div>
  )},
  { id: 'side-panel', label: 'Side Panel', preview: (
    <div style={{ width: '60%', height: 80, background: 'var(--color-bg-surface-raised)', borderRadius: '8px 0 0 8px', boxShadow: 'var(--shadow-action-level-2)', padding: 10, alignSelf: 'flex-end' }}>
      <div style={{ fontWeight: 600, fontSize: 11 }}>Panel</div>
    </div>
  )},
  { id: 'slider', label: 'Slider', preview: (
    <Slider defaultValue={40} style={{ width: '80%' }} />
  )},
  { id: 'stepper', label: 'Stepper', preview: (
    <Stepper steps={[{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }]} currentStep={1} />
  )},
  { id: 'tab', label: 'Tab', preview: (
    <TabGroup><TabItem label="Tab 1" selected /><TabItem label="Tab 2" /><TabItem label="Tab 3" /></TabGroup>
  )},
  { id: 'table', label: 'Table', preview: (
    <div style={{ width: '100%', fontSize: 11, borderCollapse: 'collapse' }}>
      <div style={{ display: 'flex', borderBottom: '1px solid var(--color-border-neutral-subtle)', padding: '4px 8px', fontWeight: 600 }}>
        <span style={{ flex: 1 }}>Name</span><span style={{ flex: 1 }}>Status</span>
      </div>
      <div style={{ display: 'flex', padding: '4px 8px' }}>
        <span style={{ flex: 1 }}>Item A</span><span style={{ flex: 1 }}>Active</span>
      </div>
    </div>
  )},
  { id: 'textarea', label: 'Text Area', preview: (
    <TextArea placeholder="Enter text..." size="s" style={{ width: '100%' }} />
  )},
  { id: 'tag', label: 'Tag', preview: (
    <div style={{ display: 'flex', gap: 6 }}>
      <Tag label="Design" theme="text-only" /><Tag label="Dev" theme="text-only" />
    </div>
  )},
  { id: 'toggle', label: 'Toggle', preview: (
    <div style={{ display: 'flex', gap: 12 }}><Toggle defaultChecked /><Toggle /></div>
  )},
  { id: 'top-nav-mobile', label: 'Top Navigation', preview: (
    <div style={{ width: '100%', height: 36, background: 'var(--color-bg-surface-raised)', borderRadius: 8, display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: 12, fontWeight: 600 }}>
      <span style={{ opacity: 0.5 }}>&larr;</span><span style={{ flex: 1, textAlign: 'center' }}>Title</span><span style={{ opacity: 0.5 }}>&hellip;</span>
    </div>
  )},
  { id: 'bottom-nav-mobile', label: 'Bottom Navigation', preview: (
    <div style={{ width: '100%', height: 44, background: 'var(--color-bg-surface-raised)', borderRadius: '0 0 8px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', fontSize: 9, color: 'var(--color-content-neutral-secondary)' }}>
      <div style={{ textAlign: 'center' }}><div style={{ width: 16, height: 16, borderRadius: 4, background: 'var(--color-bg-fill-accent-solid-default)', margin: '0 auto 2px' }} />Home</div>
      <div style={{ textAlign: 'center' }}><div style={{ width: 16, height: 16, borderRadius: 4, background: 'var(--color-bg-fill-neutral-subtle-default)', margin: '0 auto 2px' }} />Search</div>
      <div style={{ textAlign: 'center' }}><div style={{ width: 16, height: 16, borderRadius: 4, background: 'var(--color-bg-fill-neutral-subtle-default)', margin: '0 auto 2px' }} />Profile</div>
    </div>
  )},
  { id: 'uploader', label: 'File Uploader', preview: (
    <div style={{ width: '80%', height: 60, border: '2px dashed var(--color-border-neutral-default)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: 'var(--color-content-neutral-secondary)' }}>
      Drop files here
    </div>
  )},
];

interface ComponentsOverviewPageProps {
  onNavigate: (id: string) => void;
}

export function ComponentsOverviewPage({ onNavigate }: ComponentsOverviewPageProps) {
  return (
    <>
      {/* ── Header ── */}
      <div className="docs-page-header">
        <div className="docs-page-header-top">
          <div className="docs-page-header-breadcrumb">
            <span className="text-subheading">
              <span style={{ color: 'var(--color-content-neutral-primary)' }}>UIAI Design System </span>
              <span style={{ color: 'var(--color-content-neutral-tertiary)' }}>by VNG Game Publishing Platform</span>
            </span>
          </div>
        </div>
        <div className="docs-page-header-divider" />
        <h1 className="docs-page-title text-display-1">Components</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            {components.length} components in the Zen Design System. Click any card to view its documentation.
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="docs-page-body">
        <div className={styles.grid}>
          {components.map((comp) => (
            <div key={comp.id} className={styles.card} onClick={() => onNavigate(comp.id)}>
              <div className={styles.preview}>{comp.preview}</div>
              <div className={styles.label}>{comp.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
