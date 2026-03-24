import { useState } from 'react';
import {
  Sidebar,
  SidebarItem,
  Avatar,
  Badge,
  Button,
  MetricCard,
  ProgressBar,
  Search,
  TabItem,
  TabGroup,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  LeadingCell,
  TextCell,
  Breadcrumb,
  BreadcrumbItem,
} from '@zen/components';
import {
  Home01,
  BarChart01,
  ShoppingBag01,
  Users,
  Settings01,
  Bell01,
  Plus,
  Download01,
  CreditCard,
  Package,
  ArrowRight,
  LayoutLeft,
} from '@zen/icons/line';
import { ZenLogo } from '../components/ZenLogo';
import styles from './DashboardDemo.module.css';

/* ── Data ── */

const orders = [
  { id: '#ORD-5082', customer: 'Minh Tran',    initials: 'MT', color: 'accent'  as const, email: 'minh.tran@email.com',  product: 'Pro Plan Annual',   status: 'completed'  as const, amount: '$299.00', date: 'Mar 17, 2026' },
  { id: '#ORD-5081', customer: 'Sara Chen',     initials: 'SC', color: 'blue'    as const, email: 'sara.chen@email.com',  product: 'Starter Plan',       status: 'pending'    as const, amount: '$49.00',  date: 'Mar 17, 2026' },
  { id: '#ORD-5080', customer: 'Lucas Martin',  initials: 'LM', color: 'green'   as const, email: 'lucas.m@email.com',   product: 'Pro Plan Monthly',   status: 'completed'  as const, amount: '$29.00',  date: 'Mar 16, 2026' },
  { id: '#ORD-5079', customer: 'Aisha Okafor',  initials: 'AO', color: 'purple'  as const, email: 'aisha.o@email.com',   product: 'Enterprise Plan',    status: 'processing' as const, amount: '$599.00', date: 'Mar 16, 2026' },
  { id: '#ORD-5078', customer: 'David Kim',     initials: 'DK', color: 'orange'  as const, email: 'david.k@email.com',   product: 'Pro Plan Annual',    status: 'completed'  as const, amount: '$299.00', date: 'Mar 15, 2026' },
  { id: '#ORD-5077', customer: 'Priya Singh',   initials: 'PS', color: 'pink'    as const, email: 'priya.s@email.com',   product: 'Starter Plan',       status: 'failed'     as const, amount: '$49.00',  date: 'Mar 15, 2026' },
  { id: '#ORD-5076', customer: 'Tom Nguyen',    initials: 'TN', color: 'teal'    as const, email: 'tom.n@email.com',     product: 'Pro Plan Monthly',   status: 'completed'  as const, amount: '$29.00',  date: 'Mar 14, 2026' },
  { id: '#ORD-5075', customer: 'Elena Rossi',   initials: 'ER', color: 'crimson' as const, email: 'elena.r@email.com',   product: 'Pro Plan Annual',    status: 'pending'    as const, amount: '$299.00', date: 'Mar 14, 2026' },
];

const channels = [
  { label: 'Organic Search', value: 42, theme: 'accent' as const },
  { label: 'Direct',         value: 28, theme: 'neutral' as const },
  { label: 'Referral',       value: 18, theme: 'neutral' as const },
  { label: 'Social Media',   value: 8,  theme: 'neutral' as const },
  { label: 'Email',          value: 4,  theme: 'neutral' as const },
];

const STATUS_MAP = {
  completed:  { label: 'Completed',  color: 'positive' as const },
  pending:    { label: 'Pending',    color: 'warning'  as const },
  processing: { label: 'Processing', color: 'info'     as const },
  failed:     { label: 'Failed',     color: 'negative' as const },
};

/* ── Bell with notification badge ── */
function BellButton() {
  return (
    <div className={styles.notifWrapper}>
      <Button variant="tertiary" size="m" icon={<Bell01 size={24} />} />
      <span className={styles.notifBadge}>8</span>
    </div>
  );
}

/* ── Main ── */
export function DashboardDemo() {
  const [navItem, setNavItem] = useState('overview');
  const [tab, setTab] = useState('all');

  const filteredOrders = tab === 'all' ? orders : orders.filter(o => o.status === tab);

  return (
    <div className={styles.root}>

      {/* ══ SIDEBAR ══ */}
      <div className={styles.sidebarOuter}>
        <Sidebar
          background="default"
          header={
            <div className={styles.sidebarHeader}>
              <div className={styles.sidebarLogo}>
                <ZenLogo />
              </div>
              <Button variant="flat-primary" size="xs" icon={<LayoutLeft size={20} />} />
            </div>
          }
          footer={
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-3xsmall)' }}>
              <SidebarItem label="Settings" icon={<Settings01 size={20} />} selected={navItem === 'settings'} onClick={() => setNavItem('settings')} />
              <SidebarItem
                label="Linh Nguyen"
                icon={<Avatar size="xs" color="accent" background="solid">LN</Avatar>}
                onClick={() => {}}
              />
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-3xsmall)' }}>
            <SidebarItem label="Overview"  icon={<Home01       size={20} />} selected={navItem === 'overview'}  onClick={() => setNavItem('overview')} />
            <SidebarItem label="Analytics" icon={<BarChart01   size={20} />} selected={navItem === 'analytics'} onClick={() => setNavItem('analytics')} />
            <SidebarItem label="Orders"    icon={<ShoppingBag01 size={20} />} selected={navItem === 'orders'}    counter={8} onClick={() => setNavItem('orders')} />
            <SidebarItem label="Products"  icon={<Package      size={20} />} selected={navItem === 'products'}  onClick={() => setNavItem('products')} />
            <SidebarItem label="Customers" icon={<Users        size={20} />} selected={navItem === 'customers'} onClick={() => setNavItem('customers')} />
            <SidebarItem label="Billing"   icon={<CreditCard   size={20} />} selected={navItem === 'billing'}   onClick={() => setNavItem('billing')} />
          </div>
        </Sidebar>
      </div>

      {/* ══ MAIN ══ */}
      <div className={styles.main}>

        {/* ── Zone 1: Navigator ── */}
        <div className={styles.navigator}>
          {/* Leading: breadcrumb */}
          <div className={styles.navLeading}>
            <Breadcrumb>
              <BreadcrumbItem>Dashboard</BreadcrumbItem>
            </Breadcrumb>
          </div>

          {/* Center: Search */}
          <div className={styles.navCenter}>
            <Search placeholder="Search" size="default" style={{ width: '100%' }} />
          </div>

          {/* Trailing: bell + avatar */}
          <div className={styles.navTrailing}>
            <BellButton />
            <Avatar size="m" src="https://i.pravatar.cc/150?img=47" />
          </div>
        </div>

        {/* ── Zone 2: Page title ── */}
        <div className={styles.pageTitle}>
          <div>
            <h1 className="text-h1">Dashboard</h1>
          </div>
          <div className={styles.pageTitleActions}>
            <Button variant="tertiary" size="m" icon={<Download01 size={20} />}>Export</Button>
            <Button variant="primary"  size="m" icon={<Plus size={20} />}>Add Order</Button>
          </div>
        </div>

        {/* ── Body ── */}
        <div className={styles.body}>
          <div className={styles.bodyContent}>

            {/* Metric Cards */}
            <div className={styles.metricsRow}>
              <MetricCard metricTitle="Total Revenue"   value="$84,520" trend={{ label: '+12.4% vs last month', direction: 'positive' }} />
              <MetricCard metricTitle="New Users"       value="3,248"   trend={{ label: '+8.7% vs last month',  direction: 'positive' }} />
              <MetricCard metricTitle="Conversion Rate" value="4.2%"    trend={{ label: '-0.3% vs last month',  direction: 'negative' }} />
              <MetricCard metricTitle="Active Sessions" value="1,847"   trend={{ label: '+5.1% vs last month',  direction: 'positive' }} />
            </div>

            {/* Bottom grid */}
            <div className={styles.bottomGrid}>

              {/* Orders table */}
              <div className={styles.tableCard}>
                <div className={styles.tableCardHeader}>
                  <div>
                    <p className="text-body-base-primary" style={{ fontWeight: 'var(--font-weight-secondary)' }}>Recent Orders</p>
                    <p className="text-body-small" style={{ color: 'var(--color-content-neutral-secondary)' }}>{orders.length} transactions this week</p>
                  </div>
                </div>

                <TabGroup tabStyle="indicator" className={styles.tabGroup}>
                  {(['all','completed','pending','processing','failed'] as const).map(id => (
                    <TabItem key={id} label={id === 'all' ? 'All' : STATUS_MAP[id].label} selected={tab === id} onClick={() => setTab(id)} size="s" />
                  ))}
                </TabGroup>

                <TableContainer>
                  <Table style={{ width: '100%', tableLayout: 'fixed' }}>
                    <colgroup>
                      <col style={{ width: '10%' }} />
                      <col style={{ width: '26%' }} />
                      <col style={{ width: '24%' }} />
                      <col style={{ width: '14%' }} />
                      <col style={{ width: '12%' }} />
                      <col style={{ width: '14%' }} />
                    </colgroup>
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell>Order</TableHeaderCell>
                        <TableHeaderCell>Customer</TableHeaderCell>
                        <TableHeaderCell>Product</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                        <TableHeaderCell>Amount</TableHeaderCell>
                        <TableHeaderCell>Date</TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredOrders.map(order => (
                        <TableRow key={order.id}>
                          <TableCell>
                            <TextCell primary={order.id} />
                          </TableCell>
                          <TableCell>
                            <LeadingCell
                              media={<Avatar size="s" color={order.color} background="subtle">{order.initials}</Avatar>}
                              primary={order.customer}
                              caption={order.email}
                              bold
                            />
                          </TableCell>
                          <TableCell><TextCell primary={order.product} /></TableCell>
                          <TableCell>
                            <Badge label={STATUS_MAP[order.status].label} color={STATUS_MAP[order.status].color} variant="subtle" size="s" />
                          </TableCell>
                          <TableCell>
                            <TextCell primary={order.amount} bold />
                          </TableCell>
                          <TableCell>
                            <TextCell primary={order.date} />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>

              {/* Right panel */}
              <div className={styles.rightPanel}>

                <div className={styles.panelCard}>
                  <div className={styles.panelCardHeader}>
                    <p className="text-body-base-primary" style={{ fontWeight: 'var(--font-weight-secondary)' }}>Top Channels</p>
                    <Button variant="flat-primary" size="xs" icon={<ArrowRight size={14} />}>View all</Button>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)' }}>
                    {channels.map(ch => (
                      <div key={ch.label}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--gap-3xsmall)' }}>
                          <span className="text-body-small">{ch.label}</span>
                          <span className="text-body-small" style={{ fontWeight: 'var(--font-weight-secondary)', color: 'var(--color-content-neutral-secondary)' }}>{ch.value}%</span>
                        </div>
                        <ProgressBar value={ch.value} theme={ch.theme} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.panelCard}>
                  <div className={styles.panelCardHeader}>
                    <p className="text-body-base-primary" style={{ fontWeight: 'var(--font-weight-secondary)' }}>Recent Activity</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-small)' }}>
                    {[
                      { text: 'New enterprise signup — Acme Corp', time: '2m ago',   color: 'accent'  as const, initials: 'AC' },
                      { text: 'Payment failed for #ORD-5077',      time: '18m ago',  color: 'crimson' as const, initials: '!' },
                      { text: 'Sara Chen upgraded to Pro',          time: '1h ago',   color: 'blue'    as const, initials: 'SC' },
                      { text: 'Export completed — Q1 report',       time: '3h ago',   color: 'green'   as const, initials: '✓' },
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 'var(--gap-xsmall)', alignItems: 'flex-start' }}>
                        <Avatar size="xs" color={item.color} background="subtle">{item.initials}</Avatar>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p className="text-body-small" style={{ lineHeight: 1.4 }}>{item.text}</p>
                          <p className="text-caption" style={{ color: 'var(--color-content-neutral-tertiary)' }}>{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
