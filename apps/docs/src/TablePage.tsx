import { useEffect, useRef, useState } from 'react';
import { ApiTable } from './ApiTable';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  TableExpandRow,
  TextCell,
  LeadingCell,
  DockIconCell,
  TrendCell,
  ActionCell,
  Avatar,
  AvatarGroup,
  Badge,
  Tag,
  Checkbox,
  ProgressBar,
  Popover,
  PopoverItem,
} from '@zen/components';
import { TrendUp01, TrendDown01, Minus, DotsHorizontal, Edit01, Trash, EyeOff } from '@zen/icons/line';
import { DemoBlock } from './DemoBlock';

/* ── Sample data ── */

type SortField = 'name' | 'revenue' | 'growth' | 'status' | null;
type SortDir = 'ascending' | 'descending';

const sampleRows = [
  {
    id: '1',
    name: 'Nguyễn Văn A',
    email: 'vanA@company.com',
    role: 'Product Manager',
    revenue: 12_400,
    growth: 12.5,
    growthDir: 'up' as const,
    status: 'active',
  },
  {
    id: '2',
    name: 'Trần Thị B',
    email: 'thiB@company.com',
    role: 'Designer',
    revenue: 8_200,
    growth: -3.2,
    growthDir: 'down' as const,
    status: 'inactive',
  },
  {
    id: '3',
    name: 'Lê Văn C',
    email: 'vanC@company.com',
    role: 'Engineer',
    revenue: 21_000,
    growth: 0,
    growthDir: 'neutral' as const,
    status: 'pending',
  },
  {
    id: '4',
    name: 'Phạm Thị D',
    email: 'thiD@company.com',
    role: 'Data Analyst',
    revenue: 15_600,
    growth: 7.8,
    growthDir: 'up' as const,
    status: 'active',
  },
  {
    id: '5',
    name: 'Hoàng Văn E',
    email: 'vanE@company.com',
    role: 'Backend Engineer',
    revenue: 9_850,
    growth: -1.4,
    growthDir: 'down' as const,
    status: 'inactive',
  },
];

const statusMap: Record<string, { label: string; color: 'positive' | 'negative' | 'warning' }> = {
  active: { label: 'Active', color: 'positive' },
  inactive: { label: 'Inactive', color: 'negative' },
  pending: { label: 'Pending', color: 'warning' },
};

function fmt(n: number) {
  return '$' + n.toLocaleString('en-US');
}

function getInitial(name: string) {
  const parts = name.trim().split(' ');
  return (parts[parts.length - 1][0] ?? '').toUpperCase();
}

/* ── Row action popover ── */

function RowActionMenu({ rowId }: { rowId: string }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (anchorRef.current && !anchorRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div ref={anchorRef} style={{ position: 'relative', display: 'inline-flex' }}>
      <ActionCell
        icon={<DotsHorizontal size={20} />}
        onClick={() => setOpen((v) => !v)}
      />
      {open && (
        <div style={{ position: 'absolute', top: 'calc(100% + 4px)', right: 0, zIndex: 100, textAlign: 'left' }}>
          <Popover>
            <PopoverItem
              noCheck
              label="Edit"
              leading={<Edit01 size={16} />}
              onClick={() => { alert(`Edit row ${rowId}`); setOpen(false); }}
            />
            <PopoverItem
              noCheck
              label="Hide"
              leading={<EyeOff size={16} />}
              onClick={() => { setOpen(false); }}
            />
            <PopoverItem
              noCheck
              label="Delete"
              leading={<Trash size={16} />}
              onClick={() => { alert(`Delete row ${rowId}`); setOpen(false); }}
            />
          </Popover>
        </div>
      )}
    </div>
  );
}

/* ── Sortable table demo ── */

function SortableTable() {
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortDir, setSortDir] = useState<SortDir>('ascending');
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      if (sortDir === 'ascending') {
        setSortDir('descending');
      } else {
        setSortField(null);
      }
    } else {
      setSortField(field);
      setSortDir('ascending');
    }
  };

  const sorted = [...sampleRows].sort((a, b) => {
    if (!sortField) return 0;
    let av: string | number, bv: string | number;
    if (sortField === 'name') { av = a.name; bv = b.name; }
    else if (sortField === 'revenue') { av = a.revenue; bv = b.revenue; }
    else if (sortField === 'growth') { av = a.growth; bv = b.growth; }
    else { av = a.status; bv = b.status; }
    if (av < bv) return sortDir === 'ascending' ? -1 : 1;
    if (av > bv) return sortDir === 'ascending' ? 1 : -1;
    return 0;
  });

  const allChecked = sampleRows.every((r) => selected.has(r.id));
  const someChecked = sampleRows.some((r) => selected.has(r.id)) && !allChecked;

  const toggleAll = () => {
    if (allChecked) {
      setSelected(new Set());
    } else {
      setSelected(new Set(sampleRows.map((r) => r.id)));
    }
  };

  const toggleRow = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const dir = (f: SortField) => sortField === f ? sortDir : 'none';

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell
            control={
              <Checkbox
                checked={allChecked || someChecked}
                onChange={toggleAll}
              />
            }
          />
          <TableHeaderCell label="Name" sort={dir('name')} onSort={() => handleSort('name')} />
          <TableHeaderCell label="Role" />
          <TableHeaderCell label="Revenue" align="right" sort={dir('revenue')} onSort={() => handleSort('revenue')} />
          <TableHeaderCell label="Growth" align="right" sort={dir('growth')} onSort={() => handleSort('growth')} />
          <TableHeaderCell label="Status" sort={dir('status')} onSort={() => handleSort('status')} />
          <TableHeaderCell label="Actions" align="right" />
        </TableRow>
      </TableHead>
      <TableBody>
        {sorted.map((row) => {
          const s = statusMap[row.status];
          const sel = selected.has(row.id);
          const cellState = (col: SortField) =>
            sel ? 'selected' : 'default';
          const isSorted = (col: SortField) => !sel && sortField === col;
          return (
            <TableRow key={row.id}>
              <TableCell state={sel ? 'selected' : 'default'}>
                <Checkbox checked={sel} onChange={() => toggleRow(row.id)} />
              </TableCell>
              <TableCell state={cellState('name')} sorted={isSorted('name')}>
                <LeadingCell
                  media={<Avatar size="s">{getInitial(row.name)}</Avatar>}
                  primary={row.name}
                  caption={row.email}
                />
              </TableCell>
              <TableCell state={cellState(null)}>
                <TextCell primary={row.role} />
              </TableCell>
              <TableCell align="right" state={cellState('revenue')} sorted={isSorted('revenue')}>
                <TextCell primary={fmt(row.revenue)} bold />
              </TableCell>
              <TableCell align="right" state={cellState('growth')} sorted={isSorted('growth')}>
                <TrendCell
                  label={`${row.growth > 0 ? '+' : ''}${row.growth}%`}
                  direction={row.growthDir}
                  icon={
                    row.growthDir === 'up' ? (
                      <TrendUp01 size={16} />
                    ) : row.growthDir === 'down' ? (
                      <TrendDown01 size={16} />
                    ) : (
                      <Minus size={16} />
                    )
                  }
                />
              </TableCell>
              <TableCell state={cellState('status')} sorted={isSorted('status')}>
                <Badge color={s.color} variant="subtle" size="m" label={s.label} />
              </TableCell>
              <TableCell align="right" state={sel ? 'selected' : 'default'}>
                <RowActionMenu rowId={row.id} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

/* ── Header cell variants demo ── */

function HeaderVariants() {
  const [sort, setSort] = useState<'none' | 'ascending' | 'descending'>('none');
  const cycle = () =>
    setSort((s) => (s === 'none' ? 'ascending' : s === 'ascending' ? 'descending' : 'none'));

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell label="Static (no sort)" />
          <TableHeaderCell label="Sortable" sort={sort} onSort={cycle} />
          <TableHeaderCell label="Right align" align="right" sort={sort} onSort={cycle} />
          <TableHeaderCell
            control={<Checkbox checked={false} onChange={() => {}} />}
          />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell colSpan={4}>
            <TextCell primary="Click the sortable headers above" caption="State cycles: none → ascending → descending" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

/* ── Cell state demo ── */

function CellStates() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell label="State" />
          <TableHeaderCell label="Cell content" />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell><TextCell primary="Default" /></TableCell>
          <TableCell state="default"><TextCell primary="Default cell" caption="Normal state" /></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><TextCell primary="Hover (row)" /></TableCell>
          <TableCell state="hover"><TextCell primary="Hovered row" caption="All cells in row highlight" /></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><TextCell primary="Selected" /></TableCell>
          <TableCell state="selected"><TextCell primary="Selected cell" caption="Row selected" /></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><TextCell primary="Focused" /></TableCell>
          <TableCell state="focused"><TextCell primary="Focused cell" caption="Keyboard focus" /></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

/* ── Expandable rows demo ── */

const expandableData = [
  {
    id: 'design',
    name: 'Design Team',
    lead: 'Trần Thị B',
    members: 8,
    budget: 120_000,
    status: 'active' as const,
    children: [
      { id: 'ux', name: 'UX Research', lead: 'Nguyễn Thị C', members: 3, budget: 40_000, status: 'active' as const },
      { id: 'ui', name: 'UI Design',   lead: 'Lê Văn D',     members: 5, budget: 80_000, status: 'active' as const },
    ],
  },
  {
    id: 'engineering',
    name: 'Engineering',
    lead: 'Phạm Văn E',
    members: 20,
    budget: 350_000,
    status: 'active' as const,
    children: [
      { id: 'frontend', name: 'Frontend', lead: 'Hoàng Thị F', members: 7, budget: 110_000, status: 'active' as const },
      { id: 'backend',  name: 'Backend',  lead: 'Ngô Văn I',   members: 8, budget: 140_000, status: 'active' as const },
      { id: 'devops',   name: 'DevOps',   lead: 'Mai Thị K',   members: 5, budget: 100_000, status: 'inactive' as const },
    ],
  },
  {
    id: 'product',
    name: 'Product',
    lead: 'Bùi Văn L',
    members: 6,
    budget: 90_000,
    status: 'pending' as const,
    children: [],
  },
];

function ExpandableTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell control={null} />
          <TableHeaderCell label="Team" />
          <TableHeaderCell label="Lead" />
          <TableHeaderCell label="Budget" align="right" />
          <TableHeaderCell label="Status" />
        </TableRow>
      </TableHead>
      <TableBody>
        {expandableData.map((row) => {
          const s = statusMap[row.status];
          const hasChildren = row.children.length > 0;
          return (
            <TableExpandRow
              key={row.id}
              depth={0}
              rows={
                hasChildren
                  ? row.children.map((child) => {
                      const cs = statusMap[child.status];
                      return (
                        <TableExpandRow key={child.id} depth={1}>
                          <TableCell>
                            <LeadingCell
                              media={<Avatar size="xs">{getInitial(child.name)}</Avatar>}
                              primary={child.name}
                              caption={`${child.members} members`}
                            />
                          </TableCell>
                          <TableCell><TextCell primary={child.lead} /></TableCell>
                          <TableCell align="right"><TextCell primary={fmt(child.budget)} bold /></TableCell>
                          <TableCell><Badge color={cs.color} variant="subtle" size="m" label={cs.label} /></TableCell>
                        </TableExpandRow>
                      );
                    })
                  : undefined
              }
            >
              <TableCell>
                <LeadingCell
                  media={<Avatar size="s">{getInitial(row.name)}</Avatar>}
                  primary={row.name}
                  caption={`${row.members} members`}
                />
              </TableCell>
              <TableCell><TextCell primary={row.lead} /></TableCell>
              <TableCell align="right"><TextCell primary={fmt(row.budget)} bold /></TableCell>
              <TableCell><Badge color={s.color} variant="subtle" size="m" label={s.label} /></TableCell>
            </TableExpandRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

/* ── Cell data types demo ── */

function CellDataTypes() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell label="Type" />
          <TableHeaderCell label="Example" />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell><TextCell primary="Text only" /></TableCell>
          <TableCell><TextCell primary="Primary label" caption="Caption text" /></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><TextCell primary="Text bold" /></TableCell>
          <TableCell><TextCell primary="Bold primary" bold /></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><TextCell primary="Avatar (no caption)" /></TableCell>
          <TableCell>
            <LeadingCell
              media={<Avatar size="xs">A</Avatar>}
              primary="Nguyễn Văn A"
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell><TextCell primary="Avatar + caption" /></TableCell>
          <TableCell>
            <LeadingCell
              media={<Avatar size="s">A</Avatar>}
              primary="Nguyễn Văn A"
              caption="vanA@example.com"
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell><TextCell primary="Avatar Group" /></TableCell>
          <TableCell>
            <AvatarGroup size="xs" max={4}>
              <Avatar color="accent">A</Avatar>
              <Avatar color="blue">B</Avatar>
              <Avatar color="brown">C</Avatar>
              <Avatar color="green">D</Avatar>
              <Avatar color="purple">E</Avatar>
            </AvatarGroup>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell><TextCell primary="Dock icon + text" /></TableCell>
          <TableCell>
            <DockIconCell
              icon={<span style={{ fontSize: 16 }}>🏠</span>}
              primary="Home Dashboard"
              caption="Last updated today"
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell><TextCell primary="Trend — Up" /></TableCell>
          <TableCell>
            <TrendCell label="+12.5%" direction="up" icon={<TrendUp01 size={16} />} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell><TextCell primary="Trend — Down" /></TableCell>
          <TableCell>
            <TrendCell label="-3.2%" direction="down" icon={<TrendDown01 size={16} />} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell><TextCell primary="Trend — Neutral" /></TableCell>
          <TableCell>
            <TrendCell label="0.0%" direction="neutral" icon={<Minus size={16} />} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell><TextCell primary="Badge" /></TableCell>
          <TableCell>
            <Badge color="positive" variant="subtle" label="Active" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell><TextCell primary="Tag" /></TableCell>
          <TableCell>
            <Tag label="Label" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell><TextCell primary="Progress bar" /></TableCell>
          <TableCell>
            <ProgressBar value={68} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell><TextCell primary="Checkbox control" /></TableCell>
          <TableCell>
            <Checkbox checked={false} onChange={() => {}} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell><TextCell primary="Action (with popover)" /></TableCell>
          <TableCell>
            <RowActionMenu rowId="demo" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

/* ── Sticky columns demo ── */

const stickyRows = [
  { id: 's1', name: 'Nguyễn Văn A', dept: 'Design',      q1: 24_000, q2: 27_500, q3: 31_200, q4: 28_400, yoy: '+12.5%', yoyDir: 'up' as const,      nps: 87, headcount: 12, budget: 120_000 },
  { id: 's2', name: 'Trần Thị B',   dept: 'Engineering',  q1: 58_000, q2: 61_000, q3: 55_800, q4: 63_400, yoy: '+8.1%',  yoyDir: 'up' as const,      nps: 91, headcount: 34, budget: 440_000 },
  { id: 's3', name: 'Lê Văn C',     dept: 'Product',      q1: 18_000, q2: 17_200, q3: 19_500, q4: 21_000, yoy: '-3.2%', yoyDir: 'down' as const,    nps: 74, headcount: 8,  budget: 95_000  },
  { id: 's4', name: 'Phạm Thị D',   dept: 'Marketing',    q1: 32_000, q2: 34_000, q3: 30_400, q4: 35_100, yoy: '+0.0%', yoyDir: 'neutral' as const, nps: 82, headcount: 10, budget: 200_000 },
  { id: 's5', name: 'Hoàng Văn E',  dept: 'Data & Analytics', q1: 21_000, q2: 23_500, q3: 26_000, q4: 24_800, yoy: '+7.8%', yoyDir: 'up' as const, nps: 88, headcount: 9, budget: 175_000 },
];

function StickyColumnsTable() {
  return (
    <TableContainer style={{ width: '100%' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell label="Name"       sticky="left" style={{ minWidth: 180 }} />
            <TableHeaderCell label="Department" style={{ minWidth: 160 }} />
            <TableHeaderCell label="Q1"         align="right" style={{ minWidth: 110 }} />
            <TableHeaderCell label="Q2"         align="right" style={{ minWidth: 110 }} />
            <TableHeaderCell label="Q3"         align="right" style={{ minWidth: 110 }} />
            <TableHeaderCell label="Q4"         align="right" style={{ minWidth: 110 }} />
            <TableHeaderCell label="YoY"        align="right" style={{ minWidth: 110 }} />
            <TableHeaderCell label="NPS"        align="right" style={{ minWidth: 80  }} />
            <TableHeaderCell label="Headcount"  align="right" style={{ minWidth: 110 }} />
            <TableHeaderCell label="Actions"    align="right" sticky="right" style={{ minWidth: 72 }} />
          </TableRow>
        </TableHead>
        <TableBody>
          {stickyRows.map((row) => (
            <TableRow key={row.id}>
              <TableCell sticky="left">
                <LeadingCell
                  media={<Avatar size="xs">{getInitial(row.name)}</Avatar>}
                  primary={row.name}
                />
              </TableCell>
              <TableCell><TextCell primary={row.dept} /></TableCell>
              <TableCell align="right"><TextCell primary={fmt(row.q1)} /></TableCell>
              <TableCell align="right"><TextCell primary={fmt(row.q2)} /></TableCell>
              <TableCell align="right"><TextCell primary={fmt(row.q3)} /></TableCell>
              <TableCell align="right"><TextCell primary={fmt(row.q4)} /></TableCell>
              <TableCell align="right">
                <TrendCell
                  label={row.yoy}
                  direction={row.yoyDir}
                  icon={
                    row.yoyDir === 'up' ? <TrendUp01 size={16} /> :
                    row.yoyDir === 'down' ? <TrendDown01 size={16} /> :
                    <Minus size={16} />
                  }
                />
              </TableCell>
              <TableCell align="right"><TextCell primary={String(row.nps)} /></TableCell>
              <TableCell align="right"><TextCell primary={String(row.headcount)} /></TableCell>
              <TableCell align="right" sticky="right">
                <RowActionMenu rowId={row.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

/* ── Page ── */

export function TablePage() {
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
        <h1 className="docs-page-title text-display-1">Table</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            Data table built from composable cell primitives. Supports sortable headers, row selection, multiple body cell types, and rich content including avatars, trends, badges, and controls.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-xlarge)', marginBottom: 'var(--gap-3xlarge)' }}>

          <DemoBlock title="Sortable Table" description="Checkbox selection, sortable headers, and Popover action menu on the 3-dot button." previewStyle={{ background: "var(--color-bg-surface-default)", padding: "0" }}>
            <div style={{ width: '100%', overflow: 'auto' }}>
              <SortableTable />
            </div>
          </DemoBlock>

          <DemoBlock title="Header Cell Variants" description="Static, sortable (left/right), and checkbox header types." previewStyle={{ background: "var(--color-bg-surface-default)", padding: "0" }}>
            <div style={{ width: '100%', overflow: 'auto' }}>
              <HeaderVariants />
            </div>
          </DemoBlock>

          <DemoBlock title="Cell States" description="Hover applies at row level — all cells in a row highlight together." previewStyle={{ background: "var(--color-bg-surface-default)", padding: "0" }}>
            <div style={{ width: '100%', overflow: 'auto' }}>
              <CellStates />
            </div>
          </DemoBlock>

          <DemoBlock title="Expandable Rows" description="Click the chevron to expand or collapse a row's sub-rows. Supports multiple nesting levels." previewStyle={{ background: "var(--color-bg-surface-default)", padding: "0" }}>
            <div style={{ width: '100%', overflow: 'auto' }}>
              <ExpandableTable />
            </div>
          </DemoBlock>

          <DemoBlock title="Sticky Columns" description="Wrap the table in TableContainer to enable horizontal scroll. Set sticky='left' or sticky='right' on header and body cells to pin them. Use stickyOffset (px) when multiple columns are pinned on the same side." previewStyle={{ padding: "0", background: "var(--color-bg-surface-default)" }}>
            <StickyColumnsTable />
          </DemoBlock>

          <DemoBlock title="Cell Data Types" description="All supported content primitives for body cells." previewStyle={{ background: "var(--color-bg-surface-default)", padding: "0" }}>
            <div style={{ width: '100%', overflow: 'auto' }}>
              <CellDataTypes />
            </div>
          </DemoBlock>

        </div>

        {/* API */}
        <h2 className="text-h3 docs-section-title">API</h2>

        <h3 className="text-h4" style={{ marginBottom: 'var(--gap-xsmall)' }}>TableHeaderCell</h3>
        <ApiTable
          style={{ marginBottom: 'var(--gap-xlarge)' }}
          columns={['Prop', 'Type', 'Default', 'Description']}
          rows={[
            [<code>label</code>, <code>string</code>, '—', 'Column label text'],
            [<code>align</code>, <><code>'left'</code> | <code>'right'</code></>, <code>'left'</code>, 'Text alignment'],
            [<code>sort</code>, <><code>'none'</code> | <code>'ascending'</code> | <code>'descending'</code></>, <code>'none'</code>, 'Current sort state'],
            [<code>onSort</code>, <code>() =&gt; void</code>, '—', 'Sort click handler (makes header interactive)'],
            [<code>icon</code>, <code>ReactNode</code>, '—', 'Leading icon before label'],
            [<code>control</code>, <code>ReactNode</code>, '—', 'Replace label with a control (e.g. Checkbox)'],
            [<code>sticky</code>, <><code>'left'</code> | <code>'right'</code></>, '—', 'Pin column to left or right edge inside TableContainer'],
            [<code>stickyOffset</code>, <code>number</code>, <code>0</code>, 'px offset from edge — use when multiple columns sticky on same side'],
          ]}
        />

        <h3 className="text-h4" style={{ marginBottom: 'var(--gap-xsmall)' }}>TableCell</h3>
        <ApiTable
          style={{ marginBottom: 'var(--gap-xlarge)' }}
          columns={['Prop', 'Type', 'Default', 'Description']}
          rows={[
            [<code>align</code>, <><code>'left'</code> | <code>'right'</code></>, <code>'left'</code>, 'Content alignment'],
            [<code>state</code>, <><code>'default'</code> | <code>'hover'</code> | <code>'focused'</code> | <code>'selected'</code></>, <code>'default'</code>, 'Visual state'],
            [<code>sticky</code>, <><code>'left'</code> | <code>'right'</code></>, '—', 'Pin column to left or right edge inside TableContainer'],
            [<code>stickyOffset</code>, <code>number</code>, <code>0</code>, 'px offset from edge — use when multiple columns sticky on same side'],
          ]}
        />

        <h3 className="text-h4" style={{ marginBottom: 'var(--gap-xsmall)' }}>Cell content primitives</h3>
        <ApiTable
          style={{ marginBottom: 'var(--gap-3xlarge)' }}
          columns={['Component', 'Key props', 'Description']}
          rows={[
            [<code>TextCell</code>, <code>primary, caption?, bold?</code>, 'Text label with optional caption and bold variant'],
            [<code>LeadingCell</code>, <code>media, primary, caption?, bold?</code>, 'Avatar / photo / icon + text'],
            [<code>DockIconCell</code>, <code>icon, primary, caption?</code>, 'Rounded square icon container + text'],
            [<code>TrendCell</code>, <code>label, direction, icon?</code>, 'Trend badge (up/down/neutral)'],
            [<code>ActionCell</code>, <code>icon, onClick?, label?</code>, 'Icon button for row actions'],
          ]}
        />

      </div>
    </>
  );
}
