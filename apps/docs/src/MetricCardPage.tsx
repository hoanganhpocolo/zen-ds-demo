import { MetricCard } from '@zen/components';
import { Home03 } from '@zen/icons/solid';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

const homeIcon = <Home03 size={24} />;

export function MetricCardPage() {
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
        <ApiTable
          columns={['Property', 'Description', 'Type', 'Default']}
          rows={[
            [<code>level</code>, 'Card hierarchy — master (vertical) or sub (compact row)', <><code>'master'</code> | <code>'sub'</code></>, <code>'master'</code>],
            [<code>theme</code>, 'Visual style', <><code>'default'</code> | <code>'subtle'</code></>, <code>'default'</code>],
            [<code>icon</code>, 'Icon in the 48px icon slot', <code>ReactNode</code>, '—'],
            [<code>metricTitle</code>, 'Label above the metric value', <code>string</code>, '—'],
            [<code>metricColor</code>, 'Color dot next to the metric title (CSS color value)', <code>string</code>, '—'],
            [<code>value</code>, 'Main metric value', <code>ReactNode</code>, '—'],
            [<code>trend</code>, 'Trend badge with label and direction', <code>{'{ label: string; direction?: "positive" | "negative" | "neutral" }'}</code>, '—'],
            [<code>showAction</code>, 'Show the 3-dot action button (top right)', <code>boolean</code>, <code>true</code>],
            [<code>onAction</code>, '3-dot button click handler', <code>() =&gt; void</code>, '—'],
            [<code>chart</code>, 'Chart/visual slot (80×80px) on the right', <code>ReactNode</code>, '—'],
          ]}
        />
      </div>
    </>
  );
}
