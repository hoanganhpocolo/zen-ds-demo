import { useState } from 'react';
import { RatingNps, RatingStar, RatingOpinion } from '@zen/components';
import type { OpinionValue } from '@zen/components';
import { DemoBlock } from './DemoBlock';

export function RatingPage() {
  const [nps5, setNps5] = useState<number | undefined>(undefined);
  const [nps10, setNps10] = useState<number | undefined>(3);
  const [star, setStar] = useState(3.5);
  const [starHalf, setStarHalf] = useState(2.5);
  const [opinion2, setOpinion2] = useState<OpinionValue | undefined>(undefined);
  const [opinion3, setOpinion3] = useState<OpinionValue | undefined>('neutral');
  const [opinion5, setOpinion5] = useState<OpinionValue | undefined>('happy');

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
        <h1 className="docs-page-title text-display-1">Rating</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            Three rating input types: NPS numeric scale, Star rating, and Opinion emoji scale.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        {/* ── NPS Scale ── */}
        <h2 className="docs-section-title text-h3">NPS Scale</h2>
        <div className="docs-demo-grid">

          <DemoBlock title="Scale 0–5">
            <RatingNps
              scale={5}
              value={nps5}
              onChange={setNps5}
              lowLabel="Very disappointed"
              highLabel="Very happy"
            />
          </DemoBlock>

          <DemoBlock title="Scale 0–10">
            <RatingNps
              scale={10}
              value={nps10}
              onChange={setNps10}
              lowLabel="Very disappointed"
              highLabel="Very happy"
            />
          </DemoBlock>

          <DemoBlock title="No labels">
            <RatingNps scale={5} value={nps5} onChange={setNps5} />
          </DemoBlock>

        </div>

        {/* ── Star Rating ── */}
        <h2 className="docs-section-title text-h3">Star Rating</h2>
        <div className="docs-demo-grid">

          <DemoBlock title="Full star">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)' }}>
              <RatingStar value={star} onChange={setStar} />
              <span className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)' }}>
                Selected: {star} / 5
              </span>
            </div>
          </DemoBlock>

          <DemoBlock title="Half star">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)' }}>
              <RatingStar value={starHalf} onChange={setStarHalf} allowHalf />
              <span className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)' }}>
                Selected: {starHalf} / 5
              </span>
            </div>
          </DemoBlock>

          <DemoBlock title="Read-only display">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)' }}>
              {[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((v) => (
                <RatingStar key={v} value={v} allowHalf readOnly />
              ))}
            </div>
          </DemoBlock>

          <DemoBlock title="Custom size">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)', alignItems: 'flex-start' }}>
              <RatingStar value={4} size={16} readOnly />
              <RatingStar value={4} size={24} readOnly />
              <RatingStar value={4} size={32} readOnly />
              <RatingStar value={4} size={40} readOnly />
            </div>
          </DemoBlock>

        </div>

        {/* ── Opinion Scale ── */}
        <h2 className="docs-section-title text-h3">Opinion Scale</h2>
        <div className="docs-demo-grid">

          <DemoBlock title="2 options">
            <RatingOpinion scale={2} value={opinion2} onChange={setOpinion2} />
          </DemoBlock>

          <DemoBlock title="3 options">
            <RatingOpinion scale={3} value={opinion3} onChange={setOpinion3} />
          </DemoBlock>

          <DemoBlock title="5 options" fullWidth>
            <RatingOpinion scale={5} value={opinion5} onChange={setOpinion5} />
          </DemoBlock>

        </div>

        {/* ── API ── */}
        <h2 className="docs-section-title text-h3">API — RatingNps</h2>
        <table className="docs-api-table text-body-small">
          <thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead>
          <tbody>
            <tr><td><code>value</code></td><td>Selected number</td><td><code>number</code></td><td>—</td></tr>
            <tr><td><code>onChange</code></td><td>Selection callback</td><td><code>(v: number) =&gt; void</code></td><td>—</td></tr>
            <tr><td><code>scale</code></td><td>0–5 or 0–10</td><td><code>5 | 10</code></td><td><code>5</code></td></tr>
            <tr><td><code>lowLabel</code></td><td>Left end label</td><td><code>string</code></td><td>—</td></tr>
            <tr><td><code>highLabel</code></td><td>Right end label</td><td><code>string</code></td><td>—</td></tr>
          </tbody>
        </table>

        <h2 className="docs-section-title text-h3">API — RatingStar</h2>
        <table className="docs-api-table text-body-small">
          <thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead>
          <tbody>
            <tr><td><code>value</code></td><td>Rating (0–5, 0.5 steps)</td><td><code>number</code></td><td><code>0</code></td></tr>
            <tr><td><code>onChange</code></td><td>Rating callback</td><td><code>(v: number) =&gt; void</code></td><td>—</td></tr>
            <tr><td><code>allowHalf</code></td><td>Enable half-star selection</td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>readOnly</code></td><td>Disable interaction</td><td><code>boolean</code></td><td><code>false</code></td></tr>
            <tr><td><code>size</code></td><td>Star size in px</td><td><code>number</code></td><td><code>24</code></td></tr>
          </tbody>
        </table>

        <h2 className="docs-section-title text-h3">API — RatingOpinion</h2>
        <table className="docs-api-table text-body-small">
          <thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead>
          <tbody>
            <tr><td><code>value</code></td><td>Selected emotion</td><td><code>OpinionValue</code></td><td>—</td></tr>
            <tr><td><code>onChange</code></td><td>Selection callback</td><td><code>(v: OpinionValue) =&gt; void</code></td><td>—</td></tr>
            <tr><td><code>scale</code></td><td>Number of options</td><td><code>2 | 3 | 5</code></td><td><code>5</code></td></tr>
          </tbody>
        </table>

      </div>
    </>
  );
}
