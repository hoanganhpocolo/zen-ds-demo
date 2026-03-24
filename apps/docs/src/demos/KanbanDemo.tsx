import { useState } from 'react';
import {
  Sidebar,
  SidebarItem,
  Avatar,
  Badge,
  Button,
  ProgressBar,
  Search,
} from '@zen/components';
import {
  ClipboardCheck,
  Grid01,
  Users,
  Dataflow01,
  Activity,
  Settings01,
  HelpCircle,
  Bell01,
  Plus,
  DotsHorizontal,
  LayoutLeft,
  Zap,
  XCircle,
  ChevronDown,
} from '@zen/icons/line';
import { ZenLogo } from '../components/ZenLogo';
import styles from './KanbanDemo.module.css';

/* ── Types ── */

type Priority = 'urgent' | 'high' | 'medium' | 'low' | 'none';
type IssueType = 'feature' | 'bug' | 'task';
type ColumnId = 'backlog' | 'in-progress' | 'in-review' | 'done';
type ColColor = 'neutral' | 'info' | 'accent' | 'positive';

interface Label {
  text: string;
  color: 'blue' | 'purple' | 'indigo' | 'teal' | 'red' | 'orange' | 'cyan' | 'neutral';
}

interface Assignee {
  initials: string;
  color: 'accent' | 'blue' | 'purple' | 'green' | 'orange';
}

interface Task {
  id: string;
  title: string;
  priority: Priority;
  type: IssueType;
  labels: Label[];
  assignee: Assignee;
  points: number;
  dueDate?: string;
}

interface Column {
  id: ColumnId;
  title: string;
  color: ColColor;
  tasks: Task[];
}

/* ── Static data ── */

const projects = [
  { name: 'Orbit Platform', progress: 68 },
  { name: 'Mobile App',     progress: 42 },
  { name: 'API v2.0',       progress: 85 },
];

const COLUMNS: Column[] = [
  {
    id: 'backlog',
    title: 'Backlog',
    color: 'neutral',
    tasks: [
      {
        id: 'ORB-055', type: 'task', priority: 'medium',
        title: 'Redesign onboarding flow for new users',
        labels: [{ text: 'Design', color: 'purple' }, { text: 'Frontend', color: 'blue' }],
        assignee: { initials: 'AM', color: 'accent' }, points: 5, dueDate: 'Jun 10',
      },
      {
        id: 'ORB-056', type: 'feature', priority: 'low',
        title: 'Add comprehensive dark mode support to all surfaces',
        labels: [{ text: 'Frontend', color: 'blue' }],
        assignee: { initials: 'SK', color: 'blue' }, points: 3,
      },
      {
        id: 'ORB-057', type: 'bug', priority: 'high',
        title: 'Memory leak in data table when row virtualization is active',
        labels: [{ text: 'Backend', color: 'indigo' }, { text: 'Critical', color: 'red' }],
        assignee: { initials: 'JL', color: 'purple' }, points: 8,
      },
      {
        id: 'ORB-058', type: 'task', priority: 'none',
        title: 'Write upgrade migration guide for v2.0',
        labels: [{ text: 'Docs', color: 'teal' }],
        assignee: { initials: 'MR', color: 'green' }, points: 2, dueDate: 'Jun 15',
      },
      {
        id: 'ORB-059', type: 'feature', priority: 'medium',
        title: 'Implement activity feed with infinite scroll pagination',
        labels: [{ text: 'Backend', color: 'indigo' }],
        assignee: { initials: 'CT', color: 'orange' }, points: 5,
      },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    color: 'info',
    tasks: [
      {
        id: 'ORB-048', type: 'feature', priority: 'urgent',
        title: 'Real-time collaboration sync across concurrent editing sessions',
        labels: [{ text: 'Backend', color: 'indigo' }, { text: 'Frontend', color: 'blue' }],
        assignee: { initials: 'AM', color: 'accent' }, points: 13, dueDate: 'May 30',
      },
      {
        id: 'ORB-049', type: 'bug', priority: 'high',
        title: 'Search autocomplete panel does not dismiss on outside click',
        labels: [{ text: 'Frontend', color: 'blue' }],
        assignee: { initials: 'SK', color: 'blue' }, points: 3, dueDate: 'May 28',
      },
      {
        id: 'ORB-050', type: 'feature', priority: 'high',
        title: 'Notification preferences with granular per-channel controls',
        labels: [{ text: 'Frontend', color: 'blue' }],
        assignee: { initials: 'JL', color: 'purple' }, points: 5, dueDate: 'Jun 2',
      },
      {
        id: 'ORB-051', type: 'task', priority: 'medium',
        title: 'Migrate authentication service to OAuth 2.0 standard',
        labels: [{ text: 'Backend', color: 'indigo' }, { text: 'Security', color: 'orange' }],
        assignee: { initials: 'MR', color: 'green' }, points: 8, dueDate: 'Jun 5',
      },
    ],
  },
  {
    id: 'in-review',
    title: 'In Review',
    color: 'accent',
    tasks: [
      {
        id: 'ORB-044', type: 'feature', priority: 'high',
        title: 'Dashboard widget drag & drop reordering',
        labels: [{ text: 'Frontend', color: 'blue' }],
        assignee: { initials: 'CT', color: 'orange' }, points: 8, dueDate: 'May 25',
      },
      {
        id: 'ORB-045', type: 'bug', priority: 'medium',
        title: 'Timezone mismatch causes wrong display in event scheduler',
        labels: [{ text: 'Backend', color: 'indigo' }],
        assignee: { initials: 'AM', color: 'accent' }, points: 3, dueDate: 'May 24',
      },
      {
        id: 'ORB-046', type: 'task', priority: 'low',
        title: 'Update REST API documentation for v1.8 endpoints',
        labels: [{ text: 'Docs', color: 'teal' }],
        assignee: { initials: 'SK', color: 'blue' }, points: 2, dueDate: 'May 26',
      },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    color: 'positive',
    tasks: [
      {
        id: 'ORB-040', type: 'feature', priority: 'high',
        title: 'User permission management and role assignment UI',
        labels: [{ text: 'Frontend', color: 'blue' }],
        assignee: { initials: 'JL', color: 'purple' }, points: 13, dueDate: 'May 20',
      },
      {
        id: 'ORB-041', type: 'bug', priority: 'medium',
        title: 'Fix CSV export character encoding on non-Latin content',
        labels: [{ text: 'Backend', color: 'indigo' }],
        assignee: { initials: 'MR', color: 'green' }, points: 2, dueDate: 'May 18',
      },
      {
        id: 'ORB-042', type: 'task', priority: 'high',
        title: 'Set up automated CI/CD pipeline with GitHub Actions',
        labels: [{ text: 'DevOps', color: 'cyan' }],
        assignee: { initials: 'CT', color: 'orange' }, points: 5, dueDate: 'May 15',
      },
      {
        id: 'ORB-043', type: 'feature', priority: 'medium',
        title: 'Add keyboard shortcuts overlay and help modal',
        labels: [{ text: 'Frontend', color: 'blue' }],
        assignee: { initials: 'AM', color: 'accent' }, points: 3, dueDate: 'May 22',
      },
    ],
  },
];

/* ── Priority color map ── */

const PRIORITY_COLOR: Record<Priority, string> = {
  urgent: 'var(--color-content-negative-primary)',
  high:   'var(--color-content-warning-primary)',
  medium: 'var(--color-content-info-primary)',
  low:    'var(--color-content-neutral-tertiary)',
  none:   'var(--color-border-neutral-subtle-default)',
};

/* ── Type icon ── */

function TypeIcon({ type }: { type: IssueType }) {
  if (type === 'feature') return <Zap size={12} />;
  if (type === 'bug')     return <XCircle size={12} />;
  return <ClipboardCheck size={12} />;
}

/* ── Task Card ── */

function TaskCard({ task, done }: { task: Task; done?: boolean }) {
  return (
    <div
      className={[styles.card, done ? styles.cardDone : ''].filter(Boolean).join(' ')}
      style={{ borderLeftColor: PRIORITY_COLOR[task.priority] }}
    >
      <div className={styles.cardTop}>
        <div className={styles.cardIdRow}>
          <span className={styles.typeIcon} style={{ color: PRIORITY_COLOR[task.priority] }}>
            <TypeIcon type={task.type} />
          </span>
          <span className={styles.issueId}>{task.id}</span>
        </div>
        <button className={styles.moreBtn} aria-label="More">
          <DotsHorizontal size={14} />
        </button>
      </div>

      <p className={[styles.cardTitle, done ? styles.cardTitleDone : ''].filter(Boolean).join(' ')}>
        {task.title}
      </p>

      {task.labels.length > 0 && (
        <div className={styles.cardLabels}>
          {task.labels.map(l => (
            <Badge key={l.text} label={l.text} color={l.color} variant="subtle" size="s" dot={false} />
          ))}
        </div>
      )}

      <div className={styles.cardBottom}>
        <Avatar size="2xs" color={task.assignee.color} background="subtle">
          {task.assignee.initials}
        </Avatar>
        <div className={styles.cardMeta}>
          {task.dueDate && <span className={styles.dueDate}>{task.dueDate}</span>}
          <Badge label={`${task.points}pt`} color="neutral" variant="ghost" size="s" dot={false} />
        </div>
      </div>
    </div>
  );
}

/* ── Kanban Column ── */

function KanbanColumn({ col }: { col: Column }) {
  return (
    <div className={styles.column}>
      <div className={[styles.colHeader, styles[`colHeader-${col.color}`]].join(' ')}>
        <div className={styles.colHeaderLeft}>
          <span className={[styles.colDot, styles[`colDot-${col.color}`]].join(' ')} />
          <span className={styles.colTitle}>{col.title}</span>
          <span className={styles.colCount}>{col.tasks.length}</span>
        </div>
        <button className={styles.colAddBtn} aria-label={`Add to ${col.title}`}>
          <Plus size={14} />
        </button>
      </div>

      <div className={styles.cardList}>
        {col.tasks.map(task => (
          <TaskCard key={task.id} task={task} done={col.id === 'done'} />
        ))}
      </div>
    </div>
  );
}

/* ── Root ── */

export function KanbanDemo() {
  const [navItem, setNavItem]         = useState('issues');
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className={styles.root}>

      {/* ══ SIDEBAR ══ */}
      <div className={styles.sidebarOuter}>
        <Sidebar
          background="default"
          header={
            <div className={styles.sidebarHeader}>
              <div className={styles.logoRow}>
                <div className={styles.orbitLogo}>
                  <span className={styles.orbitMark} />
                  <span className={styles.orbitName}>Orbit</span>
                </div>
                <Button variant="flat-primary" size="xs" icon={<LayoutLeft size={18} />} />
              </div>
            </div>
          }
          footer={
            <div className={styles.sidebarFooter}>
              <SidebarItem label="Settings"     icon={<Settings01 size={20} />} selected={navItem === 'settings'} onClick={() => setNavItem('settings')} />
              <SidebarItem label="Help & Support" icon={<HelpCircle size={20} />} selected={navItem === 'help'} onClick={() => setNavItem('help')} />
              <SidebarItem
                label="Maya Ramirez"
                icon={<Avatar size="xs" color="green" background="solid">MR</Avatar>}
                onClick={() => {}}
              />
            </div>
          }
        >
          {/* Nav */}
          <div className={styles.navGroup}>
            <SidebarItem label="Issues"  icon={<ClipboardCheck size={20} />} selected={navItem === 'issues'}  onClick={() => setNavItem('issues')} />
            <SidebarItem label="Cycles"  icon={<Activity size={20} />}       selected={navItem === 'cycles'}  onClick={() => setNavItem('cycles')} />
            <SidebarItem label="Views"   icon={<Grid01 size={20} />}         selected={navItem === 'views'}   onClick={() => setNavItem('views')} />
            <SidebarItem label="Roadmap" icon={<Dataflow01 size={20} />}     selected={navItem === 'roadmap'} onClick={() => setNavItem('roadmap')} />
            <SidebarItem label="Members" icon={<Users size={20} />}          selected={navItem === 'members'} onClick={() => setNavItem('members')} />
          </div>

          {/* Sprint */}
          <div className={styles.sidebarBlock}>
            <p className={styles.blockLabel}>CURRENT SPRINT</p>
            <div className={styles.sprintCard}>
              <div className={styles.sprintRow}>
                <span className={styles.sprintName}>Sprint 12</span>
                <Badge label="Active" color="positive" variant="subtle" size="s" dot />
              </div>
              <p className={styles.sprintDates}>May 20 – Jun 2 · 5 days left</p>
              <ProgressBar value={68} theme="accent" style={{ width: '100%', marginTop: 8 }} />
              <div className={styles.sprintMeta}>
                <span>16 / 24 issues</span>
                <span>68%</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className={styles.sidebarBlock}>
            <p className={styles.blockLabel}>PROJECTS</p>
            <div className={styles.projectList}>
              {projects.map(p => (
                <div key={p.name} className={styles.projectRow}>
                  <div className={styles.projectTitleRow}>
                    <span className={styles.projectName}>{p.name}</span>
                    <span className={styles.projectPct}>{p.progress}%</span>
                  </div>
                  <ProgressBar value={p.progress} theme="status" style={{ width: '100%' }} />
                </div>
              ))}
            </div>
          </div>
        </Sidebar>
      </div>

      {/* ══ MAIN ══ */}
      <div className={styles.main}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.headerTitle}>Orbit Platform</h2>
            <span className={styles.headerSep}>/</span>
            <span className={styles.headerSub}>Board</span>
          </div>
          <div className={styles.headerRight}>
            <Search placeholder="Search issues…" size="default" style={{ width: 200 }} />
            <Button variant="tertiary" size="m" icon={<Bell01 size={20} />} />
            <Button variant="tertiary" size="m" icon={<HelpCircle size={20} />} />
            <Avatar size="s" color="green" background="solid">MR</Avatar>
          </div>
        </div>

        {/* Filter bar */}
        <div className={styles.filterBar}>
          <div className={styles.filterLeft}>
            <button className={[styles.filterDrop, activeFilter === 'all'       ? styles.filterDropActive : ''].filter(Boolean).join(' ')} onClick={() => setActiveFilter('all')}>All Issues <ChevronDown size={12} /></button>
            <button className={[styles.filterDrop, activeFilter === 'mine'      ? styles.filterDropActive : ''].filter(Boolean).join(' ')} onClick={() => setActiveFilter('mine')}>My Issues <ChevronDown size={12} /></button>
            <button className={[styles.filterDrop, activeFilter === 'unblocked' ? styles.filterDropActive : ''].filter(Boolean).join(' ')} onClick={() => setActiveFilter('unblocked')}>Unblocked <ChevronDown size={12} /></button>
            <div className={styles.filterSep} />
            <button className={styles.filterDrop}>Priority <ChevronDown size={12} /></button>
            <button className={styles.filterDrop}>Assignee <ChevronDown size={12} /></button>
          </div>
          <div className={styles.filterRight}>
            <Button variant="accent" size="s" icon={<Plus size={16} />}>New Issue</Button>
          </div>
        </div>

        {/* Board */}
        <div className={styles.boardOuter}>
          <div className={styles.board}>
            {COLUMNS.map(col => (
              <KanbanColumn key={col.id} col={col} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
