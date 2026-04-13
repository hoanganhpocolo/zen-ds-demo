import { Segmented, Button, SelectField } from '@zen/components';
import { TrendUp01, TrendDown01 } from '@zen/icons/line';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import { WidgetShell } from './WidgetShell';
import { registerWidget } from './registry';
import './widget-content.css';

const pieData = [
  { name: 'IAP', value: 71300 },
  { name: 'WEB', value: 291300 },
];
const PIE_COLORS = ['var(--color-bg-fill-accent-solid-default)', 'var(--color-bg-fill-info-solid-default)'];

const barData = [
  { day: 'Mon', current: 78, prev: 100 },
  { day: 'Tue', current: 220, prev: 80 },
  { day: 'Wed', current: 250, prev: 140 },
  { day: 'Thu', current: 60, prev: 90 },
  { day: 'Fri', current: 180, prev: 210 },
  { day: 'Sat', current: 190, prev: 220 },
  { day: 'Sun', current: 170, prev: 200 },
];

const metrics = [
  { title: 'Gross Booking', value: '1.2B', change: '-50.1%', prev: '80.33M', positive: false },
  { title: 'AOV', value: '23.2K', change: '+10.1%', prev: '9.33K', positive: true },
  { title: 'PU', value: '6,329', change: '+10.1%', prev: '9.33K', positive: true },
  { title: 'CVR%', value: '87.3%', change: '+10.1%', prev: '79.7%', positive: true },
];

const tooltipStyle = {
  borderRadius: 'var(--radius-base)',
  border: '1px solid var(--color-border-neutral-subtle-light-default)',
  boxShadow: '0 4px 12px var(--color-shadow-neutral-1)',
  background: 'var(--color-bg-surface-default)',
  fontSize: 'var(--font-size-body-small)',
  padding: 'var(--padding-xsmall) var(--padding-small)',
};

export function AnalyticsWidget({ menu }: { menu?: React.ReactNode }) {
  return (
    <WidgetShell
      title=""
      icon={
        <Segmented
          size="medium"
          items={[
            { value: 'billing', label: 'Billing Payment' },
            { value: 'acquisition', label: 'Acquisition' },
            { value: 'engagement', label: 'Engagement' },
            { value: 'cs', label: 'CS' },
          ]}
          defaultValue="billing"
        />
      }
      actions={
        <span className="wc-analytics-actions">
          <SelectField
            size="m"
            placeholder="Select game"
            defaultValue="jxmax"
            options={[
              { value: 'jxmax', label: 'Võ Lâm Truyền Kỳ MAX (JXMAX)' },
              { value: 'pubgm', label: 'PUBG Mobile' },
              { value: 'lol', label: 'League of Legends' },
              { value: 'valorant', label: 'Valorant' },
            ]}
          />
        </span>
      }
      menu={menu}
    >
      <div className="wc-analytics-body">
        {/* Metrics row */}
        <div className="wc-metrics-row">
          {metrics.map((m, i) => (
            <div key={i} className="wc-metric-mini">
              <p className="text-body-base wc-metric-title">{m.title}</p>
              <p className="wc-metric-value">{m.value}</p>
              <div className="text-body-small wc-metric-change">
                <span className={m.positive ? 'wc-metric-change-positive' : 'wc-metric-change-negative'}>
                  {m.positive ? <TrendUp01 size={14} /> : <TrendDown01 size={14} />} {m.change}
                </span>
                <span className="wc-metric-prev"> vs prev. ({m.prev})</span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="wc-charts-row">
          {/* Pie */}
          <div className="wc-chart-card">
            <p className="text-body-base wc-chart-title">Distribution By Shop</p>
            <div className="wc-chart-area">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" stroke="none">
                    {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
                  </Pie>
                  <Tooltip formatter={(v) => `${(Number(v) / 1000).toFixed(0)}K`} contentStyle={tooltipStyle} itemStyle={{ fontSize: 'var(--font-size-body-small)', padding: 0 } as any} />
                </PieChart>
              </ResponsiveContainer>
              <div className="wc-pie-center">
                <p className="text-body-small wc-pie-total-label">Total</p>
                <p className="text-body-base wc-pie-total-value">362,600k</p>
              </div>
            </div>
            <div className="wc-chart-legend">
              {pieData.map((d, i) => (
                <div key={d.name} className="wc-legend-item">
                  <span className="wc-legend-dot" style={{ background: PIE_COLORS[i] }} />
                  <span className="text-body-small">{d.name} ({((d.value / 362600) * 100).toFixed(1)}%)</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bar */}
          <div className="wc-chart-card">
            <p className="text-body-base wc-chart-title">Weekly Gross Booking</p>
            <div className="wc-chart-area">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} barGap={1} barSize={14}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-neutral-subtle-light-default)" vertical={false} />
                  <XAxis dataKey="day" tick={{ fontSize: 'var(--font-size-body-small)', fill: 'var(--color-content-neutral-tertiary)' } as any} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 'var(--font-size-body-small)', fill: 'var(--color-content-neutral-tertiary)' } as any} axisLine={false} tickLine={false} width={30} />
                  <Tooltip contentStyle={tooltipStyle} labelStyle={{ fontSize: 'var(--font-size-body-small)', fontWeight: 600, marginBottom: 4 } as any} itemStyle={{ fontSize: 'var(--font-size-body-small)', padding: 0 } as any} cursor={{ fill: 'var(--color-bg-fill-neutral-subtle-light-default)' }} />
                  <Bar dataKey="current" name="10/2025" fill="var(--color-bg-fill-accent-solid-default)" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="prev" name="Prev" fill="var(--color-bg-fill-info-solid-default)" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="wc-chart-legend">
              <div className="wc-legend-item">
                <span className="wc-legend-dot wc-legend-dot-accent" />
                <span className="text-body-small">Gross Booking 10/2025</span>
              </div>
              <div className="wc-legend-item">
                <span className="wc-legend-dot wc-legend-dot-info" />
                <span className="text-body-small">Gross Booking 2025-10-24</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WidgetShell>
  );
}

registerWidget({
  id: 'analytics',
  title: 'Analytics',
  defaultW: 2,
  defaultH: 4,
  minW: 2,
  minH: 3,
  component: AnalyticsWidget,
  emoji: '📊',
  description: 'Game performance metrics and charts',
});
