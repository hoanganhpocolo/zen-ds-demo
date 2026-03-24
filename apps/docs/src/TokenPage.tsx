import { useEffect, useState } from 'react';
import {
  Table, TableContainer, TableHead, TableBody,
  TableRow, TableHeaderCell, TableCell,
} from '@zen/components';
import styles from './TokenPage.module.css';

// ── Color Token Table components ───────────────────────────────────────────────

type SwatchType = 'bg' | 'content' | 'border' | 'shadow';

interface SwatchItem {
  token: string;
  label: string;
  darkBg?: boolean;
  shadow?: string;
}

function TableColorSwatch({ token, type = 'bg', darkBg, shadow }: { token: string; type?: SwatchType; darkBg?: boolean; shadow?: string }) {
  if (type === 'shadow') {
    return (
      <div
        className={styles.tableSwatch}
        style={{ background: 'var(--color-bg-surface-default)', boxShadow: `${shadow} var(${token})` }}
      />
    );
  }
  if (type === 'content') {
    return (
      <div
        className={styles.tableSwatch}
        style={{ background: darkBg ? 'var(--color-bg-fill-neutral-solid-default)' : 'var(--color-bg-surface-default)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <span style={{ color: `var(${token})`, fontSize: 12, fontWeight: 700, lineHeight: 1 }}>Aa</span>
      </div>
    );
  }
  if (type === 'border') {
    return (
      <div
        className={styles.tableSwatch}
        style={{ background: 'var(--color-bg-surface-default)', border: `2px solid var(${token})` }}
      />
    );
  }
  const isAlpha = token.includes('alpha') || token.includes('ghost') || token.includes('flat') || token.includes('subtle');
  return (
    <div className={`${styles.tableSwatch} ${isAlpha ? styles.tableSwatchAlpha : ''}`}>
      <div style={{ position: 'absolute', inset: 0, background: `var(${token})`, borderRadius: 'inherit' }} />
    </div>
  );
}

function ValueBadge({ token }: { token: string }) {
  const [value, setValue] = useState('');
  useEffect(() => {
    const v = getComputedStyle(document.documentElement).getPropertyValue(token).trim();
    setValue(v);
  }, [token]);
  return <span className={styles.valueBadge}>{value || '—'}</span>;
}

function ColorTokenTable({ title, items, type }: { title: string; items: SwatchItem[]; type?: SwatchType }) {
  return (
    <div className={styles.colorTableGroup}>
      <p className={`text-capsline-s ${styles.colorTableTitle}`}>{title}</p>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell label="Name" />
              <TableHeaderCell label="Token" />
              <TableHeaderCell label="Value" />
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.token}>
                <TableCell>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-xsmall)' }}>
                    <TableColorSwatch token={item.token} type={type} darkBg={item.darkBg} shadow={item.shadow} />
                    <span className="text-body-small">{item.label}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <code className={styles.tokenCode}>{item.token}</code>
                </TableCell>
                <TableCell>
                  <ValueBadge token={item.token} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

// ── Typography ────────────────────────────────────────────────────────────────

const textStyles = [
  { cls: 'text-display-1',          label: 'Display 1',          meta: '60px / 68px · 600 · BT Solisiert' },
  { cls: 'text-display-2',          label: 'Display 2',          meta: '52px / 60px · 600 · BT Solisiert' },
  { cls: 'text-display-3',          label: 'Display 3',          meta: '46px / 52px · 600 · BT Solisiert' },
  { cls: 'text-display-4',          label: 'Display 4',          meta: '40px / 48px · 600 · BT Solisiert' },
  { cls: 'text-h1',                 label: 'H1',                 meta: '36px / 44px · 600 · Inter' },
  { cls: 'text-h2',                 label: 'H2',                 meta: '32px / 40px · 600 · Inter' },
  { cls: 'text-h3',                 label: 'H3',                 meta: '28px / 36px · 600 · Inter' },
  { cls: 'text-h4',                 label: 'H4',                 meta: '24px / 32px · 600 · Inter' },
  { cls: 'text-subheading',         label: 'Subheading',         meta: '20px / 28px · 500 · Inter' },
  { cls: 'text-body-extra',         label: 'Body Extra',         meta: '18px / 26px · 400 · Inter' },
  { cls: 'text-body-extra-primary', label: 'Body Extra Primary', meta: '18px / 26px · 600 · Inter' },
  { cls: 'text-body-base',          label: 'Body Base',          meta: '16px / 24px · 400 · Inter' },
  { cls: 'text-body-base-primary',  label: 'Body Base Primary',  meta: '16px / 24px · 600 · Inter' },
  { cls: 'text-body-small',         label: 'Body Small',         meta: '14px / 20px · 400 · Inter' },
  { cls: 'text-caption',            label: 'Caption',            meta: '12px / 16px · 400 · Inter' },
  { cls: 'text-small-label',        label: 'Small Label',        meta: '10px / 16px · 500 · Inter' },
  { cls: 'text-capsline-m',         label: 'Capsline M',         meta: '16px / 20px · 500 · uppercase' },
  { cls: 'text-capsline-s',         label: 'Capsline S',         meta: '14px / 16px · 500 · uppercase' },
  { cls: 'text-button-label-xl',    label: 'Button XL',          meta: '20px / 32px · 600 · Inter' },
  { cls: 'text-button-label-l',     label: 'Button L',           meta: '16px / 24px · 600 · Inter' },
  { cls: 'text-button-label-m',     label: 'Button M',           meta: '16px / 24px · 600 · Inter' },
  { cls: 'text-button-label-s',     label: 'Button S',           meta: '16px / 24px · 600 · Inter' },
  { cls: 'text-button-label-xs',    label: 'Button XS',          meta: '14px / 16px · 600 · Inter' },
  { cls: 'text-badge-label-m',      label: 'Badge Label M',      meta: '14px / 16px · 500 · Inter' },
  { cls: 'text-badge-label-s',      label: 'Badge Label S',      meta: '12px / 16px · 500 · Inter' },
];

// ── Spacing ───────────────────────────────────────────────────────────────────

const gapScale = [
  { token: '--gap-3xsmall', label: '3xsmall', px: 2 },
  { token: '--gap-2xsmall', label: '2xsmall', px: 4 },
  { token: '--gap-xsmall',  label: 'xsmall',  px: 8 },
  { token: '--gap-small',   label: 'small',   px: 12 },
  { token: '--gap-medium',  label: 'medium',  px: 16 },
  { token: '--gap-large',   label: 'large',   px: 24 },
  { token: '--gap-xlarge',  label: 'xlarge',  px: 32 },
  { token: '--gap-2xlarge', label: '2xlarge', px: 40 },
  { token: '--gap-3xlarge', label: '3xlarge', px: 48 },
  { token: '--gap-giant',   label: 'giant',   px: 64 },
  { token: '--gap-xgiant',  label: 'xgiant',  px: 88 },
  { token: '--gap-2xgiant', label: '2xgiant', px: 144 },
];

const paddingScale = [
  { token: '--padding-3xsmall', label: '3xsmall', px: 2 },
  { token: '--padding-2xsmall', label: '2xsmall', px: 4 },
  { token: '--padding-xsmall',  label: 'xsmall',  px: 8 },
  { token: '--padding-small',   label: 'small',   px: 12 },
  { token: '--padding-medium',  label: 'medium',  px: 16 },
  { token: '--padding-large',   label: 'large',   px: 20 },
  { token: '--padding-xlarge',  label: 'xlarge',  px: 24 },
  { token: '--padding-2xlarge', label: '2xlarge', px: 32 },
  { token: '--padding-3xlarge', label: '3xlarge', px: 40 },
  { token: '--padding-4xlarge', label: '4xlarge', px: 48 },
];

// ── Radius ────────────────────────────────────────────────────────────────────

const radiusScale = [
  { token: '--radius-2xsmall', label: '2xsmall' },
  { token: '--radius-xsmall',  label: 'xsmall' },
  { token: '--radius-small',   label: 'small' },
  { token: '--radius-base',    label: 'base' },
  { token: '--radius-large',   label: 'large' },
  { token: '--radius-xlarge',  label: 'xlarge' },
  { token: '--radius-2xlarge', label: '2xlarge' },
  { token: '--radius-3xlarge', label: '3xlarge' },
  { token: '--radius-giant',   label: 'giant' },
  { token: '--radius-rounded', label: 'rounded' },
];

// ── Token data ────────────────────────────────────────────────────────────────

const bgBase: SwatchItem[] = [
  { token: '--color-bg-canvas-default', label: 'Canvas Default' },
  { token: '--color-bg-canvas-alt',     label: 'Canvas Alt' },
  { token: '--color-bg-surface-default', label: 'Surface Default' },
  { token: '--color-bg-surface-alt',    label: 'Surface Alt' },
];

const bgNeutral: SwatchItem[] = [
  { token: '--color-bg-fill-neutral-ghost-default',  label: 'Ghost Default' },
  { token: '--color-bg-fill-neutral-ghost-hover',    label: 'Ghost Hover' },
  { token: '--color-bg-fill-neutral-ghost-pressed',  label: 'Ghost Pressed' },
  { token: '--color-bg-fill-neutral-subtle-default', label: 'Subtle Default' },
  { token: '--color-bg-fill-neutral-subtle-hover',   label: 'Subtle Hover' },
  { token: '--color-bg-fill-neutral-subtle-pressed', label: 'Subtle Pressed' },
  { token: '--color-bg-fill-neutral-solid-default',  label: 'Solid Default' },
  { token: '--color-bg-fill-neutral-solid-hover',    label: 'Solid Hover' },
  { token: '--color-bg-fill-neutral-solid-pressed',  label: 'Solid Pressed' },
  { token: '--color-bg-fill-neutral-flat-hover',     label: 'Flat Hover' },
  { token: '--color-bg-fill-neutral-flat-pressed',   label: 'Flat Pressed' },
  { token: '--color-bg-fill-disabled',               label: 'Disabled' },
];

const bgAccent: SwatchItem[] = [
  { token: '--color-bg-fill-accent-ghost-default',  label: 'Ghost Default' },
  { token: '--color-bg-fill-accent-ghost-hover',    label: 'Ghost Hover' },
  { token: '--color-bg-fill-accent-ghost-pressed',  label: 'Ghost Pressed' },
  { token: '--color-bg-fill-accent-subtle-default', label: 'Subtle Default' },
  { token: '--color-bg-fill-accent-subtle-hover',   label: 'Subtle Hover' },
  { token: '--color-bg-fill-accent-subtle-pressed', label: 'Subtle Pressed' },
  { token: '--color-bg-fill-accent-solid-default',  label: 'Solid Default' },
  { token: '--color-bg-fill-accent-solid-hover',    label: 'Solid Hover' },
  { token: '--color-bg-fill-accent-solid-pressed',  label: 'Solid Pressed' },
  { token: '--color-bg-fill-accent-flat-hover',     label: 'Flat Hover' },
  { token: '--color-bg-fill-accent-flat-pressed',   label: 'Flat Pressed' },
];

function makeStatusBg(name: string): SwatchItem[] {
  return [
    { token: `--color-bg-fill-${name}-subtle-default`, label: 'Subtle Default' },
    { token: `--color-bg-fill-${name}-subtle-hover`,   label: 'Subtle Hover' },
    { token: `--color-bg-fill-${name}-subtle-pressed`, label: 'Subtle Pressed' },
    { token: `--color-bg-fill-${name}-solid-default`,  label: 'Solid Default' },
    { token: `--color-bg-fill-${name}-solid-hover`,    label: 'Solid Hover' },
    { token: `--color-bg-fill-${name}-solid-pressed`,  label: 'Solid Pressed' },
    { token: `--color-bg-fill-${name}-flat-hover`,     label: 'Flat Hover' },
  ];
}

const contentNeutral: SwatchItem[] = [
  { token: '--color-content-neutral-primary',   label: 'Primary' },
  { token: '--color-content-neutral-secondary', label: 'Secondary' },
  { token: '--color-content-neutral-tertiary',  label: 'Tertiary' },
  { token: '--color-content-placeholder',       label: 'Placeholder' },
  { token: '--color-content-disabled',          label: 'Disabled' },
  { token: '--color-content-link',              label: 'Link' },
  { token: '--color-content-inverse',           label: 'Inverse', darkBg: true },
  { token: '--color-content-on-colors',         label: 'On Colors', darkBg: true },
  { token: '--color-content-on-accent',         label: 'On Accent', darkBg: true },
];

function makeStatusContent(name: string): SwatchItem[] {
  return [
    { token: `--color-content-${name}-primary`,   label: 'Primary' },
    { token: `--color-content-${name}-secondary`, label: 'Secondary' },
    { token: `--color-content-${name}-highlight`, label: 'Highlight' },
  ];
}

const borderNeutral: SwatchItem[] = [
  { token: '--color-border-neutral-subtle-default', label: 'Subtle Default' },
  { token: '--color-border-neutral-subtle-hover',   label: 'Subtle Hover' },
  { token: '--color-border-neutral-solid-default',  label: 'Solid Default' },
  { token: '--color-border-neutral-solid-hover',    label: 'Solid Hover' },
  { token: '--color-border-disabled',               label: 'Disabled' },
];

const borderAccent: SwatchItem[] = [
  { token: '--color-border-accent-subtle-default', label: 'Subtle Default' },
  { token: '--color-border-accent-subtle-hover',   label: 'Subtle Hover' },
  { token: '--color-border-accent-solid-default',  label: 'Solid Default' },
  { token: '--color-border-accent-solid-hover',    label: 'Solid Hover' },
];

const borderFocused: SwatchItem[] = [
  { token: '--color-border-focused-neutral-solid',  label: 'Neutral Solid' },
  { token: '--color-border-focused-neutral-subtle', label: 'Neutral Subtle' },
  { token: '--color-border-focused-accent-solid',   label: 'Accent Solid' },
  { token: '--color-border-focused-accent-subtle',  label: 'Accent Subtle' },
  { token: '--color-border-focused-negative-solid', label: 'Negative Solid' },
];

function makeStatusBorder(name: string): SwatchItem[] {
  return [
    { token: `--color-border-${name}-subtle-default`, label: 'Subtle Default' },
    { token: `--color-border-${name}-solid-default`,  label: 'Solid Default' },
    { token: `--color-border-${name}-solid-hover`,    label: 'Solid Hover' },
  ];
}

const shadows: SwatchItem[] = [
  { token: '--color-shadow-neutral-light',  label: 'Light',  shadow: '0 1px 3px' },
  { token: '--color-shadow-neutral-medium', label: 'Medium', shadow: '0 2px 8px' },
  { token: '--color-shadow-neutral-strong', label: 'Strong', shadow: '0 4px 16px' },
  { token: '--color-shadow-neutral-heavy',  label: 'Heavy',  shadow: '0 8px 32px' },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export function TokenPage() {
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
        <h1 className="docs-page-title text-display-1">Tokens</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            Design tokens are the single source of truth for color, typography, spacing, and radius — generated directly from Figma variables.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        {/* ── Colors ── */}
        <h2 className="text-h3 docs-section-title">Background</h2>

        <ColorTokenTable title="Base"     items={bgBase} />
        <ColorTokenTable title="Neutral"  items={bgNeutral} />
        <ColorTokenTable title="Accent"   items={bgAccent} />
        <ColorTokenTable title="Positive" items={makeStatusBg('positive')} />
        <ColorTokenTable title="Negative" items={makeStatusBg('negative')} />
        <ColorTokenTable title="Warning"  items={makeStatusBg('warning')} />
        <ColorTokenTable title="Info"     items={makeStatusBg('info')} />

        <h2 className="text-h3 docs-section-title">Content</h2>

        <ColorTokenTable title="Neutral"  items={contentNeutral}              type="content" />
        <ColorTokenTable title="Accent"   items={makeStatusContent('accent')} type="content" />
        <ColorTokenTable title="Positive" items={makeStatusContent('positive')} type="content" />
        <ColorTokenTable title="Negative" items={makeStatusContent('negative')} type="content" />
        <ColorTokenTable title="Warning"  items={makeStatusContent('warning')}  type="content" />
        <ColorTokenTable title="Info"     items={makeStatusContent('info')}     type="content" />

        <h2 className="text-h3 docs-section-title">Border</h2>

        <ColorTokenTable title="Neutral"  items={borderNeutral} type="border" />
        <ColorTokenTable title="Accent"   items={borderAccent}  type="border" />
        <ColorTokenTable title="Focused"  items={borderFocused} type="border" />
        <ColorTokenTable title="Positive" items={makeStatusBorder('positive')} type="border" />
        <ColorTokenTable title="Negative" items={makeStatusBorder('negative')} type="border" />
        <ColorTokenTable title="Warning"  items={makeStatusBorder('warning')}  type="border" />
        <ColorTokenTable title="Info"     items={makeStatusBorder('info')}     type="border" />

        <h2 className="text-h3 docs-section-title">Shadow</h2>
        <ColorTokenTable title="Neutral" items={shadows} type="shadow" />

        {/* ── Typography ── */}
        <h2 className="text-h3 docs-section-title">Typography</h2>
        <table className={styles.typeTable}>
          <thead>
            <tr className={styles.typeRow}>
              <th className={`text-capsline-s ${styles.typeCell}`} style={{ color: 'var(--color-content-neutral-tertiary)', width: '40%' }}>Sample</th>
              <th className={`text-capsline-s ${styles.typeCell}`} style={{ color: 'var(--color-content-neutral-tertiary)', width: '25%' }}>Class</th>
              <th className={`text-capsline-s ${styles.typeCell}`} style={{ color: 'var(--color-content-neutral-tertiary)' }}>Spec</th>
            </tr>
          </thead>
          <tbody>
            {textStyles.map(({ cls, label, meta }) => (
              <tr key={cls} className={styles.typeRow}>
                <td className={styles.typeCell}>
                  <span className={`${cls} ${styles.typeSample}`}>{label}</span>
                </td>
                <td className={styles.typeCell}>
                  <code className="docs-code">.{cls}</code>
                </td>
                <td className={styles.typeCell}>
                  <span className={`text-caption ${styles.typeMeta}`}>{meta}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ── Spacing ── */}
        <h2 className="text-h3 docs-section-title">Spacing — Gap</h2>
        <div className={styles.spacingList}>
          {gapScale.map(({ token, label, px }) => (
            <div key={token} className={styles.spacingRow}>
              <div className={styles.spacingMeta}>
                <code className={`text-caption ${styles.spacingToken}`}>{token}</code>
                <span className={`text-caption ${styles.spacingValue}`}>{px}px</span>
              </div>
              <div className={styles.spacingBar} style={{ width: px * 2 }} />
            </div>
          ))}
        </div>

        <h2 className="text-h3 docs-section-title">Spacing — Padding</h2>
        <div className={styles.spacingList}>
          {paddingScale.map(({ token, label, px }) => (
            <div key={token} className={styles.spacingRow}>
              <div className={styles.spacingMeta}>
                <code className={`text-caption ${styles.spacingToken}`}>{token}</code>
                <span className={`text-caption ${styles.spacingValue}`}>{px}px</span>
              </div>
              <div className={styles.spacingBar} style={{ width: px * 2 }} />
            </div>
          ))}
        </div>

        {/* ── Radius ── */}
        <h2 className="text-h3 docs-section-title">Corner Radius</h2>
        <div className={styles.radiusGrid}>
          {radiusScale.map(({ token, label }) => (
            <div key={token} className={styles.radiusItem}>
              <div
                className={styles.radiusBox}
                style={{ borderRadius: `var(${token})` }}
              />
              <div className={styles.radiusMeta}>
                <code className={`text-small-label ${styles.radiusToken}`}>{label}</code>
                <span className="text-small-label" style={{ color: 'var(--color-content-neutral-tertiary)' }}>{token}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
