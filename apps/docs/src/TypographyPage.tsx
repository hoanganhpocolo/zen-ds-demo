import {
  Table, TableContainer, TableHead, TableBody,
  TableRow, TableHeaderCell, TableCell,
} from '@zen/components';

interface TextStyle {
  cls: string;
  label: string;
  /** Display sample text (defaults to label) */
  sample?: string;
  size: number;       // px
  lineHeight: number; // px
  weight: 400 | 500 | 600;
  family: 'BT Solisiert' | 'Inter';
  /** Special transformations like uppercase */
  notes?: string;
}

const DISPLAY: TextStyle[] = [
  { cls: 'text-display-1', label: 'Display 1', size: 60, lineHeight: 68, weight: 600, family: 'BT Solisiert' },
  { cls: 'text-display-2', label: 'Display 2', size: 52, lineHeight: 60, weight: 600, family: 'BT Solisiert' },
  { cls: 'text-display-3', label: 'Display 3', size: 46, lineHeight: 52, weight: 600, family: 'BT Solisiert' },
  { cls: 'text-display-4', label: 'Display 4', size: 40, lineHeight: 48, weight: 600, family: 'BT Solisiert' },
];

const HEADING: TextStyle[] = [
  { cls: 'text-h1', label: 'H1', size: 36, lineHeight: 44, weight: 600, family: 'Inter' },
  { cls: 'text-h2', label: 'H2', size: 32, lineHeight: 40, weight: 600, family: 'Inter' },
  { cls: 'text-h3', label: 'H3', size: 28, lineHeight: 36, weight: 600, family: 'Inter' },
  { cls: 'text-h4', label: 'H4', size: 24, lineHeight: 32, weight: 600, family: 'Inter' },
];

const BODY: TextStyle[] = [
  { cls: 'text-subheading',         label: 'Subheading',         size: 20, lineHeight: 28, weight: 500, family: 'Inter' },
  { cls: 'text-body-extra',         label: 'Body Extra',         size: 18, lineHeight: 26, weight: 400, family: 'Inter' },
  { cls: 'text-body-extra-primary', label: 'Body Extra Primary', size: 18, lineHeight: 26, weight: 600, family: 'Inter' },
  { cls: 'text-body-base',          label: 'Body Base',          size: 16, lineHeight: 24, weight: 400, family: 'Inter' },
  { cls: 'text-body-base-primary',  label: 'Body Base Primary',  size: 16, lineHeight: 24, weight: 600, family: 'Inter' },
  { cls: 'text-body-small',         label: 'Body Small',         size: 14, lineHeight: 20, weight: 400, family: 'Inter' },
  { cls: 'text-caption',            label: 'Caption',            size: 12, lineHeight: 16, weight: 400, family: 'Inter' },
];

const LABELS: TextStyle[] = [
  { cls: 'text-capsline-m',  label: 'Capsline M',  sample: 'CAPSLINE MEDIUM', size: 16, lineHeight: 20, weight: 500, family: 'Inter', notes: 'uppercase' },
  { cls: 'text-capsline-s',  label: 'Capsline S',  sample: 'CAPSLINE SMALL',  size: 14, lineHeight: 16, weight: 500, family: 'Inter', notes: 'uppercase' },
  { cls: 'text-small-label', label: 'Small Label', size: 10, lineHeight: 16, weight: 500, family: 'Inter' },
];

const BUTTON: TextStyle[] = [
  { cls: 'text-button-label-xl', label: 'Button XL', size: 20, lineHeight: 32, weight: 600, family: 'Inter' },
  { cls: 'text-button-label-l',  label: 'Button L',  size: 16, lineHeight: 24, weight: 600, family: 'Inter' },
  { cls: 'text-button-label-m',  label: 'Button M',  size: 16, lineHeight: 24, weight: 600, family: 'Inter' },
  { cls: 'text-button-label-s',  label: 'Button S',  size: 16, lineHeight: 24, weight: 600, family: 'Inter' },
  { cls: 'text-button-label-xs', label: 'Button XS', size: 14, lineHeight: 16, weight: 600, family: 'Inter' },
];

const BADGE: TextStyle[] = [
  { cls: 'text-badge-label-m', label: 'Badge M', size: 14, lineHeight: 16, weight: 500, family: 'Inter' },
  { cls: 'text-badge-label-s', label: 'Badge S', size: 12, lineHeight: 16, weight: 500, family: 'Inter' },
];

function TypeSection({ title, items }: { title: string; items: TextStyle[] }) {
  return (
    <div style={{ marginBottom: 'var(--gap-3xlarge)' }}>
      <h2 className="docs-section-title text-h3" style={{ marginBottom: 'var(--gap-medium)' }}>{title}</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell label="Sample" />
              <TableHeaderCell label="Class" />
              <TableHeaderCell label="Size / Line" />
              <TableHeaderCell label="Weight" />
              <TableHeaderCell label="Family" />
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((s) => (
              <TableRow key={s.cls}>
                <TableCell>
                  <span className={s.cls}>{s.sample ?? s.label}</span>
                </TableCell>
                <TableCell>
                  <code style={{ fontFamily: 'var(--font-family-dev)', fontSize: 12 }}>.{s.cls}</code>
                </TableCell>
                <TableCell>
                  <span className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)' }}>{s.size} / {s.lineHeight}</span>
                </TableCell>
                <TableCell>
                  <span className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)' }}>{s.weight}</span>
                </TableCell>
                <TableCell>
                  <span className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)' }}>
                    {s.family}{s.notes ? ` · ${s.notes}` : ''}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

function FontFamilyCard({ family, sample, role, weights, note }: {
  family: string; sample: string; role: string; weights: string; note?: string;
}) {
  return (
    <div style={{
      padding: 'var(--padding-2xlarge)',
      background: 'var(--color-bg-surface-default)',
      border: '1px solid var(--color-border-neutral-subtle-default)',
      borderRadius: 'var(--radius-2xlarge)',
      flex: 1,
    }}>
      <p className="text-capsline-s" style={{ color: 'var(--color-content-neutral-tertiary)', marginBottom: 'var(--gap-xsmall)' }}>{role}</p>
      <p style={{ fontFamily: family, fontSize: 56, lineHeight: 1, fontWeight: 600, marginBottom: 'var(--gap-medium)', color: 'var(--color-content-neutral-primary)' }}>{sample}</p>
      <div className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)' }}>
        <p style={{ marginBottom: 4 }}><strong>{family}</strong></p>
        <p style={{ marginBottom: note ? 4 : 0 }}>Weights: {weights}</p>
        {note && <p style={{ color: 'var(--color-content-neutral-tertiary)' }}>{note}</p>}
      </div>
    </div>
  );
}

export function TypographyPage() {
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
        <h1 className="docs-page-title text-display-1">Typography</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            Two type families power Zen: <strong>BT Solisiert</strong> for editorial display, and <strong>Inter</strong> for the rest of the UI. Sizes follow a 1.14 modular scale on a 16px base, with line-heights tuned per role.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        {/* ── Font families ── */}
        <h2 className="docs-section-title text-h3" style={{ marginBottom: 'var(--gap-medium)' }}>Font families</h2>
        <div style={{ display: 'flex', gap: 'var(--gap-medium)', marginBottom: 'var(--gap-3xlarge)', flexWrap: 'wrap' }}>
          <FontFamilyCard
            role="Display"
            family="'BT Solisiert', sans-serif"
            sample="Aa Bb"
            weights="600 – 800 (variable axis)"
            note="Self-hosted WOFF2 (Latin + Vietnamese subset, ~18 KB)"
          />
          <FontFamilyCard
            role="UI · Body · Mono"
            family="Inter, sans-serif"
            sample="Aa Bb"
            weights="400 / 500 / 600 / 700"
            note="Loaded from Google Fonts"
          />
        </div>

        {/* ── Sections ── */}
        <TypeSection title="Display" items={DISPLAY} />
        <TypeSection title="Headings" items={HEADING} />
        <TypeSection title="Body" items={BODY} />
        <TypeSection title="Labels" items={LABELS} />
        <TypeSection title="Buttons" items={BUTTON} />
        <TypeSection title="Badges" items={BADGE} />

      </div>
    </>
  );
}
