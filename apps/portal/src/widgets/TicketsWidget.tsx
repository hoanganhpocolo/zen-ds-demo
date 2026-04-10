import { Badge, Avatar, Button } from '@zen/components';
import { Calendar } from '@zen/icons/line';
import { WidgetShell } from './WidgetShell';
import { registerWidget } from './registry';
import './widget-content.css';

const tickets = [
  { id: '#114051', date: '12 Nov', title: 'Report missing items', status: 'In progress', statusColor: 'yellow' as const, name: 'Luna Tran', color: 'accent' as const },
  { id: '#214051', date: '8 Nov', title: 'PUBGM request access', status: 'In progress', statusColor: 'yellow' as const, name: 'Minh Nguyen', color: 'blue' as const },
  { id: '#114051', date: '4 Nov', title: 'Campaign 2738 approval request', status: 'Resolved', statusColor: 'green' as const, name: 'Hoa Le', color: 'green' as const },
  { id: '#314052', date: '1 Nov', title: 'Server maintenance notification', status: 'Resolved', statusColor: 'green' as const, name: 'Duc Pham', color: 'purple' as const },
  { id: '#414053', date: '28 Oct', title: 'SDK integration issue', status: 'In progress', statusColor: 'yellow' as const, name: 'An Vo', color: 'orange' as const },
];

export function TicketsWidget({ menu }: { menu?: React.ReactNode }) {
  return (
    <WidgetShell
      title="Your Tickets"
      icon={<Calendar size={20} />}
      actions={<Button variant="tertiary" size="m">See all</Button>}
      menu={menu}
    >
      <div className="wc-ticket-list">
        {tickets.map((t, i) => (
          <div key={i} className="wc-ticket-item">
            <Avatar size="m" color={t.color}>{t.name.charAt(0)}</Avatar>
            <div className="wc-ticket-info">
              <p className="text-body-small wc-bold wc-truncate">{t.title}</p>
              <p className="text-caption wc-tertiary-text">{t.id} · {t.date} · {t.name}</p>
            </div>
            <Badge label={t.status} size="m" color={t.statusColor} variant="subtle" dot={false} />
          </div>
        ))}
      </div>
    </WidgetShell>
  );
}

registerWidget({
  id: 'tickets',
  title: 'Your Tickets',
  defaultW: 1,
  defaultH: 3,
  minH: 2,
  component: TicketsWidget,
  emoji: '🎫',
  description: 'Track your support tickets',
});
