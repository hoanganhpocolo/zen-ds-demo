import { useState } from 'react';
import {
  Button, InputField, Checkbox,
  Toggle, Search, NumberField, Chip, Avatar, AvatarGroup,
  Divider, Segmented, ListItem, Badge, Tag,
  TabItem, TabGroup, Breadcrumb, BreadcrumbItem,
  InlineMessage, ProgressBar, RatingStar, Pagination,
  Stepper, Slider, RadioGroup, Radio,
} from '@zen/components';
import {
  Home01, Bell01, Settings01, Plus, CheckCircle,
  User, FilterLines, LayersThree01,
  BarChart01, Target01, CpuChip, Hash01, Grid01, BookmarkCheck,
} from '@zen/icons/line';
import styles from './UIExampleDemo.module.css';

// ── Top Nav Bar ──────────────────────────────────────────────────────────────

function TopBar() {
  const [activeTab, setActiveTab] = useState('overview');
  return (
    <div className={styles.topBar}>
      <Breadcrumb>
        <BreadcrumbItem master icon={<Home01 size={14} />} />
        <BreadcrumbItem>Workspace</BreadcrumbItem>
        <BreadcrumbItem>Projects</BreadcrumbItem>
        <BreadcrumbItem>Design System</BreadcrumbItem>
      </Breadcrumb>

      <TabGroup>
        <TabItem label="Overview" selected={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
        <TabItem label="Analytics" selected={activeTab === 'analytics'} onClick={() => setActiveTab('analytics')} />
        <TabItem label="Settings" selected={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
      </TabGroup>

      <div className={styles.topBarActions}>
        <Badge label="v2.4.0" color="accent" variant="subtle" size="s" dot={false} />
        <Badge label="Live" color="positive" variant="subtle" size="s" />
        <Button variant="flat-primary" size="xs" icon={<Bell01 size={14} />} />
        <Button variant="flat-primary" size="xs" icon={<Settings01 size={14} />} />
        <AvatarGroup>
          <Avatar src="https://i.pravatar.cc/40?img=11" alt="Alice" size="s" />
          <Avatar src="https://i.pravatar.cc/40?img=22" alt="Bob" size="s" />
          <Avatar size="s">+3</Avatar>
        </AvatarGroup>
      </div>
    </div>
  );
}

// ── Metric Cards Row ─────────────────────────────────────────────────────────

function MetricRow() {
  return (
    <div className={styles.metricRow}>
      {[
        { icon: <BarChart01 size={16} />, label: 'Total Revenue', value: '$84,320', trend: '+12.5%', up: true },
        { icon: <User size={16} />, label: 'Active Users', value: '3,842', trend: '+4.1%', up: true },
        { icon: <Target01 size={16} />, label: 'Conversion', value: '5.27%', trend: '-0.8%', up: false },
        { icon: <CpuChip size={16} />, label: 'API Calls', value: '1.2M', trend: '+18%', up: true },
      ].map((m, i) => (
        <div key={i} className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <span style={{ color: 'var(--color-content-neutral-tertiary)' }}>{m.icon}</span>
            <span className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)' }}>{m.label}</span>
          </div>
          <div className={styles.metricValue}>
            <span className="text-h4" style={{ color: 'var(--color-content-neutral-primary)' }}>{m.value}</span>
            <Badge
              label={m.trend}
              color={m.up ? 'positive' : 'negative'}
              variant="subtle"
              size="s"
              dot={false}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Left Card: Create Project Form ───────────────────────────────────────────

function CreateProjectCard() {
  const [notify, setNotify] = useState(true);
  const [isPublic, setIsPublic] = useState(false);
  const [priority, setPriority] = useState('medium');
  const [gpus, setGpus] = useState(4);

  return (
    <div className={styles.card}>
      <div>
        <span className="text-body-base-primary" style={{ color: 'var(--color-content-neutral-primary)', display: 'block' }}>Create Project</span>
        <span className="text-body-small" style={{ color: 'var(--color-content-neutral-tertiary)' }}>Set up a new workspace project</span>
      </div>

      <div className={styles.formSection}>
        <InputField label="Project Name" placeholder="e.g. Design System v3" size="m" />
        <InputField
          label="Repository URL"
          placeholder="https://github.com/..."
          size="m"
          leading={<Hash01 size={16} />}
        />
        <Search placeholder="Search team members..." />
      </div>

      <Divider label="Configuration" />

      <div>
        <span className="text-body-small" style={{ color: 'var(--color-content-neutral-primary)', display: 'block', marginBottom: 'var(--gap-xsmall)' }}>Priority Level</span>
        <RadioGroup value={priority} onChange={setPriority} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-xsmall)' }}>
          <Radio value="high" label="High" description="Critical — blocks other teams" />
          <Radio value="medium" label="Medium" description="Standard business priority" />
          <Radio value="low" label="Low" description="Nice to have, non-blocking" disabled />
        </RadioGroup>
      </div>

      <div className={styles.settingsRow} style={{ alignItems: 'center' }}>
        <div>
          <span className="text-body-small" style={{ color: 'var(--color-content-neutral-primary)', display: 'block' }}>GPU Allocation</span>
          <span className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)' }}>Compute units for this project</span>
        </div>
        <NumberField value={gpus} onChange={setGpus} min={1} max={32} size="m" />
      </div>

      <div className={styles.settingsRow} style={{ alignItems: 'center' }}>
        <div>
          <span className="text-body-small" style={{ color: 'var(--color-content-neutral-primary)', display: 'block' }}>Email Notifications</span>
          <span className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)' }}>Receive activity updates</span>
        </div>
        <Toggle checked={notify} onChange={e => setNotify(e.target.checked)} />
      </div>

      <Checkbox
        label="Make project public"
        checked={isPublic}
        onChange={e => setIsPublic(e.target.checked)}
      />

      <div style={{ display: 'flex', gap: 'var(--gap-xsmall)' }}>
        <Button variant="primary" size="m" icon={<Plus size={16} />}>Create Project</Button>
        <Button variant="tertiary" size="m">Cancel</Button>
      </div>
    </div>
  );
}

// ── Workflow Section ─────────────────────────────────────────────────────────

function WorkflowSection() {
  return (
    <div className={styles.freeSection}>
      <span className="text-body-small" style={{ color: 'var(--color-content-neutral-primary)', display: 'block', marginBottom: 'var(--gap-small)' }}>Onboarding Progress</span>
      <Stepper
        orientation="vertical"
        currentStep={2}
        steps={[
          { title: 'Account Created', subtitle: 'Verified on Mar 20' },
          { title: 'Team Invited', subtitle: '3 members joined' },
          { title: 'First Project', subtitle: 'In progress' },
          { title: 'Go Live', subtitle: 'Complete all steps' },
        ]}
      />

      <Divider />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-small)' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--gap-2xsmall)' }}>
            <span className="text-body-small" style={{ color: 'var(--color-content-neutral-primary)' }}>Storage</span>
            <span className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)' }}>68 / 100 GB</span>
          </div>
          <ProgressBar value={68} theme="accent" style={{ width: '100%' }} />
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--gap-2xsmall)' }}>
            <span className="text-body-small" style={{ color: 'var(--color-content-neutral-primary)' }}>API Quota</span>
            <span className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)' }}>92%</span>
          </div>
          <ProgressBar value={92} theme="status" style={{ width: '100%' }} />
        </div>
      </div>

      <Divider />

      <div>
        <span className="text-body-small" style={{ color: 'var(--color-content-neutral-primary)', display: 'block', marginBottom: 'var(--gap-2xsmall)' }}>Rate this release</span>
        <RatingStar value={4} size={20} />
      </div>

      <div>
        <span className="text-body-small" style={{ color: 'var(--color-content-neutral-primary)', display: 'block', marginBottom: 'var(--gap-xsmall)' }}>Response Time (ms)</span>
        <Slider min={50} max={500} defaultValue={120} showLabels />
      </div>
    </div>
  );
}

// ── Team List Section ────────────────────────────────────────────────────────

function TeamListSection() {
  return (
    <div className={styles.freeSection}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="text-body-small" style={{ color: 'var(--color-content-neutral-primary)' }}>Team Members</span>
        <Button variant="primary" size="s" icon={<Plus size={14} />}>Invite</Button>
      </div>

      {[
        { name: 'Alice Kim', role: 'Admin', status: 'Online', img: 'https://i.pravatar.cc/40?img=11', color: 'positive' as const },
        { name: 'Bob Chen', role: 'Developer', status: 'Away', img: 'https://i.pravatar.cc/40?img=22', color: 'warning' as const },
        { name: 'Maya Patel', role: 'Designer', status: 'Offline', img: 'https://i.pravatar.cc/40?img=33', color: 'neutral' as const },
      ].map(member => (
        <ListItem
          key={member.name}
          title={member.name}
          caption={member.role}
          leading={<Avatar src={member.img} alt={member.name} size="s" />}
          trailing={
            <Badge label={member.status} color={member.color} variant="subtle" size="s" dot />
          }
        />
      ))}

      <Divider />

      <span className="text-body-small" style={{ color: 'var(--color-content-neutral-primary)', display: 'block' }}>Recent Activity</span>

      {[
        { icon: <CheckCircle size={14} />, text: 'Deploy #482 succeeded', time: '2m ago', color: 'var(--color-content-positive-primary)' },
        { icon: <LayersThree01 size={14} />, text: 'Branch merged to main', time: '14m ago', color: 'var(--color-content-accent-primary)' },
        { icon: <BookmarkCheck size={14} />, text: 'PR #38 reviewed', time: '1h ago', color: 'var(--color-content-neutral-tertiary)' },
      ].map((item, i) => (
        <div key={i} className={styles.activityItem}>
          <span style={{ color: item.color, flexShrink: 0 }}>{item.icon}</span>
          <span className="text-body-small" style={{ color: 'var(--color-content-neutral-primary)', flex: 1 }}>{item.text}</span>
          <span className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)' }}>{item.time}</span>
        </div>
      ))}
    </div>
  );
}

// ── Bottom Free Row ──────────────────────────────────────────────────────────

function BottomRow() {
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(3);
  const [view, setView] = useState('grid');

  return (
    <div className={styles.bottomRow}>
      <div className={styles.filterGroup}>
        <FilterLines size={14} style={{ color: 'var(--color-content-neutral-tertiary)', flexShrink: 0 }} />
        {['all', 'active', 'review', 'archived'].map(f => (
          <Chip
            key={f}
            label={f.charAt(0).toUpperCase() + f.slice(1)}
            selected={filter === f}
            onClick={() => setFilter(f)}
          />
        ))}
        <div style={{ display: 'flex', gap: 'var(--gap-xsmall)' }}>
          <Tag label="React" theme="leading-icon" icon={<Grid01 size={12} />} />
          <Tag label="TypeScript" />
          <Tag label="Figma" removable />
        </div>
      </div>

      <div className={styles.bottomActions}>
        <InlineMessage
          theme="info"
          title="New components available"
          caption="FileUploader and Table are now stable."
          actionLabel="View changelog"
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-medium)' }}>
          <Segmented
            value={view}
            onChange={setView}
            items={[
              { value: 'grid', label: 'Grid' },
              { value: 'list', label: 'List' },
            ]}
          />
          <Pagination page={page} totalPages={12} onChange={setPage} />
        </div>
      </div>
    </div>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────

export function UIExampleDemo() {
  return (
    <div className={styles.root}>
      <TopBar />
      <MetricRow />
      <div className={styles.mainGrid}>
        <div className={styles.mainLeft}>
          <CreateProjectCard />
        </div>
        <WorkflowSection />
        <TeamListSection />
      </div>
      <BottomRow />
    </div>
  );
}
