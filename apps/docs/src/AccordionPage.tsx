import { useState } from 'react';
import { Accordion, AccordionGroup } from '@zen/components';
import { DemoBlock } from './DemoBlock';

const faqItems = [
  {
    title: 'Where can I see a breakdown of my full seats and associated costs?',
    content:
      'You can manage your full seats from the Admin Dashboard (accessible to team admins from the Team Page). When you start the upgrade process, you\'ll be able to review your current full seats and downgrade people to viewer seats, so you only pay for the seats you want.',
  },
  {
    title: 'How do I upgrade my team to a paid plan?',
    content:
      'Navigate to your Team Settings page and click "Upgrade Plan". You\'ll be guided through selecting a plan, reviewing your seat count, and entering payment details.',
  },
  {
    title: 'Can I switch between monthly and annual billing?',
    content:
      'Yes, you can switch between monthly and annual billing at any time from your billing settings. When switching to annual, you\'ll receive a prorated credit for the remainder of your current monthly period.',
  },
];

export function AccordionPage() {
  const [controlled, setControlled] = useState(false);

  return (
    <>
      {/* ── Header ── */}
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
        <h1 className="docs-page-title text-display-1">Accordion</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A collapsible content section with a title and chevron toggle. Available in 3 sizes and 2 visual themes. Use AccordionGroup to stack multiple items.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

      {/* ── When to Use ── */}
      <div className="docs-when-to-use">
        <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>When to use</h3>
        <ul className="text-body-small">
          <li>For FAQ sections, settings panels, or any content that benefits from progressive disclosure.</li>
          <li>Use <strong>theme="divider"</strong> for lists separated by borders.</li>
          <li>Use <strong>theme="box"</strong> for standalone cards with surface background.</li>
          <li>Use <strong>AccordionGroup</strong> to share size/theme across multiple items and collapse double borders.</li>
        </ul>
      </div>

      {/* ── Examples ── */}
      <h2 className="docs-section-title text-h3">Examples</h2>

      <div className="docs-demo-grid">
        {/* Sizes — Divider */}
        <DemoBlock
          title="Sizes — Divider Theme"
          description="Medium (subheading), Large (h4), XLarge (h3) with border separators."
          direction="column"
          fullWidth
        >
          <AccordionGroup size="m" theme="divider">
            {faqItems.map((item) => (
              <Accordion key={item.title} title={item.title}>
                <p>{item.content}</p>
              </Accordion>
            ))}
          </AccordionGroup>

          <div style={{ marginTop: 'var(--gap-xlarge)' }}>
            <AccordionGroup size="l" theme="divider">
              {faqItems.map((item) => (
                <Accordion key={item.title} title={item.title}>
                  <p>{item.content}</p>
                </Accordion>
              ))}
            </AccordionGroup>
          </div>

          <div style={{ marginTop: 'var(--gap-xlarge)' }}>
            <AccordionGroup size="xl" theme="divider">
              {faqItems.map((item) => (
                <Accordion key={item.title} title={item.title}>
                  <p>{item.content}</p>
                </Accordion>
              ))}
            </AccordionGroup>
          </div>
        </DemoBlock>

        {/* Sizes — Box */}
        <DemoBlock
          title="Sizes — Box Theme"
          description="Surface-alt background with rounded corners."
          direction="column"
          fullWidth
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-small)' }}>
            <Accordion size="m" theme="box" title="Medium box accordion" defaultExpanded>
              <p>Content inside a box-themed accordion with medium size.</p>
            </Accordion>
            <Accordion size="l" theme="box" title="Large box accordion">
              <p>Content inside a box-themed accordion with large size.</p>
            </Accordion>
            <Accordion size="xl" theme="box" title="XLarge box accordion">
              <p>Content inside a box-themed accordion with extra-large size.</p>
            </Accordion>
          </div>
        </DemoBlock>

        {/* Controlled */}
        <DemoBlock
          title="Controlled"
          description="Fully controlled with expanded and onExpandedChange props."
          direction="column"
          fullWidth
        >
          <Accordion
            size="l"
            theme="divider"
            title="Controlled accordion"
            expanded={controlled}
            onExpandedChange={setControlled}
          >
            <p>This accordion's state is controlled externally. Current state: <strong>{controlled ? 'expanded' : 'collapsed'}</strong>.</p>
          </Accordion>
        </DemoBlock>

        {/* Default expanded */}
        <DemoBlock
          title="Default Expanded"
          description="Use defaultExpanded to start in the open state."
          direction="column"
          fullWidth
        >
          <AccordionGroup size="m" theme="divider">
            <Accordion title="This starts expanded" defaultExpanded>
              <p>This accordion is open by default when the page loads.</p>
            </Accordion>
            <Accordion title="This starts collapsed">
              <p>This accordion starts closed and opens on click.</p>
            </Accordion>
          </AccordionGroup>
        </DemoBlock>

        {/* Rich content */}
        <DemoBlock
          title="Rich Content"
          description="Accordion children can contain any React content."
          direction="column"
          fullWidth
        >
          <Accordion size="l" theme="box" title="Accordion with rich content" defaultExpanded>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-small)' }}>
              <p>Accordions can contain any content — lists, images, other components.</p>
              <ul style={{ paddingLeft: 'var(--padding-xlarge)', margin: 0 }}>
                <li>First point of interest</li>
                <li>Second point of interest</li>
                <li>Third point of interest</li>
              </ul>
              <p style={{ color: 'var(--color-content-neutral-tertiary)' }}>
                — Last updated March 2026
              </p>
            </div>
          </Accordion>
        </DemoBlock>
      </div>

      {/* ── API ── */}
      <h2 className="docs-section-title text-h3">API</h2>

      <h3 className="text-body-base" style={{ fontWeight: 'var(--font-weight-primary)', marginBottom: 'var(--gap-small)' }}>Accordion</h3>
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
            <td><code>title</code></td>
            <td>Title text (required)</td>
            <td><code>string</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>size</code></td>
            <td>Size variant</td>
            <td><code>'m'</code> | <code>'l'</code> | <code>'xl'</code></td>
            <td><code>'m'</code></td>
          </tr>
          <tr>
            <td><code>theme</code></td>
            <td>Visual theme</td>
            <td><code>'divider'</code> | <code>'box'</code></td>
            <td><code>'divider'</code></td>
          </tr>
          <tr>
            <td><code>expanded</code></td>
            <td>Controlled expanded state</td>
            <td><code>boolean</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>defaultExpanded</code></td>
            <td>Initial expanded state (uncontrolled)</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td><code>onExpandedChange</code></td>
            <td>Called when expanded state changes</td>
            <td><code>(expanded: boolean) =&gt; void</code></td>
            <td>—</td>
          </tr>
          <tr>
            <td><code>children</code></td>
            <td>Content displayed when expanded</td>
            <td><code>ReactNode</code></td>
            <td>—</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-body-base" style={{ fontWeight: 'var(--font-weight-primary)', marginTop: 'var(--gap-xlarge)', marginBottom: 'var(--gap-small)' }}>AccordionGroup</h3>
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
            <td><code>size</code></td>
            <td>Shared size for all children</td>
            <td><code>'m'</code> | <code>'l'</code> | <code>'xl'</code></td>
            <td><code>'m'</code></td>
          </tr>
          <tr>
            <td><code>theme</code></td>
            <td>Shared theme for all children</td>
            <td><code>'divider'</code> | <code>'box'</code></td>
            <td><code>'divider'</code></td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
}
