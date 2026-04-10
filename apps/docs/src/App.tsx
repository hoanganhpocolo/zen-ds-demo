import { useState } from 'react';
import { Button, Sidebar, SidebarItem, Badge } from '@zen/components';
import { Settings01, Palette } from '@zen/icons/line';
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
import { SelectFieldPage } from './SelectFieldPage';
import { SegmentedPage } from './SegmentedPage';
import { SidebarPage } from './SidebarPage';
import { SidePanelPage } from './SidePanelPage';
import { SliderPage } from './SliderPage';
import { TopNavigationMobilePage } from './TopNavigationMobilePage';
import { BottomNavigationMobilePage } from './BottomNavigationMobilePage';
import { StepperPage } from './StepperPage';
import { TabPage } from './TabPage';
import { TagPage } from './TagPage';
import { TablePage } from './TablePage';
import { TogglePage } from './TogglePage';
import { UploaderPage } from './UploaderPage';
import { TokenPage } from './TokenPage';
import { ThemePicker, DEFAULT_HUE, applyBrandHue, type Hue } from './ThemePicker';
import { OnThisPage } from './OnThisPage';
import { DemoPage } from './DemoPage';
import { TestPage } from './TestPage';
import './docs.css';

type Page = 'tokens' | 'accordion' | 'alert-banner' | 'avatar' | 'badge' | 'bottom-sheet' | 'breadcrumb' | 'button' | 'calendar' | 'checkbox' | 'chip' | 'dialog' | 'divider' | 'inline-message' | 'input' | 'input-heading' | 'list-item' | 'metric-card' | 'modal' | 'pagination' | 'popover' | 'progress' | 'radio' | 'rating' | 'search' | 'select' | 'segmented' | 'sidebar' | 'side-panel' | 'slider' | 'stepper' | 'tab' | 'table' | 'tag' | 'textarea' | 'number' | 'toggle' | 'uploader' | 'top-nav-mobile' | 'bottom-nav-mobile';

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
      { id: 'select', label: 'Select Field' },
      { id: 'segmented', label: 'Segmented Control' },
      { id: 'sidebar', label: 'Sidebar' },
      { id: 'side-panel', label: 'Side Panel' },
      { id: 'slider', label: 'Slider (in progress)' },
      { id: 'stepper', label: 'Stepper' },
      { id: 'tab', label: 'Tab' },
      { id: 'table', label: 'Table' },
      { id: 'textarea', label: 'Text Area' },
      { id: 'tag', label: 'Tag' },
      { id: 'toggle', label: 'Toggle' },
      { id: 'top-nav-mobile', label: 'Top Navigation (Mobile)' },
      { id: 'bottom-nav-mobile', label: 'Bottom Navigation (Mobile)' },
      { id: 'uploader', label: 'File Uploader' },
    ],
  },
];

export function App() {
  const [section, setSection] = useState<'components' | 'demo' | 'test'>('components');
  const [page, setPage] = useState<Page>('button');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [radius, setRadius] = useState<'rounded' | 'smooth' | 'standard' | 'luxury'>('rounded');
  const [baseFont, setBaseFont] = useState<'16' | '14'>('16');
  const [componentTheme, setComponentTheme] = useState<'brand' | 'neutral'>('brand');
  const [brandHue, setBrandHue] = useState<Hue>(DEFAULT_HUE);
  const [showThemePicker, setShowThemePicker] = useState(false);

  const toggleBaseFont = () => {
    const next = baseFont === '16' ? '14' : '16';
    setBaseFont(next);
    document.documentElement.setAttribute('data-base-font', next);
  };

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    if (brandHue !== DEFAULT_HUE) applyBrandHue(brandHue);
  };

  const cycleRadius = () => {
    const order: Array<'rounded' | 'smooth' | 'standard' | 'luxury'> = ['rounded', 'smooth', 'standard', 'luxury'];
    const next = order[(order.indexOf(radius) + 1) % 4];
    setRadius(next);
    document.documentElement.setAttribute('data-radius', next);
  };

  const toggleComponentTheme = () => {
    const next = componentTheme === 'brand' ? 'neutral' : 'brand';
    setComponentTheme(next);
    document.documentElement.setAttribute('data-component-theme', next);
  };

  return (
    <div className="docs-layout" style={{ position: 'relative' }}>
      {/* ── Top Navigation ── */}
      <header className="docs-topnav">
        <a className="docs-topnav-logo" href="/">
          <img src="/zen-mark.svg" alt="Zen" />
          <span style={{ fontFamily: 'var(--font-family-display)', fontWeight: 'var(--font-weight-primary)', fontSize: '22px', letterSpacing: '-0.5px', lineHeight: 1 }}>Zen</span>
          <Badge label="Kaiz" color="neutral" variant="subtle" size="s" dot={false} />
        </a>

        <nav className="docs-topnav-links">
          <button
            className="docs-topnav-link text-body-small"
            data-active={section === 'components'}
            onClick={() => setSection('components')}
          >
            Components
          </button>
          <button
            className="docs-topnav-link text-body-small"
            data-active={section === 'demo'}
            onClick={() => setSection('demo')}
          >
            Demo
          </button>
          <button
            className="docs-topnav-link text-body-small"
            data-active={section === 'test'}
            onClick={() => setSection('test')}
          >
            Test
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
          <Button
            variant={showThemePicker ? 'secondary' : 'flat-primary'}
            size="xs"
            icon={<Palette size={16} />}
            onClick={() => setShowThemePicker(v => !v)}
          />
          <Button variant="flat-primary" size="xs" icon={<Settings01 size={16} />} />
        </div>
      </header>

      {showThemePicker && (
        <ThemePicker
          hue={brandHue}
          onChange={setBrandHue}
          onClose={() => setShowThemePicker(false)}
        />
      )}

      {/* ── Content ── */}
      {section === 'demo' && <DemoPage />}
      {section === 'test' && <TestPage />}
      <div className="docs-content" style={{ display: section === 'components' ? undefined : 'none' }}>
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
          {page === 'tokens' && <TokenPage />}
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
          {page === 'select' && <SelectFieldPage />}
          {page === 'segmented' && <SegmentedPage />}
          {page === 'sidebar' && <SidebarPage />}
          {page === 'side-panel' && <SidePanelPage />}
          {page === 'slider' && <SliderPage />}
          {page === 'stepper' && <StepperPage />}
          {page === 'tab' && <TabPage />}
          {page === 'table' && <TablePage />}
          {page === 'tag' && <TagPage />}
          {page === 'input' && <InputFieldPage />}
          {page === 'input-heading' && <InputHeadingPage />}
          {page === 'textarea' && <TextAreaPage />}
          {page === 'number' && <NumberFieldPage />}
          {page === 'toggle' && <TogglePage />}
          {page === 'top-nav-mobile' && <TopNavigationMobilePage />}
          {page === 'bottom-nav-mobile' && <BottomNavigationMobilePage />}
          {page === 'uploader' && <UploaderPage />}
        </main>

        {/* ── On This Page ── */}
        <OnThisPage page={page} />
      </div>
    </div>
  );
}
