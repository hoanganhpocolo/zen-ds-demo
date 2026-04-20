import { Avatar, Button, Search, Popover, PopoverItem, Segmented, MetricCard } from '@zen/components';
import { Bell01, ChevronDown, Sun, Moon01, Menu01, DotsHorizontal } from '@zen/icons/line';
import { useDarkMode } from '../useDarkMode';
import { useState, useRef, useEffect } from 'react';
import * as echarts from 'echarts';
// import './HRDashboardPage.css';

/* ── Vietnam Flag Icon ── */
function VietnamFlag({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="10" fill="#DA251D" />
      <path
        d="M10 4.5L10.9 6.75H13.2L11.15 8.15L11.9 10.4L10 9.05L8.1 10.4L8.85 8.15L6.8 6.75H9.1L10 4.5Z"
        fill="#FFFF00"
      />
    </svg>
  );
}

/* ── Language Selector ── */
interface LanguageOption {
  code: string;
  label: string;
  flag: React.ReactNode;
}

const languages: LanguageOption[] = [
  { code: 'vi', label: 'Tiếng Việt', flag: <VietnamFlag size={20} /> },
  { code: 'en', label: 'English', flag: <VietnamFlag size={20} /> },
];

function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('vi');
  const anchorRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === selected) || languages[0];

  return (
    <div ref={anchorRef} className="centralized-header-lang" onClick={() => setOpen(!open)}>
      {currentLang.flag}
      <span className="centralized-header-lang-text">{currentLang.code.toUpperCase()}</span>
      <ChevronDown size={16} />
      <Popover
        open={open}
        anchorEl={anchorRef.current}
        onClose={() => setOpen(false)}
      >
        {languages.map((lang) => (
          <PopoverItem
            key={lang.code}
            leading={lang.flag}
            label={lang.label}
            selected={lang.code === selected}
            onClick={() => {
              setSelected(lang.code);
              setOpen(false);
            }}
          />
        ))}
      </Popover>
    </div>
  );
}

/* ── Top Bar ── */
function getGreeting(): { text: string; icon: string } {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return { text: 'Good morning', icon: '/Day.png' };
  if (hour >= 12 && hour < 17) return { text: 'Good afternoon', icon: '/Day.png' };
  if (hour >= 17 && hour < 21) return { text: 'Good evening', icon: '/Night.png' };
  return { text: 'Good night', icon: '/Night.png' };
}

function TopBar({ onMenuClick }: { onMenuClick?: () => void }) {
  const { dark, toggle } = useDarkMode();
  const greeting = getGreeting();

  return (
    <header className="centralized-header">
      <div className="centralized-header-mobile-left">
        <Button variant="flat-primary" size="m" icon={<Menu01 size={20} />} onClick={onMenuClick} />
      </div>

      <div className="centralized-header-greeting">
        <img src={greeting.icon} alt="" className="centralized-header-greeting-img" />
        <h2 className="text-h2">{greeting.text}! Luna,</h2>
      </div>

      <div className="centralized-header-right">
        <div className="centralized-header-search">
          <Search size="default" placeholder="Search" />
        </div>

        <button className="centralized-header-action centralized-header-action--blue" type="button">
          <img src="/gigi-logo.png" alt="Gigi" style={{ width: 20, height: 20 }} />
        </button>

        <button className="centralized-header-action" type="button" onClick={toggle}>
          {dark ? <Sun size={20} /> : <Moon01 size={20} />}
        </button>

        <button className="centralized-header-action centralized-header-action--badge" type="button">
          <Bell01 size={20} />
          <span className="centralized-header-badge">8</span>
        </button>

        <LanguageSelector />

        <Avatar size="m" color="blue">N</Avatar>
      </div>
    </header>
  );
}

interface MetricData {
  title: string;
  value: string;
  trendDirection: 'positive' | 'negative';
  trendLabel: string;
}

function MetricsGrid() {
  const metrics: MetricData[] = [
    { title: 'Total Employees', value: '1,245', trendDirection: 'positive', trendLabel: '+24% vs. last year' },
    { title: 'Open Positions', value: '18', trendDirection: 'negative', trendLabel: '-24% vs. last year' },
    { title: 'New Hires', value: '10', trendDirection: 'positive', trendLabel: '+24% vs. last year' },
    { title: 'Attrition Rate', value: '3.2%', trendDirection: 'positive', trendLabel: '+24% vs. last year' },
    { title: 'Avg. Time to Hires', value: '26 days', trendDirection: 'positive', trendLabel: '+24% vs. last year' },
    { title: 'Engagement Score', value: '67', trendDirection: 'positive', trendLabel: '+24% vs. last year' },
  ];

  return (
    <div className="hr-metrics">
      {metrics.map((metric) => (
        <div key={metric.title} className="hr-metric-card-wrapper">
          <MetricCard
            level="sub"
            theme="default"
            metricTitle={metric.title}
            value={metric.value}
            trend={{ label: metric.trendLabel, direction: metric.trendDirection }}
            showAction={false}
          />
        </div>
      ))}
    </div>
  );
}

/* ── Charts Data ── */
const employmentData = [
  { name: 'Contract', value: 150, percentage: 12.0, color: '#44a948' },
  { name: 'Intern', value: 75, percentage: 6.0, color: '#141414' },
  { name: 'Full Time', value: 1000, percentage: 80.3, color: '#f05a22' },
  { name: 'Part Time', value: 20, percentage: 1.6, color: '#0087ff' },
];

const recruitmentData = [
  { day: '1 Feb', applications: 30, interviews: 25, offers: 8 },
  { day: '2 Feb', applications: 45, interviews: 12, offers: 5 },
  { day: '3 Feb', applications: 48, interviews: 26, offers: 12 },
  { day: '4 Feb', applications: 12, interviews: 16, offers: 3 },
  { day: '5 Feb', applications: 35, interviews: 42, offers: 10 },
  { day: '6 Feb', applications: 35, interviews: 42, offers: 8 },
  { day: '7 Feb', applications: 35, interviews: 42, offers: 6 },
];

const seniorityData = [
  { name: 'Middle', value: 200, percentage: 13, color: '#ffca2f' },
  { name: 'AM', value: 45, percentage: 6, color: '#da1e28' },
  { name: 'Senior', value: 750, percentage: 60.3, color: '#f88a0d' },
  { name: 'Manager', value: 50, percentage: 4, color: '#f05a22' },
];

const headcountData = [
  { month: '1 Feb', engineering: 380, sales: 220, marketing: 120, operations: 100 },
  { month: '2 Feb', engineering: 450, sales: 280, marketing: 160, operations: 140 },
  { month: '3 Feb', engineering: 520, sales: 350, marketing: 200, operations: 180 },
  { month: '4 Feb', engineering: 480, sales: 300, marketing: 170, operations: 150 },
  { month: '5 Feb', engineering: 550, sales: 380, marketing: 220, operations: 190 },
  { month: '6 Feb', engineering: 610, sales: 420, marketing: 260, operations: 220 },
  { month: '7 Feb', engineering: 580, sales: 390, marketing: 240, operations: 200 },
];

/* ── Chart Card Wrapper ── */
function ChartCard({ title, children, width = 'auto', height = 320, actionIcon }: { title: string; children: React.ReactNode; width?: string | number; height?: number; actionIcon?: React.ReactNode }) {
  return (
    <div className="hr-chart-card" style={{ width, height }}>
      <div className="hr-chart-header">
        <span className="hr-chart-title">{title}</span>
        {actionIcon && <div className="hr-chart-action">{actionIcon}</div>}
      </div>
      <div className="hr-chart-content">
        {children}
      </div>
    </div>
  );
}

/* ── Employment Type Distribution Horizontal Bar Chart (ECharts) ── */
function EmploymentTypeChart() {
  const [exportPopoverOpen, setExportPopoverOpen] = useState(false);
  const exportButtonRef = useRef<HTMLButtonElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);
  const { dark } = useDarkMode();

  const gridColor = dark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.06)';
  const labelColor = dark ? 'rgba(255, 255, 255, 0.62)' : 'rgba(0, 0, 0, 0.62)';
  const tooltipBg = dark ? 'rgba(30, 30, 30, 0.92)' : 'rgba(255, 255, 255, 0.86)';
  const tooltipBorder = dark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)';
  const tooltipTextSecondary = dark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.62)';
  const tooltipTextPrimary = dark ? 'rgba(255, 255, 255, 0.92)' : 'rgba(0, 0, 0, 0.88)';

  // Series colors - use brighter colors in dark mode for visibility
  const employmentColors = {
    Contract: dark ? '#86efac' : '#44a948',      // green
    Intern: dark ? '#ffffff' : '#141414',         // inverse
    'Full Time': dark ? '#fb923c' : '#f05a22',  // orange
    'Part Time': dark ? '#60a5fa' : '#0087ff',   // blue
  };

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current, null, { renderer: 'canvas' });
    chartInstance.current = chart;

    const chartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        backgroundColor: tooltipBg,
        borderColor: tooltipBorder,
        borderWidth: 1,
        borderRadius: 12,
        padding: [4, 8],
        boxShadow: '0px 12px 28px 0px rgba(0, 0, 0, 0.08)',
        backdropFilter: 'blur(60px)',
        textStyle: {
          fontFamily: 'var(--font-family-sans)',
          fontSize: 'var(--font-size-body-base)',
          fontWeight: 'var(--font-weight-tertiary)',
          color: tooltipTextSecondary,
        },
        formatter: (params: any) => {
          const data = params[0];
          return `<div style="padding: 4px 8px;">
                    <div style="display: flex; align-items: center; gap: 8px; padding: 4px 0;">
                      <span style="font-family: var(--font-family-sans); font-size: var(--font-size-body-small); font-weight: var(--font-weight-tertiary); color: var(--color-content-neutral-secondary); flex: 1;">Employees:</span>
                      <span style="font-family: var(--font-family-sans); font-size: var(--font-size-body-small); font-weight: var(--font-weight-secondary); color: var(--color-content-neutral-primary);">${data.value.toLocaleString()}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px; padding: 4px 0;">
                      <span style="font-family: var(--font-family-sans); font-size: var(--font-size-body-small); font-weight: var(--font-weight-tertiary); color: var(--color-content-neutral-secondary); flex: 1;">Share:</span>
                      <span style="font-family: var(--font-family-sans); font-size: var(--font-size-body-small); font-weight: var(--font-weight-secondary); color: var(--color-content-neutral-primary);">${data.data.percentage}%</span>
                    </div>
                  </div>`;
        },
      },
      legend: {
        show: false,
      },
      grid: {
        left: 16,
        right: 40,
        top: 8,
        bottom: 8,
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
          lineStyle: {
            color: gridColor,
            type: 'solid',
            width: 1,
          },
        },
        axisLabel: {
          show: true,
          fontFamily: 'var(--font-family-sans)',
          fontSize: 'var(--font-size-body-base)',
          fontWeight: 'var(--font-weight-tertiary)',
          color: 'var(--color-content-neutral-secondary)',
        },
      },
      yAxis: {
        type: 'category',
        data: employmentData.map(d => d.name),
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          show: true,
          fontFamily: 'var(--font-family-sans)',
          fontSize: 'var(--font-size-body-base)',
          fontWeight: 'var(--font-weight-tertiary)',
          color: 'var(--color-content-neutral-secondary)',
        },
      },
      series: [
        {
          name: 'Employees',
          type: 'bar',
          data: employmentData.map(d => ({
            value: d.value,
            percentage: d.percentage,
            itemStyle: {
              color: employmentColors[d.name as keyof typeof employmentColors],
              borderRadius: [4, 4, 4, 4],
            },
          })),
          barWidth: '50%',
          barCategoryGap: '30%',
          label: {
            show: true,
            position: 'right',
            formatter: '{c}',
            fontFamily: 'Inter, sans-serif',
            fontSize: 12,
            fontWeight: 400,
            color: labelColor,
          },
        },
      ],
    };

    chart.setOption(chartOption);
    chart.resize();

    const resizeObserver = new ResizeObserver(() => {
      chart.resize();
    });

    if (chartRef.current) {
      resizeObserver.observe(chartRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      chart.dispose();
    };
  }, [dark, gridColor, labelColor, tooltipBg, tooltipBorder, tooltipTextSecondary, tooltipTextPrimary, employmentColors]);

  return (
    <ChartCard
      title="Employment Type Distribution"
      width="100%"
      height={320}
      actionIcon={
        <Button
          variant="flat-primary"
          size="s"
          icon={<DotsHorizontal size={16} />}
          aria-label="More options"
          ref={exportButtonRef}
          onClick={() => setExportPopoverOpen(prev => !prev)}
        />
      }
    >
      <Popover
        open={exportPopoverOpen}
        anchorEl={exportButtonRef.current}
        onClose={() => setExportPopoverOpen(false)}
      >
        <PopoverItem label="Export image" noCheck onClick={() => setExportPopoverOpen(false)} />
        <PopoverItem label="Export data" noCheck onClick={() => setExportPopoverOpen(false)} />
        <PopoverItem label="Ask GiGi" noCheck onClick={() => setExportPopoverOpen(false)} />
      </Popover>
      <div className="hr-horizontal-bar-wrapper">
        <div ref={chartRef} style={{ height: 245, width: '100%' }} />
      </div>
    </ChartCard>
  );
}

/* ── Recruitment Pipeline Bar Chart (ECharts) ── */
function RecruitmentPipelineChart() {
  const [visibleBars, setVisibleBars] = useState({ applications: true, interviews: true, offers: true });
  const [exportPopoverOpen, setExportPopoverOpen] = useState(false);
  const [exportDataSubmenuOpen, setExportDataSubmenuOpen] = useState(false);
  const exportButtonRef = useRef<HTMLButtonElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);
  const { dark } = useDarkMode();

  const tooltipBg = dark ? 'rgba(30, 30, 30, 0.92)' : 'rgba(255, 255, 255, 0.86)';
  const tooltipBorder = dark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)';
  const gridColor = dark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.06)';
  const labelColor = dark ? 'rgba(255, 255, 255, 0.62)' : 'rgba(0, 0, 0, 0.62)';

  const barColors = {
    applications: '#db41a5',
    interviews: '#44a948',
    offers: '#0087ff',
  };

  const toggleBar = (barKey: 'applications' | 'interviews' | 'offers') => {
    setVisibleBars(prev => ({ ...prev, [barKey]: !prev[barKey] }));
  };

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current, null, { renderer: 'canvas' });
    chartInstance.current = chart;

    const chartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        backgroundColor: tooltipBg,
        borderColor: tooltipBorder,
        borderWidth: 1,
        borderRadius: 12,
        padding: [4, 8],
        boxShadow: '0px 12px 28px 0px rgba(0, 0, 0, 0.08)',
        backdropFilter: 'blur(60px)',
        textStyle: {
          fontFamily: 'var(--font-family-sans)',
          fontSize: 'var(--font-size-body-base)',
          fontWeight: 'var(--font-weight-tertiary)',
          color: 'var(--color-content-neutral-secondary)',
        },
        formatter: (params: any) => {
          const items = params.map((p: any) => {
            const colorKey = p.seriesIndex === 0 ? 'applications' : p.seriesIndex === 1 ? 'interviews' : 'offers';
            return `<div style="display: flex; align-items: center; gap: 8px; padding: 4px 0;">
                      <span style="width: 10px; height: 10px; border-radius: 2px; background: ${barColors[colorKey as keyof typeof barColors]}; flex-shrink: 0;"></span>
                      <span style="font-family: var(--font-family-sans); font-size: var(--font-size-body-small); font-weight: var(--font-weight-tertiary); color: var(--color-content-neutral-secondary); flex: 1; text-transform: capitalize;">${p.seriesName}:</span>
                      <span style="font-family: var(--font-family-sans); font-size: var(--font-size-body-small); font-weight: var(--font-weight-secondary); color: var(--color-content-neutral-primary);">${p.value}</span>
                    </div>`;
          }).join('');
          return `<div style="padding: 4px 8px;">${items}</div>`;
        },
      },
      legend: {
        show: false,
      },
      grid: {
        left: 0,
        right: 16,
        top: 8,
        bottom: 20,
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: recruitmentData.map(d => d.day),
        axisLine: false,
        axisTick: false,
        axisLabel: {
          fontFamily: 'var(--font-family-sans)',
          fontSize: 'var(--font-size-body-base)',
          fontWeight: 'var(--font-weight-tertiary)',
          color: 'var(--color-content-neutral-secondary)',
          margin: 12,
        },
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 60,
        axisLine: false,
        axisTick: false,
        splitLine: {
          show: true,
          lineStyle: {
            color: gridColor,
            type: 'dashed',
            width: 1,
          },
        },
        axisLabel: {
          fontFamily: 'var(--font-family-sans)',
          fontSize: 'var(--font-size-body-base)',
          fontWeight: 'var(--font-weight-tertiary)',
          color: 'var(--color-content-neutral-secondary)',
        },
      },
      series: [
        {
          name: 'Applications',
          type: 'bar',
          data: visibleBars.applications ? recruitmentData.map(d => d.applications) : [],
          itemStyle: {
            color: barColors.applications,
            borderRadius: [4, 4, 4, 4],
          },
          barWidth: '24%',
          barGap: 2,
          barCategoryGap: '20%',
          label: {
            show: true,
            position: 'top',
            fontFamily: 'var(--font-family-sans)',
            fontSize: 'var(--font-size-body-base)',
            fontWeight: 'var(--font-weight-tertiary)',
            lineHeight: 'var(--line-height-body-small)',
            letterSpacing: 'var(--letter-spacing-body-small)',
            color: 'var(--color-content-neutral-secondary)',
          },
        },
        {
          name: 'Interviews',
          type: 'bar',
          data: visibleBars.interviews ? recruitmentData.map(d => d.interviews) : [],
          itemStyle: {
            color: barColors.interviews,
            borderRadius: [4, 4, 4, 4],
          },
          barWidth: '24%',
          barGap: 2,
          barCategoryGap: '20%',
          label: {
            show: true,
            position: 'top',
            fontFamily: 'var(--font-family-sans)',
            fontSize: 'var(--font-size-body-base)',
            fontWeight: 'var(--font-weight-tertiary)',
            lineHeight: 'var(--line-height-body-small)',
            letterSpacing: 'var(--letter-spacing-body-small)',
            color: 'var(--color-content-neutral-secondary)',
          },
        },
        {
          name: 'Offers',
          type: 'bar',
          data: visibleBars.offers ? recruitmentData.map(d => d.offers) : [],
          itemStyle: {
            color: barColors.offers,
            borderRadius: [4, 4, 4, 4],
          },
          barWidth: '24%',
          barGap: 2,
          barCategoryGap: '20%',
          label: {
            show: true,
            position: 'top',
            fontFamily: 'var(--font-family-sans)',
            fontSize: 'var(--font-size-body-base)',
            fontWeight: 'var(--font-weight-tertiary)',
            lineHeight: 'var(--line-height-body-small)',
            letterSpacing: 'var(--letter-spacing-body-small)',
            color: 'var(--color-content-neutral-secondary)',
          },
        },
      ],
    };

    chart.setOption(chartOption);
    requestAnimationFrame(() => chart.resize());

    const resizeObserver = new ResizeObserver(() => {
      chart.resize();
    });

    if (chartRef.current) {
      resizeObserver.observe(chartRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      chart.dispose();
    };
  }, [dark, tooltipBg, tooltipBorder, gridColor, labelColor, barColors, visibleBars]);

  return (
    <ChartCard
      title="Recruitment Pipeline"
      width="100%"
      height={320}
      actionIcon={
        <Button
          ref={exportButtonRef}
          variant="flat-primary"
          size="s"
          icon={<DotsHorizontal size={16} />}
          aria-label="More options"
          onClick={() => setExportPopoverOpen(prev => !prev)}
        />
      }
    >
      <Popover
        open={exportPopoverOpen}
        anchorEl={exportButtonRef.current}
        onClose={() => {
          setExportPopoverOpen(false);
          setExportDataSubmenuOpen(false);
        }}
      >
        <PopoverItem
          label="Export image"
          noCheck
          onClick={() => setExportPopoverOpen(false)}
        />
        <PopoverItem
          label="Export data"
          noCheck
          onClick={() => setExportDataSubmenuOpen(true)}
        />
        <PopoverItem
          label="Ask GiGi"
          noCheck
          onClick={() => setExportPopoverOpen(false)}
        />
      </Popover>
      <div style={{ width: '100%' }}>
        <div ref={chartRef} style={{ width: '100%', height: 235 }} />
      </div>
      <div className="hr-bar-chart-legend">
        <div className="hr-bar-legend-row">
          <span
            className="hr-bar-legend-item"
            onClick={() => toggleBar('applications')}
            style={{ cursor: 'pointer', opacity: visibleBars.applications ? 1 : 0.4 }}
          >
            <span className="hr-bar-legend-color" style={{ background: barColors.applications }} />
            Applications received
          </span>
          <span
            className="hr-bar-legend-item"
            onClick={() => toggleBar('interviews')}
            style={{ cursor: 'pointer', opacity: visibleBars.interviews ? 1 : 0.4 }}
          >
            <span className="hr-bar-legend-color" style={{ background: barColors.interviews }} />
            Interviews
          </span>
          <span
            className="hr-bar-legend-item"
            onClick={() => toggleBar('offers')}
            style={{ cursor: 'pointer', opacity: visibleBars.offers ? 1 : 0.4 }}
          >
            <span className="hr-bar-legend-color" style={{ background: barColors.offers }} />
            Offers
          </span>
        </div>
      </div>
    </ChartCard>
  );
}

/* ── Seniority Level Pie Chart ── */
function SeniorityLevelChart() {
  const [exportPopoverOpen, setExportPopoverOpen] = useState(false);
  const [visibleSectors, setVisibleSectors] = useState({
    Middle: true,
    AM: true,
    Senior: true,
    Manager: true,
  });
  const exportButtonRef = useRef<HTMLButtonElement>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartInstanceRef = useRef<echarts.ECharts | null>(null);
  const { dark } = useDarkMode();

  const tooltipBg = dark ? 'rgba(30, 30, 30, 0.92)' : 'rgba(255, 255, 255, 0.86)';
  const tooltipBorder = dark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)';
  const tooltipTextSecondary = dark ? 'rgba(255, 255, 255, 0.62)' : 'rgba(0, 0, 0, 0.45)';
  const tooltipTextPrimary = dark ? 'rgba(255, 255, 255, 0.92)' : 'rgba(0, 0, 0, 0.88)';

  const toggleSector = (sectorName: keyof typeof visibleSectors) => {
    const newVisible = { ...visibleSectors, [sectorName]: !visibleSectors[sectorName] };
    setVisibleSectors(newVisible);

    const newTotal = seniorityData
      .filter(item => newVisible[item.name as keyof typeof newVisible])
      .reduce((sum, item) => sum + item.value, 0);

    if (chartInstanceRef.current) {
      chartInstanceRef.current.dispatchAction({ type: 'legendToggleSelect', name: sectorName });
      chartInstanceRef.current.setOption({
        graphic: [{
          type: 'group',
          left: 'center',
          top: 'center',
          children: [
            {
              type: 'text',
              style: {
                text: 'Total',
                textAlign: 'center',
                fill: dark ? 'rgba(255,255,255,0.62)' : 'rgba(0,0,0,0.45)',
                fontSize: 14,
                fontWeight: 500,
                fontFamily: 'var(--font-family-sans)',
              },
              top: 0,
            },
            {
              type: 'text',
              style: {
                text: newTotal.toLocaleString(),
                textAlign: 'center',
                fill: dark ? 'rgba(255,255,255,0.92)' : 'rgba(0,0,0,0.88)',
                fontSize: 24,
                fontWeight: 600,
                fontFamily: 'var(--font-family-sans)',
              },
              top: 18,
            },
          ],
        }],
      });
    }
  };

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = echarts.init(chartContainerRef.current, null, { renderer: 'svg' });
    chartInstanceRef.current = chart;

    const visibleTotal = seniorityData
      .filter(item => visibleSectors[item.name as keyof typeof visibleSectors])
      .reduce((sum, item) => sum + item.value, 0);

    const chartOption = {
      tooltip: {
        trigger: 'item',
        backgroundColor: tooltipBg,
        borderColor: tooltipBorder,
        borderWidth: 1,
        borderRadius: 12,
        padding: [4, 8],
        boxShadow: '0px 12px 28px 0px rgba(0, 0, 0, 0.08)',
        backdropFilter: 'blur(60px)',
        textStyle: {
          fontFamily: 'var(--font-family-sans)',
          fontSize: 'var(--font-size-body-base)',
          fontWeight: 'var(--font-weight-tertiary)',
          color: tooltipTextSecondary,
        },
        formatter: (params: any) => {
          const marker = `<span style="display: inline-block; width: 10px; height: 10px; background: ${params.color}; border-radius: 2px; margin-right: 4px;"></span>`;
          return `<div style="padding: 4px 0; display: flex; align-items: center; gap: 8px;">${marker}<span style="font-family: var(--font-family-sans); font-size: var(--font-size-body-small); font-weight: var(--font-weight-tertiary); color: var(--color-content-neutral-secondary); flex: 1;">${params.name}:</span><span style="font-family: var(--font-family-sans); font-size: var(--font-size-body-small); font-weight: var(--font-weight-secondary); color: var(--color-content-neutral-primary);">${params.value}</span></div>`;
        },
      },
      legend: {
        show: false,
        data: seniorityData.map(d => d.name),
        animation: true,
        animationDuration: 350,
        animationEasing: 'cubicOut',
      },
      graphic: [
        {
          type: 'group',
          left: 'center',
          top: 'center',
          children: [
            {
              type: 'text',
              style: {
                text: 'Total',
                textAlign: 'center',
                fill: dark ? 'rgba(255,255,255,0.62)' : 'rgba(0,0,0,0.45)',
                fontSize: 14,
                fontWeight: 500,
                fontFamily: 'var(--font-family-sans)',
              },
              top: 0,
            },
            {
              type: 'text',
              style: {
                text: visibleTotal.toLocaleString(),
                textAlign: 'center',
                fill: dark ? 'rgba(255,255,255,0.92)' : 'rgba(0,0,0,0.88)',
                fontSize: 24,
                fontWeight: 600,
                fontFamily: 'var(--font-family-sans)',
              },
              top: 18,
            },
          ],
        },
      ],
      series: [{
        type: 'pie',
        radius: ['65', '100'],
        center: ['50%', '50%'],
        padAngle: 4,
        itemStyle: { borderRadius: 6 },
        label: { show: false },
        data: seniorityData.map(item => ({
          name: item.name,
          value: item.value,
          itemStyle: { color: item.color },
        })),
        emphasis: { scale: true, scaleSize: 5 },
      }],
    };

    chart.setOption(chartOption);
    chart.resize();

    const resizeObserver = new ResizeObserver(() => {
      chart.resize();
    });

    if (chartContainerRef.current) {
      resizeObserver.observe(chartContainerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      chart.dispose();
    };
  }, [tooltipBg, tooltipBorder, tooltipTextSecondary, tooltipTextPrimary, dark]);

  return (
    <ChartCard
      title="Seniority Level"
      width="100%"
      height={320}
      actionIcon={
        <Button
          ref={exportButtonRef}
          variant="flat-primary"
          size="s"
          icon={<DotsHorizontal size={16} />}
          aria-label="More options"
          onClick={() => setExportPopoverOpen(prev => !prev)}
        />
      }
    >
      <Popover
        open={exportPopoverOpen}
        anchorEl={exportButtonRef.current}
        onClose={() => setExportPopoverOpen(false)}
      >
        <PopoverItem label="Export image" noCheck onClick={() => setExportPopoverOpen(false)} />
        <PopoverItem label="Export data" noCheck onClick={() => setExportPopoverOpen(false)} />
        <PopoverItem label="Ask GiGi" noCheck onClick={() => setExportPopoverOpen(false)} />
      </Popover>
      <div className="hr-doughnut-wrapper">
        <div className="hr-doughnut-chart-container" style={{ position: 'relative' }}>
          <div ref={chartContainerRef} style={{ width: '100%', height: 220 }} />
        </div>
        <div className="hr-doughnut-legend">
          {seniorityData.map((item) => (
            <div
              key={item.name}
              className="hr-doughnut-legend-item"
              onClick={() => toggleSector(item.name as keyof typeof visibleSectors)}
              style={{ cursor: 'pointer', opacity: visibleSectors[item.name as keyof typeof visibleSectors] ? 1 : 0.4 }}
            >
              <span className="hr-doughnut-legend-dot" style={{ background: item.color }} />
              <span className="hr-doughnut-legend-text">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </ChartCard>
  );
}

/* ── Headcount Trend Area Chart (ECharts) ── */
function HeadcountTrendChart() {
  const [exportPopoverOpen, setExportPopoverOpen] = useState(false);
  const [visibleSeries, setVisibleSeries] = useState({
    Engineering: true,
    Sales: true,
    Marketing: true,
    Operations: true,
  });
  const exportButtonRef = useRef<HTMLButtonElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);
  const { dark } = useDarkMode();

  const labelColor = dark ? 'rgba(255, 255, 255, 0.62)' : 'rgba(0, 0, 0, 0.45)';
  const gridColor = dark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.06)';
  const tooltipBg = dark ? 'rgba(30, 30, 30, 0.92)' : 'rgba(255, 255, 255, 0.86)';
  const tooltipBorder = dark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)';
  const tooltipTextSecondary = dark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.62)';
  const tooltipTextPrimary = dark ? 'rgba(255, 255, 255, 0.92)' : 'rgba(0, 0, 0, 0.88)';

  // Series colors - brighter variants for dark mode
  const headcountColors = {
    Engineering: dark ? '#fb923c' : '#f05a22',    // orange
    Sales: dark ? '#60a5fa' : '#0087ff',            // blue
    Marketing: dark ? '#a78bfa' : '#7c3aed',         // purple
    Operations: dark ? '#86efac' : '#22c55e',      // green
  };

  const toggleSeries = (seriesName: keyof typeof visibleSeries) => {
    const newVisible = { ...visibleSeries, [seriesName]: !visibleSeries[seriesName] };
    setVisibleSeries(newVisible);
    if (chartInstance.current) {
      chartInstance.current.dispatchAction({
        type: 'legendToggleSelect',
        name: seriesName,
      });
    }
  };

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current, null, { renderer: 'canvas' });
    chartInstance.current = chart;

    // Gradients for dark mode
    const engineeringGradientDark = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0.05, color: 'rgba(251, 146, 60, 0.6)' },
      { offset: 0.95, color: 'rgba(251, 146, 60, 0.1)' },
    ]);
    const salesGradientDark = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0.05, color: 'rgba(96, 165, 250, 0.6)' },
      { offset: 0.95, color: 'rgba(96, 165, 250, 0.1)' },
    ]);
    const marketingGradientDark = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0.05, color: 'rgba(167, 139, 250, 0.6)' },
      { offset: 0.95, color: 'rgba(167, 139, 250, 0.1)' },
    ]);
    const operationsGradientDark = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0.05, color: 'rgba(134, 239, 172, 0.6)' },
      { offset: 0.95, color: 'rgba(134, 239, 172, 0.1)' },
    ]);

    // Gradients for light mode
    const engineeringGradientLight = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0.05, color: 'rgba(240, 90, 34, 0.6)' },
      { offset: 0.95, color: 'rgba(240, 90, 34, 0.1)' },
    ]);
    const salesGradientLight = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0.05, color: 'rgba(0, 135, 255, 0.6)' },
      { offset: 0.95, color: 'rgba(0, 135, 255, 0.1)' },
    ]);
    const marketingGradientLight = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0.05, color: 'rgba(124, 58, 237, 0.6)' },
      { offset: 0.95, color: 'rgba(124, 58, 237, 0.1)' },
    ]);
    const operationsGradientLight = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0.05, color: 'rgba(34, 197, 94, 0.6)' },
      { offset: 0.95, color: 'rgba(34, 197, 94, 0.1)' },
    ]);

    const chartOption = {
      animation: true,
      animationDuration: 400,
      grid: {
        top: 20,
        right: 16,
        bottom: 20,
        left: 16,
        containLabel: true,
      },
      legend: {
        show: false,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: 'transparent',
          },
        },
        backgroundColor: tooltipBg,
        borderColor: tooltipBorder,
        borderWidth: 1,
        borderRadius: 12,
        padding: [4, 8],
        boxShadow: '0px 12px 28px 0px rgba(0, 0, 0, 0.08)',
        extraCssText: 'backdrop-filter: blur(60px);',
        formatter: (params: any) => {
          let result = '';
          params.forEach((entry: any) => {
            if (entry.seriesName !== '总量') {
              result += `<div style="display: flex; align-items: center; gap: 8px; padding: 4px 0;">
                <div style="width: 12px; height: 3px; border-radius: 1px; background: ${entry.seriesIndex === 0 ? (dark ? '#fb923c' : '#f05a22') : entry.seriesIndex === 1 ? (dark ? '#60a5fa' : '#0087ff') : entry.seriesIndex === 2 ? (dark ? '#a78bfa' : '#7c3aed') : (dark ? '#86efac' : '#22c55e')}; flex-shrink: 0;"></div>
                <span style="font-family: var(--font-family-sans); font-size: var(--font-size-body-base); font-weight: var(--font-weight-tertiary); color: ${tooltipTextSecondary}; flex: 1; text-transform: capitalize;">${entry.seriesName}</span>
                <span style="font-family: var(--font-family-sans); font-size: var(--font-size-body-base); font-weight: var(--font-weight-secondary); color: ${tooltipTextPrimary};">${entry.value}</span>
              </div>`;
            }
          });
          return result;
        },
      },
      xAxis: {
        type: 'category',
        data: headcountData.map(d => d.month),
        boundaryGap: false,
        axisLine: false,
        axisTick: false,
        axisLabel: {
          margin: 12,
          fontFamily: 'var(--font-family-sans)',
          fontSize: 'var(--font-size-body-base)',
          fontWeight: 'var(--font-weight-tertiary)',
          color: 'var(--color-content-neutral-tertiary)',
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: gridColor,
            type: 'dashed',
            width: 1,
          },
        },
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 1600,
        axisLine: false,
        axisTick: false,
        axisLabel: {
          fontSize: 'var(--font-size-body-base)',
          fontWeight: 'var(--font-weight-tertiary)',
          color: 'var(--color-content-neutral-tertiary)',
          fontFamily: 'var(--font-family-sans)',
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: gridColor,
            type: 'dashed',
            width: 1,
          },
        },
      },
      series: [
        {
          name: 'Engineering',
          type: 'line',
          symbol: 'none',
          data: headcountData.map(d => d.engineering),
          lineStyle: {
            width: 2,
            color: dark ? '#fb923c' : '#f05a22',
          },
          areaStyle: {
            color: dark ? engineeringGradientDark : engineeringGradientLight,
          },
          emphasis: {
            focus: 'series',
          },
        },
        {
          name: 'Sales',
          type: 'line',
          symbol: 'none',
          data: headcountData.map(d => d.sales),
          lineStyle: {
            width: 2,
            color: dark ? '#60a5fa' : '#0087ff',
          },
          areaStyle: {
            color: dark ? salesGradientDark : salesGradientLight,
          },
          emphasis: {
            focus: 'series',
          },
        },
        {
          name: 'Marketing',
          type: 'line',
          symbol: 'none',
          data: headcountData.map(d => d.marketing),
          lineStyle: {
            width: 2,
            color: dark ? '#a78bfa' : '#7c3aed',
          },
          areaStyle: {
            color: dark ? marketingGradientDark : marketingGradientLight,
          },
          emphasis: {
            focus: 'series',
          },
        },
        {
          name: 'Operations',
          type: 'line',
          symbol: 'none',
          data: headcountData.map(d => d.operations),
          lineStyle: {
            width: 2,
            color: dark ? '#86efac' : '#22c55e',
          },
          areaStyle: {
            color: dark ? operationsGradientDark : operationsGradientLight,
          },
          emphasis: {
            focus: 'series',
          },
        },
      ],
    };

    chart.setOption(chartOption);
    requestAnimationFrame(() => chart.resize());

    const resizeObserver = new ResizeObserver(() => {
      chart.resize();
    });

    if (chartRef.current) {
      resizeObserver.observe(chartRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      chart.dispose();
    };
  }, [dark, gridColor, labelColor, tooltipBg, tooltipBorder, tooltipTextSecondary, tooltipTextPrimary, headcountColors]);

  return (
    <>
      <ChartCard
        title="Headcount Trend"
        width="100%"
        height={320}
        actionIcon={
          <Button
            ref={exportButtonRef}
            variant="flat-primary"
            size="s"
            icon={<DotsHorizontal size={16} />}
            aria-label="More options"
            onClick={() => setExportPopoverOpen(prev => !prev)}
          />
        }
      >
        <Popover
          open={exportPopoverOpen}
          anchorEl={exportButtonRef.current}
          onClose={() => setExportPopoverOpen(false)}
        >
          <PopoverItem label="Export image" noCheck onClick={() => setExportPopoverOpen(false)} />
          <PopoverItem label="Export data" noCheck onClick={() => setExportPopoverOpen(false)} />
          <PopoverItem label="Ask GiGi" noCheck onClick={() => setExportPopoverOpen(false)} />
        </Popover>
        <div style={{ width: '100%' }}>
          <div ref={chartRef} style={{ width: '100%', height: 235 }} />
        </div>
        <div className="hr-bar-chart-legend">
          <div className="hr-bar-legend-row">
            <span className="hr-bar-legend-item" onClick={() => toggleSeries('Engineering')} style={{ cursor: 'pointer', opacity: visibleSeries.Engineering ? 1 : 0.4 }}>
              <span className="hr-line-legend-color" style={{ background: headcountColors.Engineering }} />
              Engineering
            </span>
            <span className="hr-bar-legend-item" onClick={() => toggleSeries('Sales')} style={{ cursor: 'pointer', opacity: visibleSeries.Sales ? 1 : 0.4 }}>
              <span className="hr-line-legend-color" style={{ background: headcountColors.Sales }} />
              Sales
            </span>
            <span className="hr-bar-legend-item" onClick={() => toggleSeries('Marketing')} style={{ cursor: 'pointer', opacity: visibleSeries.Marketing ? 1 : 0.4 }}>
              <span className="hr-line-legend-color" style={{ background: headcountColors.Marketing }} />
              Marketing
            </span>
            <span className="hr-bar-legend-item" onClick={() => toggleSeries('Operations')} style={{ cursor: 'pointer', opacity: visibleSeries.Operations ? 1 : 0.4 }}>
              <span className="hr-line-legend-color" style={{ background: headcountColors.Operations }} />
              Operations
            </span>
          </div>
        </div>
      </ChartCard>
    </>
  );
}

/* ── Leave Usage Mix Line & Bar Chart (ECharts) ── */
const leaveUsageData = [
  { month: 'Jan', annual: 120, sick: 45, unpaid: 15, total: 180 },
  { month: 'Feb', annual: 95, sick: 38, unpaid: 12, total: 145 },
  { month: 'Mar', annual: 110, sick: 52, unpaid: 20, total: 182 },
  { month: 'Apr', annual: 130, sick: 41, unpaid: 18, total: 189 },
  { month: 'May', annual: 105, sick: 49, unpaid: 14, total: 168 },
  { month: 'Jun', annual: 145, sick: 55, unpaid: 22, total: 222 },
  { month: 'Jul', annual: 160, sick: 48, unpaid: 25, total: 233 },
  { month: 'Aug', annual: 135, sick: 42, unpaid: 18, total: 195 },
  { month: 'Sep', annual: 125, sick: 50, unpaid: 16, total: 191 },
  { month: 'Oct', annual: 140, sick: 44, unpaid: 20, total: 204 },
  { month: 'Nov', annual: 150, sick: 58, unpaid: 24, total: 232 },
  { month: 'Dec', annual: 170, sick: 62, unpaid: 28, total: 260 },
];

function LeaveUsageChart() {
  const [exportPopoverOpen, setExportPopoverOpen] = useState(false);
  const exportButtonRef = useRef<HTMLButtonElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);
  const { dark } = useDarkMode();

  const gridColor = dark ? 'rgba(255, 255, 255, 0.12)' : '#e5e5e5';
  const labelColor = dark ? 'rgba(255, 255, 255, 0.62)' : 'rgba(0, 0, 0, 0.45)';
  // color-bg-fill-neutral-solid-default / color-neutral-12: light=#141414, dark=#eeeeee
  const neutralSolidDefaultColor = dark ? '#eeeeee' : '#141414';
  const tooltipBg = dark ? 'rgba(30, 30, 30, 0.92)' : 'rgba(255, 255, 255, 0.86)';
  const tooltipBorder = dark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)';
  const tooltipTextSecondary = dark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.62)';
  const tooltipTextPrimary = dark ? 'rgba(255, 255, 255, 0.92)' : 'rgba(0, 0, 0, 0.88)';

  // Series colors - use brighter colors in dark mode for visibility
  const leaveUsageColors = {
    annual: dark ? '#fb923c' : '#f05a22',      // orange
    sick: dark ? '#60a5fa' : '#0087ff',           // blue
    unpaid: dark ? '#facc15' : '#ffca2f',        // yellow
  };

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current, null, { renderer: 'canvas' });
    chartInstance.current = chart;

    const chartOption = {
      animation: true,
      animationDuration: 800,
      animationEasing: 'cubicOut' as const,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        backgroundColor: tooltipBg,
        borderColor: tooltipBorder,
        borderWidth: 1,
        borderRadius: 12,
        padding: [4, 8],
        boxShadow: '0px 12px 28px 0px rgba(0, 0, 0, 0.08)',
        backdropFilter: 'blur(60px)',
        textStyle: {
          fontFamily: 'var(--font-family-sans)',
          fontSize: 'var(--font-size-body-base)',
          fontWeight: 'var(--font-weight-tertiary)',
          color: tooltipTextSecondary,
        },
        formatter: (params: any) => {
          const items = params.map((p: any) => {
            const isLine = p.seriesType === 'line';
            const marker = isLine
              ? `<span style="display: inline-block; width: 16px; height: 3px; background: ${p.color}; border-radius: 1px; margin-right: 4px;"></span>`
              : `<span style="display: inline-block; width: 10px; height: 10px; background: ${p.color}; border-radius: 2px; margin-right: 4px;"></span>`;
            return `<div style="padding: 4px 0;">${marker}${p.seriesName}: <span style="font-weight: var(--font-weight-secondary); color: ${tooltipTextPrimary};">${p.value}</span></div>`;
          }).join('');
          return `<div style="padding: 4px 8px; font-family: var(--font-family-sans); font-size: var(--font-size-body-base); font-weight: var(--font-weight-tertiary); color: ${tooltipTextSecondary};">${items}</div>`;
        },
      },
      legend: {
        show: false,
      },
      grid: {
        left: 0,
        right: 0,
        top: 16,
        bottom: 60,
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: leaveUsageData.map(d => d.month),
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          fontFamily: 'var(--font-family-sans)',
          fontSize: 'var(--font-size-body-base)',
          fontWeight: 'var(--font-weight-tertiary)',
          color: 'var(--color-content-neutral-tertiary)',
        },
      },
      yAxis: [
        {
          type: 'value',
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: {
            lineStyle: {
              color: gridColor,
              type: 'solid',
              width: 1,
            },
          },
          axisLabel: {
            fontFamily: 'var(--font-family-sans)',
            fontSize: 'var(--font-size-body-base)',
            fontWeight: 'var(--font-weight-tertiary)',
            color: 'var(--color-content-neutral-tertiary)',
          },
        },
        {
          type: 'value',
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: {
            fontFamily: 'var(--font-family-sans)',
            fontSize: 'var(--font-size-body-base)',
            fontWeight: 'var(--font-weight-tertiary)',
            color: 'var(--color-content-neutral-tertiary)',
            interval: 30,
          },
          min: 120,
          max: 280,
        },
      ],
      series: [
        {
          name: 'Annual Leave',
          type: 'bar',
          stack: 'leave',
          yAxisIndex: 0,
          data: leaveUsageData.map(d => d.annual),
          itemStyle: {
            color: leaveUsageColors.annual,
            borderRadius: [0, 0, 0, 0],
          },
          barWidth: 24,
        },
        {
          name: 'Sick Leave',
          type: 'bar',
          stack: 'leave',
          yAxisIndex: 0,
          data: leaveUsageData.map(d => d.sick),
          itemStyle: {
            color: leaveUsageColors.sick,
          },
          barWidth: 24,
        },
        {
          name: 'Unpaid Leave',
          type: 'bar',
          stack: 'leave',
          yAxisIndex: 0,
          data: leaveUsageData.map(d => d.unpaid),
          itemStyle: {
            color: leaveUsageColors.unpaid,
            borderRadius: [4, 4, 0, 0],
          },
          barWidth: 24,
        },
        {
          name: 'Total Trend',
          type: 'line',
          yAxisIndex: 1,
          data: leaveUsageData.map(d => d.total),
          smooth: false,
          showSymbol: false,
          lineStyle: {
            color: neutralSolidDefaultColor,
            width: 3,
          },
        },
      ],
    };

    chart.setOption(chartOption);
    chart.resize();

    const resizeObserver = new ResizeObserver(() => {
      chart.resize();
    });

    if (chartRef.current) {
      resizeObserver.observe(chartRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      chart.dispose();
    };
  }, [dark, gridColor, labelColor, tooltipBg, tooltipBorder, tooltipTextSecondary, tooltipTextPrimary, leaveUsageColors]);

  return (
    <ChartCard
      title="Leave Usage"
      width="100%"
      height={320}
      actionIcon={
        <Button
          variant="flat-primary"
          size="s"
          icon={<DotsHorizontal size={16} />}
          aria-label="More options"
          ref={exportButtonRef}
          onClick={() => setExportPopoverOpen(prev => !prev)}
        />
      }
    >
      <Popover
        open={exportPopoverOpen}
        anchorEl={exportButtonRef.current}
        onClose={() => setExportPopoverOpen(false)}
      >
        <PopoverItem label="Export image" noCheck onClick={() => setExportPopoverOpen(false)} />
        <PopoverItem label="Export data" noCheck onClick={() => setExportPopoverOpen(false)} />
        <PopoverItem label="Ask GiGi" noCheck onClick={() => setExportPopoverOpen(false)} />
      </Popover>
      <div style={{ width: '100%' }}>
        <div ref={chartRef} style={{ width: '100%', height: 235 }} />
      </div>
      <div className="hr-bar-chart-legend">
        <div className="hr-bar-legend-row">
          <span className="hr-bar-legend-item">
            <span className="hr-bar-legend-color" style={{ background: leaveUsageColors.annual }} />
            Annual Leave
          </span>
          <span className="hr-bar-legend-item">
            <span className="hr-bar-legend-color" style={{ background: leaveUsageColors.sick }} />
            Sick Leave
          </span>
          <span className="hr-bar-legend-item">
            <span className="hr-bar-legend-color" style={{ background: leaveUsageColors.unpaid }} />
            Unpaid Leave
          </span>
          <span className="hr-bar-legend-item">
            <span className="hr-line-legend-color" style={{ background: neutralSolidDefaultColor }} />
            Total Trend
          </span>
        </div>
      </div>
    </ChartCard>
  );
}

/* ── Charts Grid ── */
function ChartsGrid() {
  return (
    <div className="hr-charts-row-1">
      <EmploymentTypeChart />
      <RecruitmentPipelineChart />
    </div>
  );
}

function ChartsRow2() {
  return (
    <div className="hr-charts-row-2">
      <SeniorityLevelChart />
      <HeadcountTrendChart />
      <LeaveUsageChart />
    </div>
  );
}

export function HRDashboardPage({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <div className="hr-page">
      <TopBar onMenuClick={onMenuClick} />
      <div className="hr-content">
        <div className="hr-title-row">
          <div className="hr-title-left">
            <img src="/HR-logo.png" alt="HR" className="hr-logo" />
            <h1 className="text-h3">Human Resources</h1>
          </div>
          <Segmented
            items={[
              { value: 'workforce', label: 'Workforce Overview' },
              { value: 'engagement', label: 'Engagement' },
            ]}
            defaultValue="workforce"
          />
        </div>
        <MetricsGrid />
        <ChartsGrid />
        <ChartsRow2 />
      </div>
    </div>
  );
}