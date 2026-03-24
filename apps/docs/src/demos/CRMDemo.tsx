import { useState } from 'react';
import {
  Sidebar,
  SidebarItem,
  Avatar,
  Badge,
  Button,
  Search,
  TabItem,
  TabGroup,
  Breadcrumb,
  BreadcrumbItem,
} from '@zen/components';
import { Ctrl } from '../inspector/Ctrl';
import {
  Grid01,
  Users,
  Briefcase,
  Dataflow01,
  ClipboardCheck,
  Settings01,
  HelpCircle,
  Mail01,
  Phone,
  DotsHorizontal,
  Plus,
  ChevronDown,
  ChevronRight01,
  Download01,
  Zap,
  Bell01,
  UserPlus,
  CheckCircle,
  XCircle,
  DotsVertical,
  FileDoc,
  FileCheck,
  Coins,
  Activity,
  ArrowLeft,
  Building01,
  Globe01,
  Calendar,
} from '@zen/icons/line';
import styles from './CRMDemo.module.css';

/* ── Data ── */

const documents = [
  { id: 1, name: 'Copies of Voter Issued Identification', file: 'voter.png',   size: '12MB', date: '02 Jan, 2025', type: 'file' as const },
  { id: 2, name: 'Property Document',                     file: 'Doc.pdf',     size: '12MB', date: '02 Jan, 2025', type: 'check' as const },
  { id: 3, name: 'Mortgage Statement (For All Loans)',     file: 'Display.png', size: '12MB', date: '02 Jan, 2025', type: 'file' as const },
  { id: 4, name: 'All Bank Statements (Last 2 Months)',    file: 'Doc.pdf',     size: '12MB', date: '02 Jan, 2025', type: 'check' as const },
];

const detailTabs = [
  'Details', 'Position', 'Documents', 'Assessment', 'Notes', 'Tasks', 'Emails', 'Calls', 'SMS',
] as const;

const dealStages = ['New', 'Qualified', 'Proposal', 'Negotiation', 'Won'];

/* ── Sub-components ── */

function ActivityFeed() {
  return (
    <div className={styles.activityFeed}>
      <div className={styles.activityItem}>
        <div className={styles.activityAvatarCol}>
          <Avatar size="s" color="accent" background="subtle">EP</Avatar>
          <div className={styles.activityLine} />
        </div>
        <div className={styles.activityBody}>
          <p className="text-body-small">
            <span style={{ fontWeight: 'var(--font-weight-secondary)' }}>Eleanor Pena</span>
            {' '}tagged you in a comment
          </p>
          <p className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)', marginTop: 2 }}>Today 12:00 PM</p>
          <div style={{ marginTop: 'var(--gap-2xsmall)' }}>
            <Badge label="Accepted" color="positive" variant="subtle" size="s" />
          </div>
        </div>
      </div>

      <div className={styles.activityItem}>
        <div className={styles.activityAvatarCol}>
          <Avatar size="s" color="blue" background="subtle">EP</Avatar>
          <div className={styles.activityLine} />
        </div>
        <div className={styles.activityBody}>
          <p className="text-body-small">
            <span style={{ fontWeight: 'var(--font-weight-secondary)' }}>Eleanor Pena</span>
            {' '}moved deal to next stage
          </p>
          <p className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)', marginTop: 2 }}>Today 12:00 PM</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-2xsmall)', marginTop: 'var(--gap-2xsmall)' }}>
            <Badge label="Proposal" color="warning" variant="subtle" size="s" />
            <ChevronRight01 size={12} style={{ color: 'var(--color-content-neutral-tertiary)' }} />
            <Badge label="Negotiation" color="info" variant="subtle" size="s" />
          </div>
        </div>
      </div>

      <div className={styles.activityItem}>
        <div className={styles.activityAvatarCol}>
          <Avatar size="s" color="purple" background="subtle">EP</Avatar>
        </div>
        <div className={styles.activityBody}>
          <p className="text-body-small">
            <span style={{ fontWeight: 'var(--font-weight-secondary)' }}>Eleanor Pena</span>
            {' '}added a note to Documents
          </p>
          <p className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)', marginTop: 2 }}>Today 4:00 AM</p>
        </div>
      </div>
    </div>
  );
}

function DocumentRow({ doc }: { doc: typeof documents[number] }) {
  const Icon = doc.type === 'check' ? FileCheck : FileDoc;
  return (
    <div className={styles.docRow}>
      <div className={styles.docIcon}>
        <Icon size={18} style={{ color: 'var(--color-content-neutral-secondary)' }} />
      </div>
      <div className={styles.docInfo}>
        <p className="text-body-small" style={{ fontWeight: 'var(--font-weight-secondary)' }}>{doc.name}</p>
        <p className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)', marginTop: 2 }}>
          {doc.file} &middot; {doc.size} &middot; {doc.date}
        </p>
      </div>
      <div className={styles.docStatus}>
        {doc.type === 'check'
          ? <Badge label="Accepted" color="positive" variant="subtle" size="s" />
          : <Badge label="Pending"  color="warning"  variant="subtle" size="s" />}
      </div>
      <div className={styles.docActions}>
        <Button variant="flat-primary" size="xs" icon={<CheckCircle  size={16} />} />
        <Button variant="flat-primary" size="xs" icon={<XCircle      size={16} />} />
        <Button variant="flat-primary" size="xs" icon={<DotsVertical size={16} />} />
      </div>
    </div>
  );
}

/* ── Main ── */
export function CRMDemo() {
  const [navItem,   setNavItem]   = useState('active-deals');
  const [detailTab, setDetailTab] = useState('Documents');
  const [panelTab,  setPanelTab]  = useState('activities');
  const [docFilter, setDocFilter] = useState('all');

  const currentStageIndex = 3; // Negotiation

  return (
    <div className={styles.root}>

      {/* ══ WORKSPACE STRIP ══ */}
      <div className={styles.workspaceStrip}>
        <div className={styles.workspaceLogo}>
          <img
            className={styles.zenMark}
            src="https://www.figma.com/api/mcp/asset/4a92821a-76d5-4a33-ae19-32fb73575ded"
            width={28} height={28} alt="Zen"
          />
        </div>
        <div className={styles.workspaceAvatars}>
          <span className={styles.workspaceActive}>
            <Avatar size="m" color="accent" background="solid" shape="square">C</Avatar>
          </span>
          <Avatar size="m" color="blue" background="solid" shape="square">A</Avatar>
        </div>
        <div style={{ flex: 1 }} />
        <Avatar size="m" src="https://i.pravatar.cc/150?img=12" />
      </div>

      {/* ══ SIDEBAR ══ */}
      <div className={styles.sidebarOuter}>
        <Ctrl id="sidebar-main" comp="Sidebar" init={{ background: 'default' }}>
          {p => (
            <Sidebar
              background={p.background as never}
              header={
                <p className="text-body-base" style={{ fontWeight: 'var(--font-weight-primary)', color: 'var(--color-content-neutral-primary)' }}>
                  CRM
                </p>
              }
              footer={
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-3xsmall)' }}>
                  <SidebarItem label="Settings"       icon={<Settings01 size={20} />} selected={navItem === 'settings'} onClick={() => setNavItem('settings')} />
                  <SidebarItem label="Help & Support" icon={<HelpCircle size={20} />} counter={8} selected={navItem === 'help'} onClick={() => setNavItem('help')} />
                </div>
              }
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-3xsmall)' }}>
                <SidebarItem label="Overview"     icon={<Grid01         size={20} />} selected={navItem === 'overview'}     onClick={() => setNavItem('overview')} />
                <SidebarItem label="Contacts"     icon={<Users          size={20} />} selected={navItem === 'contacts'}     onClick={() => setNavItem('contacts')} />
                <SidebarItem label="Deals"        icon={<Briefcase      size={20} />} selected={navItem === 'deals'}        onClick={() => setNavItem('deals')} />
                <SidebarItem label="Active Deals"   level="child" selected={navItem === 'active-deals'}  onClick={() => setNavItem('active-deals')} />
                <SidebarItem label="Closed Deals"   level="child" selected={navItem === 'closed-deals'}  onClick={() => setNavItem('closed-deals')} />
                <SidebarItem label="Integration"  icon={<Dataflow01     size={20} />} selected={navItem === 'integration'}  onClick={() => setNavItem('integration')} />
                <SidebarItem label="Tasks"        icon={<ClipboardCheck size={20} />} selected={navItem === 'tasks'}        onClick={() => setNavItem('tasks')} />
              </div>
            </Sidebar>
          )}
        </Ctrl>
      </div>

      {/* ══ MAIN ══ */}
      <div className={styles.main}>

        {/* ── Top bar ── */}
        <div className={styles.topbar}>
          <div className={styles.topbarLeft}>
            <Breadcrumb>
              <BreadcrumbItem>Deals</BreadcrumbItem>
              <BreadcrumbItem>Active Deals</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className={styles.topbarSearch}>
            <Search placeholder="Search or type a command" size="default" style={{ width: '100%' }} />
          </div>
          <div className={styles.topbarActions}>
            <Button variant="flat-primary" size="s" icon={<Zap      size={20} />} />
            <Button variant="flat-primary" size="s" icon={<Bell01   size={20} />} counter={3} />
            <div className={styles.topbarDivider} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-2xsmall)', cursor: 'pointer' }}>
              <Avatar size="s" src="https://i.pravatar.cc/150?img=12" />
              <ChevronDown size={14} style={{ color: 'var(--color-content-neutral-tertiary)' }} />
            </div>
          </div>
        </div>

        {/* ── Content ── */}
        <div className={styles.content}>

          {/* ── Contact Panel ── */}
          <div className={styles.contactPanel}>

            {/* Profile */}
            <div className={styles.contactProfile}>
              <Avatar size="xl" shape="circle" src="https://i.pravatar.cc/150?img=12" />
              <p className="text-h4" style={{ marginTop: 'var(--gap-small)', textAlign: 'center' }}>Ronald Richards</p>
              <p className="text-body-small" style={{ color: 'var(--color-content-neutral-tertiary)', textAlign: 'center', marginTop: 2 }}>
                Senior Mortgage Broker
              </p>
              <div style={{ marginTop: 'var(--gap-xsmall)' }}>
                <Badge label="Active" color="positive" variant="subtle" size="s" dot />
              </div>
            </div>

            {/* Quick actions */}
            <div className={styles.contactActions}>
              <div className={styles.contactActionBtn}>
                <Ctrl id="btn-mail" comp="Button" init={{ variant: 'accent', size: 'm', loading: false, disabled: false }}>
                  {p => <Button variant={p.variant as never} size={p.size as never} loading={p.loading as never} disabled={p.disabled as never} icon={<Mail01 size={18} />} />}
                </Ctrl>
                <span className="text-caption" style={{ color: 'var(--color-content-neutral-secondary)' }}>Mail</span>
              </div>
              <div className={styles.contactActionBtn}>
                <Ctrl id="btn-call" comp="Button" init={{ variant: 'positive', size: 'm', loading: false, disabled: false }}>
                  {p => <Button variant={p.variant as never} size={p.size as never} loading={p.loading as never} disabled={p.disabled as never} icon={<Phone size={18} />} />}
                </Ctrl>
                <span className="text-caption" style={{ color: 'var(--color-content-neutral-secondary)' }}>Call</span>
              </div>
              <div className={styles.contactActionBtn}>
                <Ctrl id="btn-more" comp="Button" init={{ variant: 'tertiary', size: 'm', loading: false, disabled: false }}>
                  {p => <Button variant={p.variant as never} size={p.size as never} loading={p.loading as never} disabled={p.disabled as never} icon={<DotsHorizontal size={18} />} />}
                </Ctrl>
                <span className="text-caption" style={{ color: 'var(--color-content-neutral-secondary)' }}>More</span>
              </div>
            </div>

            <div className={styles.contactDivider} />

            {/* Contact info */}
            <div className={styles.contactInfo}>
              <div className={styles.contactInfoRow}>
                <Building01 size={14} style={{ color: 'var(--color-content-neutral-tertiary)', flexShrink: 0 }} />
                <span className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)' }}>Acme Corporation</span>
              </div>
              <div className={styles.contactInfoRow}>
                <Mail01 size={14} style={{ color: 'var(--color-content-neutral-tertiary)', flexShrink: 0 }} />
                <span className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)' }}>ronald.r@acme.com</span>
              </div>
              <div className={styles.contactInfoRow}>
                <Phone size={14} style={{ color: 'var(--color-content-neutral-tertiary)', flexShrink: 0 }} />
                <span className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)' }}>+64 21 234 5678</span>
              </div>
              <div className={styles.contactInfoRow}>
                <Globe01 size={14} style={{ color: 'var(--color-content-neutral-tertiary)', flexShrink: 0 }} />
                <span className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)' }}>acmecorp.co.nz</span>
              </div>
              <div className={styles.contactInfoRow}>
                <Calendar size={14} style={{ color: 'var(--color-content-neutral-tertiary)', flexShrink: 0 }} />
                <span className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)' }}>Last activity: 2 Nov 2024</span>
              </div>
            </div>

            <div className={styles.contactDivider} />

            {/* Deal stage */}
            <div className={styles.dealStageSection}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--gap-small)' }}>
                <p className="text-capsline-s" style={{ color: 'var(--color-content-neutral-tertiary)' }}>DEAL STAGE</p>
                <span className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)' }}>{currentStageIndex + 1} / {dealStages.length}</span>
              </div>
              <div className={styles.dealSteps}>
                {dealStages.map((_, i) => (
                  <div
                    key={i}
                    className={[
                      styles.dealStep,
                      i < currentStageIndex  ? styles.dealStepDone    : '',
                      i === currentStageIndex ? styles.dealStepCurrent : '',
                    ].filter(Boolean).join(' ')}
                  />
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap-2xsmall)', marginTop: 'var(--gap-xsmall)' }}>
                <p className="text-body-small" style={{ fontWeight: 'var(--font-weight-secondary)' }}>
                  {dealStages[currentStageIndex]}
                </p>
                <Badge label="NZ$450,000" color="neutral" variant="subtle" size="s" />
              </div>
            </div>

            <div className={styles.contactDivider} />

            {/* Tabs */}
            <div className={styles.contactTabs}>
              <Ctrl id="tabs-panel" comp="TabGroup" init={{ tabStyle: 'indicator', size: 's' }}>
                {p => (
                  <TabGroup tabStyle={p.tabStyle as never} size={p.size as never}>
                    <TabItem label="Deal Info"  selected={panelTab === 'dealinfo'}   onClick={() => setPanelTab('dealinfo')}   size={p.size as never} tabStyle={p.tabStyle as never} />
                    <TabItem label="Activities" selected={panelTab === 'activities'} onClick={() => setPanelTab('activities')} size={p.size as never} tabStyle={p.tabStyle as never} />
                  </TabGroup>
                )}
              </Ctrl>
            </div>

            {panelTab === 'activities' && <ActivityFeed />}

            {panelTab === 'dealinfo' && (
              <div className={styles.loanSection}>
                <p className="text-capsline-s" style={{ color: 'var(--color-content-neutral-tertiary)', marginBottom: 'var(--gap-small)' }}>
                  LOAN REQUESTED
                </p>
                <div className={styles.loanRow}>
                  <Briefcase size={14} style={{ color: 'var(--color-content-neutral-tertiary)', flexShrink: 0 }} />
                  <div>
                    <p className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)' }}>Loan Purpose</p>
                    <p className="text-body-small" style={{ fontWeight: 'var(--font-weight-secondary)' }}>New Purchase</p>
                  </div>
                </div>
                <div className={styles.loanRow}>
                  <Coins size={14} style={{ color: 'var(--color-content-neutral-tertiary)', flexShrink: 0 }} />
                  <div>
                    <p className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)' }}>Loan Amount</p>
                    <p className="text-body-small" style={{ fontWeight: 'var(--font-weight-secondary)' }}>NZ$450,000</p>
                  </div>
                </div>
                <div className={styles.loanRow}>
                  <Calendar size={14} style={{ color: 'var(--color-content-neutral-tertiary)', flexShrink: 0 }} />
                  <div>
                    <p className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)' }}>Close Date</p>
                    <p className="text-body-small" style={{ fontWeight: 'var(--font-weight-secondary)' }}>30 Jun, 2025</p>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* ── Detail Panel ── */}
          <div className={styles.detailPanel}>

            {/* Header */}
            <div className={styles.detailHeader}>
              <div className={styles.breadcrumbRow}>
                <Button variant="flat-primary" size="xs" icon={<ArrowLeft size={16} />} />
                <Breadcrumb>
                  <BreadcrumbItem>Active Deals</BreadcrumbItem>
                  <BreadcrumbItem>Ronald Richards</BreadcrumbItem>
                </Breadcrumb>
              </div>

              <div className={styles.detailTitleRow}>
                <h1 className="text-h2">Property Loan</h1>
                <Badge label="Negotiation" color="info" variant="subtle" />
              </div>

              <div className={styles.metaRow}>
                <span className="text-body-small" style={{ color: 'var(--color-content-neutral-tertiary)' }}>
                  Created <span style={{ color: 'var(--color-content-neutral-primary)' }}>2 Mar, 2025</span>
                </span>
                <div className={styles.metaDivider} />
                <span className="text-body-small" style={{ color: 'var(--color-content-neutral-tertiary)' }}>
                  Closes <span style={{ color: 'var(--color-content-neutral-primary)' }}>30 Jun, 2025</span>
                </span>
                <div className={styles.memberAvatars}>
                  <Avatar size="s" src="https://i.pravatar.cc/150?img=32" />
                  <Avatar size="s" src="https://i.pravatar.cc/150?img=47" style={{ marginLeft: -8 }} />
                  <Avatar size="s" color="neutral" background="subtle" style={{ marginLeft: -8 }}>+2</Avatar>
                </div>
                <Button variant="tertiary" size="s" icon={<UserPlus size={14} />}>Add Member</Button>
              </div>
            </div>

            {/* Main tabs */}
            <div className={styles.mainTabs}>
              <Ctrl id="tabs-detail" comp="TabGroup" init={{ tabStyle: 'indicator', size: 's' }}>
                {p => (
                  <TabGroup tabStyle={p.tabStyle as never} size={p.size as never}>
                    {detailTabs.map(t => (
                      <TabItem
                        key={t}
                        label={t}
                        selected={detailTab === t}
                        onClick={() => setDetailTab(t)}
                        size={p.size as never}
                        tabStyle={p.tabStyle as never}
                      />
                    ))}
                  </TabGroup>
                )}
              </Ctrl>
            </div>

            {/* Document tab content */}
            {detailTab === 'Documents' && (
              <div className={styles.docContent}>

                {/* Metrics */}
                <div className={styles.docMetrics}>
                  <div className={styles.docMetricCard}>
                    <div className={styles.docMetricLabel}>
                      <FileDoc size={14} style={{ color: 'var(--color-content-neutral-tertiary)' }} />
                      <span className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)' }}>Docs Owed</span>
                    </div>
                    <p className="text-h3">5</p>
                  </div>
                  <div className={styles.docMetricCard}>
                    <div className={styles.docMetricLabel}>
                      <Activity size={14} style={{ color: 'var(--color-content-neutral-tertiary)' }} />
                      <span className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)' }}>Pending Review</span>
                    </div>
                    <p className="text-h3" style={{ color: 'var(--color-content-warning-primary)' }}>4</p>
                  </div>
                  <div className={styles.docMetricCard}>
                    <div className={styles.docMetricLabel}>
                      <FileCheck size={14} style={{ color: 'var(--color-content-neutral-tertiary)' }} />
                      <span className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)' }}>Accepted</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--gap-3xsmall)' }}>
                      <p className="text-h3" style={{ color: 'var(--color-content-positive-primary)' }}>12</p>
                      <span className="text-body-small" style={{ color: 'var(--color-content-neutral-tertiary)' }}>/13</span>
                    </div>
                  </div>
                </div>

                {/* Toolbar */}
                <div className={styles.docToolbar}>
                  <div className={styles.docFilterTabs}>
                    <button
                      className={[styles.filterTab, docFilter === 'all' ? styles.filterTabActive : ''].filter(Boolean).join(' ')}
                      onClick={() => setDocFilter('all')}
                    >All Documents</button>
                    <button
                      className={[styles.filterTab, docFilter === 'portal' ? styles.filterTabActive : ''].filter(Boolean).join(' ')}
                      onClick={() => setDocFilter('portal')}
                    >Portal Milestones</button>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--gap-2xsmall)' }}>
                    <Button variant="tertiary" size="s" icon={<Plus      size={14} />}>Add</Button>
                    <Button variant="tertiary" size="s" icon={<Download01 size={14} />}>Export</Button>
                  </div>
                </div>

                {/* List */}
                <div className={styles.docList}>
                  {documents.map(doc => <DocumentRow key={doc.id} doc={doc} />)}
                </div>

              </div>
            )}

            {detailTab !== 'Documents' && (
              <div className={styles.emptyTab}>
                <p className="text-body-small" style={{ color: 'var(--color-content-neutral-tertiary)' }}>
                  No content for <strong>{detailTab}</strong> yet.
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
