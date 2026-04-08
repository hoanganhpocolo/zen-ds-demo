import { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import {
  Sidebar,
  SidebarItem,
  Avatar,
  Badge,
  Button,
  MetricCard,
  ProgressBar,
  Search,
} from '@zen/components';
import {
  Home01,
  BarChart01,
  FileChart,
  Package,
  ClipboardCheck,
  Share01,
  Headphones,
  Settings01,
  Bell01,
  HelpCircle,
  MessageChatCircle,
  LayoutLeft,
} from '@zen/icons/line';
import { ZenLogo } from '../components/ZenLogo';
import styles from './AnalyticsDemo.module.css';

/* ── Data ── */

const topSalesData = [
  { month: 'Jan', value: 30 },
  { month: 'Feb', value: 55 },
  { month: 'Mar', value: 45 },
  { month: 'Apr', value: 70 },
  { month: 'May', value: 60 },
  { month: 'Jun', value: 85 },
  { month: 'Jul', value: 75 },
  { month: 'Aug', value: 90 },
  { month: 'Sep', value: 80 },
  { month: 'Oct', value: 95 },
  { month: 'Nov', value: 88 },
  { month: 'Dec', value: 100 },
];

const revenueData = [
  { month: 'Jan', revenue: 42, expenses: 28 },
  { month: 'Feb', revenue: 65, expenses: 40 },
  { month: 'Mar', revenue: 55, expenses: 35 },
  { month: 'Apr', revenue: 78, expenses: 52 },
  { month: 'May', revenue: 90, expenses: 60 },
  { month: 'Jun', revenue: 70, expenses: 45 },
  { month: 'Jul', revenue: 85, expenses: 55 },
  { month: 'Aug', revenue: 95, expenses: 65 },
  { month: 'Sep', revenue: 72, expenses: 48 },
  { month: 'Oct', revenue: 88, expenses: 58 },
  { month: 'Nov', revenue: 76, expenses: 50 },
  { month: 'Dec', revenue: 100, expenses: 68 },
];

const sessionsData = [
  { day: 'Mon', sessions: 65 },
  { day: 'Tue', sessions: 82 },
  { day: 'Wed', sessions: 75 },
  { day: 'Thu', sessions: 90 },
  { day: 'Fri', sessions: 88 },
  { day: 'Sat', sessions: 45 },
  { day: 'Sun', sessions: 38 },
];

const trafficSources = [
  { label: 'Organic',      value: 55, count: '2,341' },
  { label: 'Social Media', value: 35, count: '1,423' },
  { label: 'Referral',     value: 28, count: '1,129' },
  { label: 'Direct',       value: 20, count: '813'   },
  { label: 'Email',        value: 12, count: '489'   },
];

/* ── Shared chart styles ── */

const tooltipStyle: React.CSSProperties = {
  background: 'var(--color-bg-surface-default)',
  border: '1px solid var(--color-border-neutral-subtle-default)',
  borderRadius: '10px',
  fontFamily: 'var(--font-family-sans)',
  fontSize: '13px',
  color: 'var(--color-content-neutral-primary)',
  boxShadow: '0 4px 16px var(--color-shadow-neutral-2)',
  padding: '8px 12px',
};

const axisTickStyle = {
  fontSize: 11,
  fill: 'var(--color-content-neutral-tertiary)',
  fontFamily: 'var(--font-family-sans)',
};

/* ── Bell with notification badge ── */
function BellButton() {
  return (
    <div className={styles.notifWrapper}>
      <Button variant="tertiary" size="m" icon={<Bell01 size={24} />} />
      <span className={styles.notifBadge}>3</span>
    </div>
  );
}

/* ── Main ── */
export function AnalyticsDemo() {
  const [navItem, setNavItem] = useState('analytics');

  return (
    <div className={styles.root}>

      {/* ══ SIDEBAR ══ */}
      <div className={styles.sidebarOuter}>
        <Sidebar
          background="default"
          header={
            <div className={styles.sidebarHeader}>
              <div className={styles.sidebarLogo}>
                <ZenLogo />
              </div>
              <Button variant="flat-primary" size="xs" icon={<LayoutLeft size={20} />} />
            </div>
          }
          footer={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-3xsmall)' }}>
              <SidebarItem label="Settings" icon={<Settings01 size={20} />} selected={navItem === 'settings'} onClick={() => setNavItem('settings')} />
              <SidebarItem
                label="Linh Nguyen"
                icon={<Avatar size="xs" color="accent" background="solid">LN</Avatar>}
                onClick={() => {}}
              />
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-3xsmall)' }}>
            <SidebarItem label="Overview"   icon={<Home01         size={20} />} selected={navItem === 'overview'}   onClick={() => setNavItem('overview')} />
            <SidebarItem label="Report"     icon={<FileChart      size={20} />} selected={navItem === 'report'}     onClick={() => setNavItem('report')} />
            <SidebarItem label="Analytics"  icon={<BarChart01     size={20} />} selected={navItem === 'analytics'}  onClick={() => setNavItem('analytics')} />
            <SidebarItem label="Products"   icon={<Package        size={20} />} selected={navItem === 'products'}   onClick={() => setNavItem('products')} />
            <SidebarItem label="My Tasks"   icon={<ClipboardCheck size={20} />} selected={navItem === 'tasks'}      onClick={() => setNavItem('tasks')} />
            <SidebarItem label="Share With" icon={<Share01        size={20} />} selected={navItem === 'share'}      onClick={() => setNavItem('share')} />
            <SidebarItem label="Support"    icon={<Headphones     size={20} />} selected={navItem === 'support'}    onClick={() => setNavItem('support')} />
          </div>
        </Sidebar>
      </div>

      {/* ══ MAIN ══ */}
      <div className={styles.main}>

        {/* ── Navigator ── */}
        <div className={styles.navigator}>
          <div className={styles.navLeading}>
            <Search placeholder="Search" size="default" style={{ width: 240 }} />
          </div>
          <div className={styles.navTrailing}>
            <Button variant="tertiary" size="m" icon={<MessageChatCircle size={20} />}>Feedback</Button>
            <BellButton />
            <Button variant="tertiary" size="m" icon={<HelpCircle size={20} />} />
            <Avatar size="m" src="https://i.pravatar.cc/150?img=47" />
          </div>
        </div>

        {/* ── Body ── */}
        <div className={styles.body}>
          <div className={styles.bodyContent}>

            {/* Row 1: 2×2 metrics + line chart */}
            <div className={styles.row1}>
              <div className={styles.metricsGrid}>
                <MetricCard metricTitle="Total Products" value="2,420"   trend={{ label: '+18% from last month', direction: 'positive' }} />
                <MetricCard metricTitle="Total Sales"    value="1,893"   trend={{ label: '-2% from last month',  direction: 'negative' }} />
                <MetricCard metricTitle="Total Revenue"  value="$18,930" trend={{ label: '+8% from last month',  direction: 'positive' }} />
                <MetricCard metricTitle="Total Expenses" value="$12,440" trend={{ label: '+5% from last month',  direction: 'positive' }} />
              </div>

              {/* Top Product Sales — area chart */}
              <div className={styles.lineChartCard}>
                <div className={styles.chartCardHeader}>
                  <div>
                    <p className="text-body-base-primary" style={{ fontWeight: 'var(--font-weight-secondary)' }}>Top Product Sales</p>
                    <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)' }}>Jan – Dec 2025</p>
                  </div>
                  <Badge label="↑ 12%" color="positive" variant="subtle" size="s" dot={false} />
                </div>
                <div className={styles.areaChartArea}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={topSalesData} margin={{ top: 4, right: 4, left: -32, bottom: 0 }}>
                      <defs>
                        <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%"   stopColor="var(--color-content-accent-primary)" stopOpacity={0.2} />
                          <stop offset="100%" stopColor="var(--color-content-accent-primary)" stopOpacity={0}   />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="var(--color-border-neutral-subtle-default)"
                        vertical={false}
                      />
                      <XAxis dataKey="month" tick={axisTickStyle} axisLine={false} tickLine={false} />
                      <YAxis tick={axisTickStyle} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={tooltipStyle} cursor={{ stroke: 'var(--color-border-accent-subtle-default)', strokeWidth: 1 }} />
                      <Area
                        type="monotone"
                        dataKey="value"
                        name="Sales"
                        stroke="var(--color-content-accent-primary)"
                        strokeWidth={2}
                        fill="url(#salesGrad)"
                        dot={false}
                        activeDot={{ r: 4, fill: 'var(--color-content-accent-primary)', stroke: 'var(--color-bg-surface-default)', strokeWidth: 2 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Row 2: Revenue Over Time — grouped bar chart */}
            <div className={styles.barChartCard}>
              <div className={styles.chartCardHeader}>
                <div>
                  <p className="text-body-base-primary" style={{ fontWeight: 'var(--font-weight-secondary)' }}>Revenue Over Time</p>
                  <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)' }}>Jan – Dec 2025</p>
                </div>
                <div className={styles.chartLegend}>
                  <span className={styles.legendDotAccent} />
                  <span className="text-body-small">Revenue</span>
                  <span className={styles.legendDotNeutral} />
                  <span className="text-body-small">Expenses</span>
                </div>
              </div>
              <div className={styles.barChartArea}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData} barGap={3} barCategoryGap="32%" margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="var(--color-border-neutral-subtle-default)"
                      vertical={false}
                    />
                    <XAxis dataKey="month" tick={axisTickStyle} axisLine={false} tickLine={false} />
                    <YAxis tick={axisTickStyle} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'var(--color-bg-fill-neutral-flat-hover)' }} />
                    <Bar dataKey="revenue" name="Revenue" fill="var(--color-bg-fill-accent-solid-default)"  radius={[4, 4, 0, 0]} />
                    <Bar dataKey="expenses" name="Expenses" fill="var(--color-bg-fill-neutral-subtle-default)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Row 3: Traffic Sources + Sessions */}
            <div className={styles.row3}>

              {/* Traffic Sources */}
              <div className={styles.panelCard}>
                <p className="text-body-base-primary" style={{ fontWeight: 'var(--font-weight-secondary)', marginBottom: 'var(--gap-medium)' }}>
                  Traffic Sources
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-small)' }}>
                  {trafficSources.map(src => (
                    <div key={src.label} className={styles.trafficRow}>
                      <span className="text-body-small" style={{ width: 100, flexShrink: 0 }}>{src.label}</span>
                      <div style={{ flex: 1 }}>
                        <ProgressBar value={src.value} theme="accent" style={{ width: '100%' }} />
                      </div>
                      <span className="text-body-small" style={{ width: 44, textAlign: 'right', flexShrink: 0, color: 'var(--color-content-neutral-secondary)' }}>
                        {src.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sessions */}
              <div className={styles.panelCard}>
                <p className="text-body-base-primary" style={{ fontWeight: 'var(--font-weight-secondary)', marginBottom: 'var(--gap-medium)' }}>
                  Sessions
                </p>
                <div className={styles.sessionsChartArea}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sessionsData} barCategoryGap="40%" margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="var(--color-border-neutral-subtle-default)"
                        vertical={false}
                      />
                      <XAxis dataKey="day" tick={axisTickStyle} axisLine={false} tickLine={false} />
                      <YAxis tick={axisTickStyle} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'var(--color-bg-fill-neutral-flat-hover)' }} />
                      <Bar dataKey="sessions" name="Sessions" fill="var(--color-bg-fill-info-solid-default)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
