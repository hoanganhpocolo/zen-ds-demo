import { useState, useMemo } from 'react';
import { Badge } from '@zen/components';
import auditData from '../../../packages/components/src/audit-data.json';
import styles from './audit-page.module.css';

const CHECK_IDS = [
  'forwardRef', 'displayName', 'propsExport', 'sizeNaming',
  'iconStrategy', 'accessibility', 'fileSize', 'cssTokens', 'fieldShell',
] as const;

const CHECK_LABELS: Record<string, string> = {
  forwardRef: 'Ref',
  displayName: 'Name',
  propsExport: 'Props',
  sizeNaming: 'Size',
  iconStrategy: 'Icons',
  accessibility: 'A11y',
  fileSize: 'Lines',
  cssTokens: 'CSS',
  fieldShell: 'Field',
};

/** Map component directory names to docs page IDs */
const PAGE_MAP: Record<string, string> = {
  Accordion: 'accordion', AlertBanner: 'alert-banner', Avatar: 'avatar',
  Badge: 'badge', BottomSheet: 'bottom-sheet', Breadcrumb: 'breadcrumb',
  Button: 'button', Calendar: 'calendar', Checkbox: 'checkbox', Chip: 'chip',
  Dialog: 'dialog', Divider: 'divider', InlineMessage: 'inline-message',
  InputField: 'input', InputHeading: 'input-heading', ListItem: 'list-item',
  MetricCard: 'metric-card', Modal: 'modal', NumberField: 'number',
  Pagination: 'pagination', Popover: 'popover', Progress: 'progress',
  Radio: 'radio', Rating: 'rating', Search: 'search', SelectField: 'select',
  Segmented: 'segmented', Sidebar: 'sidebar', SidePanel: 'side-panel',
  Slider: 'slider', Stepper: 'stepper', Tab: 'tab', Table: 'table',
  Tag: 'tag', TextArea: 'textarea', Toggle: 'toggle',
  TopNavigationMobile: 'top-nav-mobile', BottomNavigation: 'bottom-nav-mobile',
  FileUploader: 'uploader',
};

type SortKey = 'name' | 'score';
type Filter = 'all' | 'fail' | 'warn';

function statusClass(status: string) {
  if (status === 'pass') return styles['status-pass'];
  if (status === 'warn') return styles['status-warn'];
  if (status === 'fail') return styles['status-fail'];
  return styles['status-na'];
}

function statusLabel(status: string) {
  if (status === 'pass') return '\u2713';
  if (status === 'warn') return '~';
  if (status === 'fail') return '\u2717';
  return '-';
}

function scoreColor(score: number) {
  if (score >= 0.9) return 'var(--color-content-positive-primary)';
  if (score >= 0.7) return 'var(--color-content-warning-primary)';
  return 'var(--color-content-negative-primary)';
}

function scoreFillColor(score: number) {
  if (score >= 0.9) return 'var(--color-bg-fill-positive-solid-default)';
  if (score >= 0.7) return 'var(--color-bg-fill-warning-solid-default)';
  return 'var(--color-bg-fill-negative-solid-default)';
}

interface AuditPageProps {
  onNavigate?: (pageId: string) => void;
}

export function AuditPage({ onNavigate }: AuditPageProps) {
  const [sortBy, setSortBy] = useState<SortKey>('name');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const [filter, setFilter] = useState<Filter>('all');

  const { summary, components } = auditData;

  const filtered = useMemo(() => {
    let list = [...components];

    // Filter
    if (filter === 'fail') {
      list = list.filter((c) =>
        Object.values(c.checks).some((ch: any) => ch.status === 'fail')
      );
    } else if (filter === 'warn') {
      list = list.filter((c) =>
        Object.values(c.checks).some((ch: any) => ch.status === 'warn' || ch.status === 'fail')
      );
    }

    // Sort
    list.sort((a, b) => {
      const cmp = sortBy === 'name'
        ? a.name.localeCompare(b.name)
        : a.score - b.score;
      return sortDir === 'asc' ? cmp : -cmp;
    });

    return list;
  }, [components, filter, sortBy, sortDir]);

  const toggleSort = (key: SortKey) => {
    if (sortBy === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(key);
      setSortDir(key === 'score' ? 'desc' : 'asc');
    }
  };

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
        <h1 className="docs-page-title text-display-1">Component Audit</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            Quality checks across {summary.total} components. Generated {new Date(auditData.generated).toLocaleDateString()}.
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="docs-page-body">

      {/* Summary */}
      <div className={styles.summary}>
        <span className={styles['summary-score']}>{Math.round(summary.averageScore * 100)}%</span>
        <div className={styles['summary-stat']}>
          <Badge label={`${summary.passCount} pass`} color="positive" variant="subtle" size="s" dot={false} />
        </div>
        <div className={styles['summary-stat']}>
          <Badge label={`${summary.warnCount} warn`} color="warning" variant="subtle" size="s" dot={false} />
        </div>
        <div className={styles['summary-stat']}>
          <Badge label={`${summary.failCount} fail`} color="negative" variant="subtle" size="s" dot={false} />
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filters}>
        {(['all', 'fail', 'warn'] as Filter[]).map((f) => (
          <Badge
            key={f}
            label={f === 'all' ? `All (${components.length})` : f === 'fail' ? 'Failures' : 'Warnings+'}
            color={filter === f ? 'accent' : 'neutral'}
            variant={filter === f ? 'solid' : 'ghost'}
            size="s"
            dot={false}
            onClick={() => setFilter(f)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border-neutral-default)' }}>
              <th
                style={{ textAlign: 'left', padding: '8px 12px', cursor: 'pointer', userSelect: 'none' }}
                onClick={() => toggleSort('name')}
              >
                Component {sortBy === 'name' ? (sortDir === 'asc' ? '\u25B2' : '\u25BC') : ''}
              </th>
              <th
                style={{ textAlign: 'left', padding: '8px 12px', cursor: 'pointer', userSelect: 'none', minWidth: 110 }}
                onClick={() => toggleSort('score')}
              >
                Score {sortBy === 'score' ? (sortDir === 'asc' ? '\u25B2' : '\u25BC') : ''}
              </th>
              {CHECK_IDS.map((id) => (
                <th key={id} style={{ textAlign: 'center', padding: '8px 4px', fontSize: '11px' }} title={id}>
                  {CHECK_LABELS[id]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((comp) => (
              <tr key={comp.name} style={{ borderBottom: '1px solid var(--color-border-neutral-subtle)' }}>
                <td style={{ padding: '6px 12px' }}>
                  {PAGE_MAP[comp.name] ? (
                    <span className={styles['component-link']} onClick={() => onNavigate?.(PAGE_MAP[comp.name])}>
                      {comp.name}
                    </span>
                  ) : (
                    comp.name
                  )}
                </td>
                <td style={{ padding: '6px 12px' }}>
                  <div className={styles['score-bar']}>
                    <div className={styles['score-fill']}>
                      <div
                        className={styles['score-fill-inner']}
                        style={{ width: `${Math.round(comp.score * 100)}%`, background: scoreFillColor(comp.score) }}
                      />
                    </div>
                    <span className={styles['score-text']} style={{ color: scoreColor(comp.score) }}>
                      {Math.round(comp.score * 100)}%
                    </span>
                  </div>
                </td>
                {CHECK_IDS.map((id) => {
                  const check = (comp.checks as any)[id];
                  return (
                    <td key={id} style={{ textAlign: 'center', padding: '6px 4px' }}>
                      <span className={`${styles['status-cell']} ${statusClass(check.status)}`} title={check.detail}>
                        {statusLabel(check.status)}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <p style={{ textAlign: 'center', padding: '24px', color: 'var(--color-content-neutral-tertiary)' }}>
          No components match the current filter.
        </p>
      )}

      </div>
    </>
  );
}
