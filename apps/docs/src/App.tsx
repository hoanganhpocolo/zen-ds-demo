import { useState } from 'react';
import { Button, Sidebar, SidebarItem } from '@zen/components';
import { Settings01 } from '@zen/icons/line';
import { ButtonPage } from './ButtonPage';
import { AlertBannerPage } from './AlertBannerPage';
import { AvatarPage } from './AvatarPage';
import { InputFieldPage } from './InputFieldPage';
import { TextAreaPage } from './TextAreaPage';
import { NumberFieldPage } from './NumberFieldPage';
import { InputHeadingPage } from './InputHeadingPage';
import { AccordionPage } from './AccordionPage';
import { BottomSheetPage } from './BottomSheetPage';
import { BreadcrumbPage } from './BreadcrumbPage';
import { CheckboxPage } from './CheckboxPage';
import { ChipPage } from './ChipPage';
import { CalendarPage } from './CalendarPage';
import { DialogPage } from './DialogPage';
import { DividerPage } from './DividerPage';
import { InlineMessagePage } from './InlineMessagePage';
import { MetricCardPage } from './MetricCardPage';
import { ModalPage } from './ModalPage';
import { ListItemPage } from './ListItemPage';
import { PaginationPage } from './PaginationPage';
import { PopoverPage } from './PopoverPage';
import { BadgePage } from './BadgePage';
import { ProgressPage } from './ProgressPage';
import { RadioPage } from './RadioPage';
import { RatingPage } from './RatingPage';
import { SearchPage } from './SearchPage';
import { SegmentedPage } from './SegmentedPage';
import { SidebarPage } from './SidebarPage';
import { SidePanelPage } from './SidePanelPage';
import { SliderPage } from './SliderPage';
import { StepperPage } from './StepperPage';
import './docs.css';

type Page = 'accordion' | 'alert-banner' | 'avatar' | 'badge' | 'bottom-sheet' | 'breadcrumb' | 'button' | 'calendar' | 'checkbox' | 'chip' | 'dialog' | 'divider' | 'inline-message' | 'input' | 'input-heading' | 'list-item' | 'metric-card' | 'modal' | 'pagination' | 'popover' | 'progress' | 'radio' | 'rating' | 'search' | 'segmented' | 'sidebar' | 'side-panel' | 'slider' | 'stepper' | 'textarea' | 'number';

const sidebarSections = [
  {
    title: 'Getting Started',
    items: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'installation', label: 'Installation' },
      { id: 'theming', label: 'Theming' },
      { id: 'tokens', label: 'Tokens' },
      { id: 'typography', label: 'Typography' },
      { id: 'icons', label: 'Icons' },
    ],
  },
  {
    title: 'Components',
    items: [
      { id: 'accordion', label: 'Accordion' },
      { id: 'alert-banner', label: 'Alert Banner' },
      { id: 'avatar', label: 'Avatar' },
      { id: 'badge', label: 'Badge' },
      { id: 'bottom-sheet', label: 'Bottom Sheet' },
      { id: 'breadcrumb', label: 'Breadcrumb' },
      { id: 'button', label: 'Button' },
      { id: 'checkbox', label: 'Checkbox' },
      { id: 'calendar', label: 'Calendar' },
      { id: 'chip', label: 'Chip' },
      { id: 'dialog', label: 'Dialog' },
      { id: 'list-item', label: 'List Item' },
      { id: 'modal', label: 'Modal' },
      { id: 'pagination', label: 'Pagination' },
      { id: 'popover', label: 'Popover' },
      { id: 'progress', label: 'Progress' },
      { id: 'divider', label: 'Divider' },
      { id: 'inline-message', label: 'Inline Message' },
      { id: 'metric-card', label: 'Metric Card' },
      { id: 'input', label: 'Input Field' },
      { id: 'input-heading', label: 'Input Heading' },
      { id: 'number', label: 'Number Field' },
      { id: 'radio', label: 'Radio Button' },
      { id: 'rating', label: 'Rating' },
      { id: 'search', label: 'Search' },
      { id: 'segmented', label: 'Segmented Control' },
      { id: 'sidebar', label: 'Sidebar' },
      { id: 'side-panel', label: 'Side Panel' },
      { id: 'slider', label: 'Slider (in progress)' },
      { id: 'stepper', label: 'Stepper' },
      { id: 'select', label: 'Select' },
      { id: 'tab', label: 'Tab' },
      { id: 'textarea', label: 'Text Area' },
      { id: 'tag', label: 'Tag' },
      { id: 'toggle', label: 'Toggle' },
    ],
  },
];

export function App() {
  const [page, setPage] = useState<Page>('button');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [radius, setRadius] = useState<'rounded' | 'smooth' | 'standard'>('rounded');
  const [baseFont, setBaseFont] = useState<'16' | '14'>('16');
  const [componentTheme, setComponentTheme] = useState<'brand' | 'neutral'>('brand');

  const toggleBaseFont = () => {
    const next = baseFont === '16' ? '14' : '16';
    setBaseFont(next);
    document.documentElement.setAttribute('data-base-font', next);
  };

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const cycleRadius = () => {
    const order: Array<'rounded' | 'smooth' | 'standard'> = ['rounded', 'smooth', 'standard'];
    const next = order[(order.indexOf(radius) + 1) % 3];
    setRadius(next);
    document.documentElement.setAttribute('data-radius', next);
  };

  const toggleComponentTheme = () => {
    const next = componentTheme === 'brand' ? 'neutral' : 'brand';
    setComponentTheme(next);
    document.documentElement.setAttribute('data-component-theme', next);
  };

  return (
    <div className="docs-layout">
      {/* ── Top Navigation ── */}
      <header className="docs-topnav">
        <a className="docs-topnav-logo" href="/">
          <img src="/zen-mark.svg" alt="Zen" />
        </a>

        <nav className="docs-topnav-links">
          <button className="docs-topnav-link text-body-small" data-active>
            Components
          </button>
        </nav>

        <div className="docs-topnav-spacer" />

        <div className="docs-topnav-actions">
          <Button variant="flat-primary" size="xs" onClick={toggleTheme}>
            {theme === 'light' ? 'Light' : 'Dark'}
          </Button>
          <Button variant="flat-primary" size="xs" onClick={toggleBaseFont}>
            {baseFont}px
          </Button>
          <Button variant="flat-primary" size="xs" onClick={cycleRadius}>
            {radius}
          </Button>
          <Button variant="flat-primary" size="xs" onClick={toggleComponentTheme}>
            {componentTheme}
          </Button>
          <div className="docs-topnav-divider" />
          <Button variant="flat-primary" size="xs" icon={<Settings01 size={16} />} />
        </div>
      </header>

      {/* ── Content ── */}
      <div className="docs-content">
        {/* ── Sidebar ── */}
        <Sidebar
          background="alternate"
          style={{ position: 'sticky', top: '56px', height: 'calc(100vh - 56px)' }}
          header={null}
        >
          {sidebarSections.map((section, si) => (
            <div key={section.title} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-3xsmall)' }}>
              {si > 0 && <div style={{ height: 'var(--gap-small)' }} />}
              <div className="docs-sidebar-section-label text-capsline-s">{section.title}</div>
              {section.items.map((item) => (
                <SidebarItem
                  key={item.id}
                  label={item.label}
                  selected={page === item.id}
                  onClick={() => setPage(item.id as Page)}
                />
              ))}
            </div>
          ))}
        </Sidebar>

        {/* ── Main ── */}
        <main className="docs-main">
          {page === 'accordion' && <AccordionPage />}
          {page === 'alert-banner' && <AlertBannerPage />}
          {page === 'avatar' && <AvatarPage />}
          {page === 'badge' && <BadgePage />}
          {page === 'bottom-sheet' && <BottomSheetPage />}
          {page === 'breadcrumb' && <BreadcrumbPage />}
          {page === 'button' && <ButtonPage />}
          {page === 'calendar' && <CalendarPage />}
          {page === 'checkbox' && <CheckboxPage />}
          {page === 'chip' && <ChipPage />}
          {page === 'dialog' && <DialogPage />}
          {page === 'divider' && <DividerPage />}
          {page === 'inline-message' && <InlineMessagePage />}
          {page === 'list-item' && <ListItemPage />}
          {page === 'metric-card' && <MetricCardPage />}
          {page === 'modal' && <ModalPage />}
          {page === 'pagination' && <PaginationPage />}
          {page === 'popover' && <PopoverPage />}
          {page === 'progress' && <ProgressPage />}
          {page === 'radio' && <RadioPage />}
          {page === 'rating' && <RatingPage />}
          {page === 'search' && <SearchPage />}
          {page === 'segmented' && <SegmentedPage />}
          {page === 'sidebar' && <SidebarPage />}
          {page === 'side-panel' && <SidePanelPage />}
          {page === 'slider' && <SliderPage />}
          {page === 'stepper' && <StepperPage />}
          {page === 'input' && <InputFieldPage />}
          {page === 'input-heading' && <InputHeadingPage />}
          {page === 'textarea' && <TextAreaPage />}
          {page === 'number' && <NumberFieldPage />}
        </main>
      </div>
    </div>
  );
}
