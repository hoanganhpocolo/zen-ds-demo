import { useState, useRef, useEffect } from 'react';
import {
  Badge, Avatar, Button, Popover, PopoverItem,
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

export function TicketsWidget({ menu, widgetSize, maxItems }: { menu?: React.ReactNode; widgetSize?: WidgetSize; maxItems?: number }) {
  const [allTickets, setAllTickets] = useState<Ticket[]>(initialTickets);
  const tickets = maxItems != null ? allTickets.slice(0, maxItems) : allTickets;

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
      title="Your Tickets"
      icon={<Calendar size={20} />}
      actions={<Button variant="tertiary" size="m">See all</Button>}
      menu={menu}
    >
      {isWide ? (
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