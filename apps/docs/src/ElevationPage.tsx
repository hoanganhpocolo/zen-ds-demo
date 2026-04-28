import { useEffect, useState } from 'react';
import {
  Table, TableContainer, TableHead, TableBody,
  TableRow, TableHeaderCell, TableCell,
} from '@zen/components';
import { DemoBlock } from './DemoBlock';

/* ── Sample preview box: a card-like surface that exposes the shadow ── */
function ShadowBox({ token, label }: { token: string; label?: string }) {
  return (
    <div
      style={{
        width: 160,
        height: 96,
        background: 'var(--color-bg-surface-default)',
        borderRadius: 'var(--radius-large)',
        boxShadow: `var(${token})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-content-neutral-secondary)',
        fontSize: 12,
        fontWeight: 500,
      }}
    >
      {label ?? token.replace('--shadow-', '')}
    </div>
  );
}

/* ── Frosted-glass panel over a colorful backdrop so blur is visible ── */
function EffectPanel({
  shadowToken,
  blurToken,
  label,
  inset,
}: { shadowToken?: string; blurToken: string; label: string; inset?: boolean }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 180,
        borderRadius: 'var(--radius-large)',
        overflow: 'hidden',
        // Vivid gradient backdrop reveals backdrop-filter blur
        background:
          'linear-gradient(135deg, var(--color-bg-fill-support-pink-solid) 0%, var(--color-bg-fill-accent-solid-default) 50%, var(--color-bg-fill-support-blue-solid) 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 24,
          borderRadius: 'var(--radius-base)',
          background: inset
            ? 'var(--color-bg-surface-default)'
            : 'var(--color-bg-fill-neutral-ghost-default)',
          backdropFilter: `var(${blurToken})`,
          WebkitBackdropFilter: `var(${blurToken})`,
          boxShadow: shadowToken ? `var(${shadowToken})` : undefined,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-content-neutral-primary)',
          fontWeight: 600,
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* ── Resolves a CSS var to its computed value at runtime ── */
function ValueCell({ token }: { token: string }) {
  const [value, setValue] = useState('');
  useEffect(() => {
    const v = getComputedStyle(document.documentElement).getPropertyValue(token).trim();
    setValue(v);
  }, [token]);
  return <code style={{ fontSize: 11, fontFamily: 'var(--font-family-dev)', color: 'var(--color-content-neutral-secondary)' }}>{value || '—'}</code>;
}

const BOTTOM_LEVELS = [1, 2, 3, 4] as const;
const TOP_LEVELS = [1, 2, 3, 4] as const;

const TOKEN_REFERENCE: Array<{ token: string; usage: string }> = [
  { token: '--shadow-action-level-1', usage: 'Pressable controls — buttons, toggles' },
  { token: '--shadow-bottom-level-1', usage: 'Resting cards, list items' },
  { token: '--shadow-bottom-level-2', usage: 'Raised cards, dropdowns' },
  { token: '--shadow-bottom-level-3', usage: 'Popovers, tooltips' },
  { token: '--shadow-bottom-level-4', usage: 'Modals, dialogs, full overlays' },
  { token: '--shadow-top-level-1', usage: 'Sticky footers, low-emphasis bottom bars' },
  { token: '--shadow-top-level-2', usage: 'Bottom sheets, raised bottom bars' },
  { token: '--shadow-top-level-3', usage: 'Floating bottom bars with strong lift' },
  { token: '--shadow-top-level-4', usage: 'Maximum-lift bottom overlays' },
  { token: '--effect-container-shadow', usage: 'Glass containers — pair with --effect-container-blur' },
  { token: '--effect-popover-shadow', usage: 'Frosted popovers — pair with --effect-popover-blur' },
  { token: '--effect-input-shadow', usage: 'Inset shadow on inputs — pair with --effect-input-blur' },
];

export function ElevationPage() {
  return (
    <>
      {/* ── Header ── */}
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
        <h1 className="docs-page-title text-display-1">Elevation</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            Zen uses a layered shadow system to express depth. Bottom shadows raise surfaces toward the viewer; top shadows anchor surfaces from below. Effect tokens combine shadow with backdrop blur for frosted-glass surfaces, and adapt automatically to dark mode.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        {/* ── When to Use ── */}
        <div className="docs-when-to-use">
          <h3 className="text-body-base-primary" style={{ marginBottom: 'var(--gap-small)' }}>When to use</h3>
          <ul className="text-body-small">
            <li>Use <strong>Bottom levels 1–4</strong> for surfaces that float above the canvas (cards, popovers, modals).</li>
            <li>Use <strong>Top levels 1–4</strong> for surfaces anchored to the bottom of the viewport (bottom sheets, sticky bars).</li>
            <li>Use <strong>Action level 1</strong> for tactile pressable controls — keep it subtle.</li>
            <li>Use <strong>Effect</strong> tokens (shadow + blur) for frosted-glass surfaces. Always layer them over a saturated backdrop.</li>
            <li>Higher levels imply higher importance — don't stack two equal levels next to each other.</li>
          </ul>
        </div>

        {/* ── Bottom Shadows ── */}
        <h2 className="docs-section-title text-h3">Bottom shadows</h2>
        <div className="docs-demo-grid">
          {BOTTOM_LEVELS.map((n) => (
            <DemoBlock
              key={`bot-${n}`}
              title={`Bottom level ${n}`}
              description={`Token: --shadow-bottom-level-${n}`}
            >
              <ShadowBox token={`--shadow-bottom-level-${n}`} label={`Level ${n}`} />
            </DemoBlock>
          ))}
        </div>

        {/* ── Top Shadows ── */}
        <h2 className="docs-section-title text-h3">Top shadows</h2>
        <div className="docs-demo-grid">
          {TOP_LEVELS.map((n) => (
            <DemoBlock
              key={`top-${n}`}
              title={`Top level ${n}`}
              description={`Token: --shadow-top-level-${n}`}
            >
              <ShadowBox token={`--shadow-top-level-${n}`} label={`Level ${n}`} />
            </DemoBlock>
          ))}
        </div>

        {/* ── Action Shadow ── */}
        <h2 className="docs-section-title text-h3">Action shadow</h2>
        <div className="docs-demo-grid">
          <DemoBlock
            title="Action level 1"
            description="Subtle 1px shadow for pressable controls. Token: --shadow-action-level-1"
          >
            <ShadowBox token="--shadow-action-level-1" label="Pressable" />
          </DemoBlock>
        </div>

        {/* ── Effects (shadow + blur) ── */}
        <h2 className="docs-section-title text-h3">Effects (shadow + blur)</h2>
        <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)', marginBottom: 'var(--gap-medium)' }}>
          Combined tokens for frosted-glass surfaces. Each demo places a panel over a vivid gradient so the backdrop blur is visible.
        </p>
        <div className="docs-demo-grid">
          <DemoBlock
            title="Container"
            description="--effect-container-shadow + --effect-container-blur (120px)"
          >
            <EffectPanel shadowToken="--effect-container-shadow" blurToken="--effect-container-blur" label="Container" />
          </DemoBlock>
          <DemoBlock
            title="Popover"
            description="--effect-popover-shadow + --effect-popover-blur (60px)"
          >
            <EffectPanel shadowToken="--effect-popover-shadow" blurToken="--effect-popover-blur" label="Popover" />
          </DemoBlock>
          <DemoBlock
            title="Overlay"
            description="--effect-overlay-blur (100px) — no shadow"
          >
            <EffectPanel blurToken="--effect-overlay-blur" label="Overlay" />
          </DemoBlock>
          <DemoBlock
            title="Input"
            description="--effect-input-shadow (inset) + --effect-input-blur (40px)"
          >
            <EffectPanel shadowToken="--effect-input-shadow" blurToken="--effect-input-blur" label="Input" inset />
          </DemoBlock>
        </div>

        {/* ── Token Reference ── */}
        <h2 className="docs-section-title text-h3">Token reference</h2>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell label="Token" />
                <TableHeaderCell label="Value" />
                <TableHeaderCell label="Usage" />
              </TableRow>
            </TableHead>
            <TableBody>
              {TOKEN_REFERENCE.map((row) => (
                <TableRow key={row.token}>
                  <TableCell>
                    <code style={{ fontSize: 12, fontFamily: 'var(--font-family-dev)' }}>{row.token}</code>
                  </TableCell>
                  <TableCell>
                    <ValueCell token={row.token} />
                  </TableCell>
                  <TableCell>
                    <span className="text-body-small">{row.usage}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>
    </>
  );
}
