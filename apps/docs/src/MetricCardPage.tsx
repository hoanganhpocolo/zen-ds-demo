import { MetricCard } from '@zen/components';
import { Home03 } from '@zen/icons/solid';
import { DemoBlock } from './DemoBlock';

const homeIcon = <Home03 size={24} />;

export function MetricCardPage() {
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
        <h1 className="docs-page-title text-display-1">Metric Card</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            Displays a single KPI or data metric. Supports master (full) and sub (compact) levels, two visual themes, trend badges, optional icon, and a chart slot.
          </p>
        </div>
      </div>

      <div className="docs-page-body">
        <h2 className="docs-section-title text-h3">Default — Master</h2>
        <div className="docs-demo-grid">
          <DemoBlock title="With icon + trend">
            <MetricCard
              icon={homeIcon}
              metricTitle="Metric Title"
              value="$1,680.68"
              trend={{ label: '+24% vs. last year', direction: 'positive' }}
              onAction={() => {}}
            />
          </DemoBlock>
          <DemoBlock title="No icon">
            <MetricCard
              metricTitle="Metric Title"
              value="$1,680.68"
              trend={{ label: '+24% vs. last year', direction: 'positive' }}
              onAction={() => {}}
            />
          </DemoBlock>
          <DemoBlock title="With chart slot">
            <MetricCard
              icon={homeIcon}
              metricTitle="Revenue"
              value="$1,680.68"
              trend={{ label: '+24% vs. last year', direction: 'positive' }}
              onAction={() => {}}
              chart={
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                  <span className="text-caption" style={{ color: 'var(--color-content-placeholder)' }}>Chart</span>
                </div>
              }
            />
          </DemoBlock>
          <DemoBlock title="Negative trend">
            <MetricCard
              icon={homeIcon}
              metricTitle="Expenses"
              value="$3,210.00"
              trend={{ label: '-8% vs. last year', direction: 'negative' }}
              onAction={() => {}}
            />
          </DemoBlock>
          <DemoBlock title="No trend">
            <MetricCard
              icon={homeIcon}
              metricTitle="Total Users"
              value="12,480"
              onAction={() => {}}
            />
          </DemoBlock>
          <DemoBlock title="With color dot">
            <MetricCard
              metricTitle="Brand Revenue"
              metricColor="var(--color-bg-fill-accent-solid-default)"
              value="$1,680.68"
              trend={{ label: '+24% vs. last year', direction: 'positive' }}
              onAction={() => {}}
            />
          </DemoBlock>
        </div>

        <h2 className="docs-section-title text-h3">Subtle — Master</h2>
        <div className="docs-demo-grid">
          <DemoBlock title="Subtle theme">
            <MetricCard
              theme="subtle"
              icon={homeIcon}
              metricTitle="Metric Title"
              value="$1,680.68"
              trend={{ label: '+24% vs. last year', direction: 'positive' }}
            />
          </DemoBlock>
          <DemoBlock title="Subtle + chart">
            <MetricCard
              theme="subtle"
              icon={homeIcon}
              metricTitle="Revenue"
              value="$1,680.68"
              trend={{ label: '+24% vs. last year', direction: 'positive' }}
              chart={
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                  <span className="text-caption" style={{ color: 'var(--color-content-placeholder)' }}>Chart</span>
                </div>
              }
            />
          </DemoBlock>
        </div>

        <h2 className="docs-section-title text-h3">Sub Level</h2>
        <div className="docs-demo-grid">
          <DemoBlock title="Default + icon">
            <MetricCard
              level="sub"
              icon={homeIcon}
              metricTitle="Metric Title"
              value="$1,680.68"
              trend={{ label: '+24% vs. last year', direction: 'positive' }}
              onAction={() => {}}
            />
          </DemoBlock>
          <DemoBlock title="Subtle + icon">
            <MetricCard
              level="sub"
              theme="subtle"
              icon={homeIcon}
              metricTitle="Metric Title"
              value="$1,680.68"
              trend={{ label: '+24% vs. last year', direction: 'positive' }}
            />
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
              <td><code>level</code></td>
              <td>Card hierarchy — master (vertical) or sub (compact row)</td>
              <td><code>'master' | 'sub'</code></td>
              <td><code>'master'</code></td>
            </tr>
            <tr>
              <td><code>theme</code></td>
              <td>Visual style</td>
              <td><code>'default' | 'subtle'</code></td>
              <td><code>'default'</code></td>
            </tr>
            <tr>
              <td><code>icon</code></td>
              <td>Icon in the 48px icon slot</td>
              <td><code>ReactNode</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>metricTitle</code></td>
              <td>Label above the metric value</td>
              <td><code>string</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>metricColor</code></td>
              <td>Color dot next to the metric title (CSS color value)</td>
              <td><code>string</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>value</code></td>
              <td>Main metric value</td>
              <td><code>ReactNode</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>trend</code></td>
              <td>Trend badge with label and direction</td>
              <td><code>{'{ label: string; direction?: "positive" | "negative" | "neutral" }'}</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>showAction</code></td>
              <td>Show the 3-dot action button (top right)</td>
              <td><code>boolean</code></td>
              <td><code>true</code></td>
            </tr>
            <tr>
              <td><code>onAction</code></td>
              <td>3-dot button click handler</td>
              <td><code>() =&gt; void</code></td>
              <td>—</td>
            </tr>
            <tr>
              <td><code>chart</code></td>
              <td>Chart/visual slot (80×80px) on the right</td>
              <td><code>ReactNode</code></td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
