import { useState, useRef, useEffect } from 'react';
import {
  Badge, Avatar, Button, Popover, PopoverItem, Segmented,
  Table, TableContainer, TableHead, TableBody, TableRow, TableHeaderCell, TableCell,
} from '@zen/components';
import { Calendar, DotsHorizontal, Check, XMedium } from '@zen/icons/line';
import { WidgetShell } from './WidgetShell';
import { registerWidget } from './registry';
import type { WidgetSize } from './DashboardGrid';
import './widget-content.css';

type TicketStatusColor = 'yellow' | 'green' | 'red';
type TicketAvatarColor = 'accent' | 'blue' | 'green' | 'purple' | 'orange';

interface Ticket {
  id: string;
  date: string;
  title: string;
  service: string;
  status: string;
  statusColor: TicketStatusColor;
  name: string;
  color: TicketAvatarColor;
  avatar: string;
}

const initialTickets: Ticket[] = [
  { id: '#114051', date: '12 Nov', title: 'Report missing items',           service: 'Nexus Tickets',  status: 'In progress', statusColor: 'yellow', name: 'Luna Tran',    color: 'accent', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: '#214051', date: '8 Nov',  title: 'PUBGM request access',           service: 'Apollo',         status: 'In progress', statusColor: 'yellow', name: 'Minh Nguyen',  color: 'blue',   avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: '#314051', date: '4 Nov',  title: 'Campaign 2738 approval request', service: 'Apollo',         status: 'Resolved',    statusColor: 'green',  name: 'Hoa Le',       color: 'green',  avatar: 'https://randomuser.me/api/portraits/women/79.jpg' },
  { id: '#314052', date: '1 Nov',  title: 'Server maintenance notification', service: 'SDK Management', status: 'Resolved',    statusColor: 'green',  name: 'Duc Pham',     color: 'purple', avatar: 'https://randomuser.me/api/portraits/men/40.jpg' },
  { id: '#414053', date: '28 Oct', title: 'SDK integration issue',          service: 'SDK Management', status: 'In progress', statusColor: 'yellow', name: 'An Vo',        color: 'orange', avatar: 'https://randomuser.me/api/portraits/men/83.jpg' },
];

/* ── AMT (Access Management Tool) ── */
type AMTStatus = 'CLOSE' | 'REJECTED' | 'PENDING' | 'APPROVED';
type AMTStatusColor = 'neutral' | 'red' | 'yellow' | 'green';

interface AMTRequest {
  id: string;
  user: string;
  tool: string;
  /** Combined "Type - Role update" (e.g. "Grant — Custom permission") */
  role: string;
  status: AMTStatus;
}

const AMT_STATUS_COLOR: Record<AMTStatus, AMTStatusColor> = {
  CLOSE: 'neutral',
  REJECTED: 'red',
  PENDING: 'yellow',
  APPROVED: 'green',
};

const initialAMT: AMTRequest[] = [
  { id: '2690', user: 'Tuấn. Trịnh Trần Minh',  tool: 'Nexus', role: 'Grant — Custom permission',      status: 'CLOSE' },
  { id: '2689', user: 'Tuấn. Trịnh Trần Minh',  tool: 'Nexus', role: 'Grant — CookieRun OvenSmash',    status: 'CLOSE' },
  { id: '2688', user: 'Quân. Đỗ Hồng',          tool: 'Nexus', role: 'Grant — Custom permission',      status: 'CLOSE' },
  { id: '2687', user: 'Tuấn. Trịnh Trần Minh',  tool: 'Nexus', role: 'Grant — GMT All Games',          status: 'CLOSE' },
  { id: '2686', user: 'Tuấn. Trịnh Trần Minh',  tool: 'Nexus', role: 'Grant — Animal Brawl: PvP Me…',  status: 'CLOSE' },
  { id: '2685', user: 'Thanh. Diệp Bội',        tool: 'Nexus', role: 'Grant — GMT All Non-Game',       status: 'REJECTED' },
];

function TicketActions({ onApprove, onReject }: { onApprove: () => void; onReject: () => void }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <Button
        ref={btnRef}
        variant="flat-primary"
        size="s"
        icon={<DotsHorizontal size={16} />}
        onClick={(e) => { e.stopPropagation(); setOpen(v => !v); }}
        aria-label="Ticket actions"
      />
      <Popover
        open={open}
        anchorEl={btnRef.current}
        placement="bottom-end"
        onClose={() => setOpen(false)}
      >
        <PopoverItem
          label="Approve"
          leading={<Check size={16} />}
          noCheck
          onClick={() => { onApprove(); setOpen(false); }}
        />
        <PopoverItem
          label="Reject"
          leading={<XMedium size={16} />}
          noCheck
          onClick={() => { onReject(); setOpen(false); }}
          className="wc-ticket-action-danger"
        />
      </Popover>
    </>
  );
}

type TabKey = 'tickets' | 'amt';

function AMTList({ items }: { items: AMTRequest[] }) {
  return (
    <div className="wc-ticket-list">
      {items.map((r) => (
        <div key={r.id} className="wc-amt-item">
          <div className="wc-amt-info">
            <span className="text-body-small wc-tertiary-text">#{r.id}</span>
            <p className="text-body-base wc-bold wc-truncate">{r.user}</p>
            <p className="text-body-small wc-tertiary-text wc-truncate">{r.tool} · {r.role}</p>
          </div>
          <Badge label={r.status} size="m" color={AMT_STATUS_COLOR[r.status]} variant="subtle" dot={false} />
        </div>
      ))}
    </div>
  );
}

function AMTTable({ items }: { items: AMTRequest[] }) {
  return (
    <TableContainer className="wc-ticket-table">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell label="ID" />
            <TableHeaderCell label="User" />
            <TableHeaderCell label="Tool" />
            <TableHeaderCell label="Role" />
            <TableHeaderCell label="Status" />
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((r) => (
            <TableRow key={r.id}>
              <TableCell>#{r.id}</TableCell>
              <TableCell><span className="wc-bold">{r.user}</span></TableCell>
              <TableCell>{r.tool}</TableCell>
              <TableCell>{r.role}</TableCell>
              <TableCell>
                <Badge label={r.status} size="m" color={AMT_STATUS_COLOR[r.status]} variant="subtle" dot={false} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function TicketsWidget({ menu, widgetSize, maxItems }: { menu?: React.ReactNode; widgetSize?: WidgetSize; maxItems?: number }) {
  const [tab, setTab] = useState<TabKey>('tickets');
  const [allTickets, setAllTickets] = useState<Ticket[]>(initialTickets);
  const tickets = maxItems != null ? allTickets.slice(0, maxItems) : allTickets;
  const amt = maxItems != null ? initialAMT.slice(0, maxItems) : initialAMT;

  // Force 1-column list view on mobile (<= 768px) regardless of configured widgetSize
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
  );
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const isWide = !isMobile && (widgetSize ?? 1) >= 2;

  const updateStatus = (idx: number, status: string, statusColor: TicketStatusColor) => {
    setAllTickets(prev => prev.map((t, i) => i === idx ? { ...t, status, statusColor } : t));
  };

  return (
    <WidgetShell
      title=""
      icon={
        <Segmented
          size="medium"
          items={[
            { value: 'tickets', label: 'Tickets' },
            { value: 'amt',     label: 'AMT' },
          ]}
          value={tab}
          onChange={(v) => setTab(v as TabKey)}
        />
      }
      actions={<Button variant="tertiary" size="m">See all</Button>}
      menu={menu}
    >
      {tab === 'tickets' ? (
        isWide ? (
          <TableContainer className="wc-ticket-table">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell label="ID" />
                  <TableHeaderCell label="Title" />
                  <TableHeaderCell label="Service" />
                  <TableHeaderCell label="Requestor" />
                  <TableHeaderCell label="Status" />
                  <TableHeaderCell label="" align="right" />
                </TableRow>
              </TableHead>
              <TableBody>
                {tickets.map((t, i) => (
                  <TableRow key={i}>
                    <TableCell>{t.id}</TableCell>
                    <TableCell>
                      <span className="wc-bold">{t.title}</span>
                    </TableCell>
                    <TableCell>{t.service}</TableCell>
                    <TableCell>
                      <div className="wc-ticket-requestor">
                        <Avatar size="s" src={t.avatar} alt={t.name} />
                        <span>{t.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge label={t.status} size="m" color={t.statusColor} variant="subtle" dot={false} />
                    </TableCell>
                    <TableCell align="right">
                      <TicketActions
                        onApprove={() => updateStatus(i, 'Resolved', 'green')}
                        onReject={() => updateStatus(i, 'Rejected', 'red')}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <div className="wc-ticket-list">
            {tickets.map((t, i) => (
              <div key={i} className="wc-ticket-item">
                <Avatar size="m" src={t.avatar} alt={t.name} />
                <div className="wc-ticket-info">
                  <p className="text-body-base wc-bold wc-truncate">{t.title}</p>
                  <p className="text-body-small wc-tertiary-text">{t.id} · {t.date} · {t.name}</p>
                </div>
                <Badge label={t.status} size="m" color={t.statusColor} variant="subtle" dot={false} />
                <TicketActions
                  onApprove={() => updateStatus(i, 'Resolved', 'green')}
                  onReject={() => updateStatus(i, 'Rejected', 'red')}
                />
              </div>
            ))}
          </div>
        )
      ) : (
        isWide ? <AMTTable items={amt} /> : <AMTList items={amt} />
      )}
    </WidgetShell>
  );
}

registerWidget({
  id: 'tickets',
  title: 'Tickets',
  category: 'home',
  defaultW: 1,
  defaultH: 3,
  minH: 2,
  component: TicketsWidget,
  emoji: '🎫',
  description: 'Track your support tickets',
});