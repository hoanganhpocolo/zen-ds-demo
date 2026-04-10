import { Segmented, Calendar } from '@zen/components';
import { WidgetShell } from './WidgetShell';
import { registerWidget } from './registry';
import type { WidgetSize } from './DashboardGrid';
import './widget-content.css';

const events = [
  { title: 'Nexus Daily meeting', time: '10:00 AM', location: 'Hot desk GPP', day: 6 },
  { title: 'VNGGames Connect & Shine 2025', time: '14:00 AM', location: 'Stadium', day: 6 },
  { title: 'Nexus Daily meeting', time: '10:00 AM', location: 'Hot desk GPP', day: 7 },
  { title: 'Sprint Review Q2', time: '15:30 PM', location: 'Meeting Room A', day: 8 },
  { title: 'Design System Sync', time: '16:00 PM', location: 'Online', day: 10 },
  { title: 'Team Standup', time: '09:00 AM', location: 'Hot desk GPP', day: 12 },
  { title: '1-on-1 with Manager', time: '11:00 AM', location: 'Room B2', day: 15 },
];

/* Build eventDates for Calendar component */
const now = new Date();
const eventDates = [...new Set(events.map(e => e.day))].map(
  d => new Date(now.getFullYear(), now.getMonth(), d)
);

function getCalendarInfo() {
  const month = now.toLocaleString('en', { month: 'long' });
  const monthShort = now.toLocaleString('en', { month: 'short' }).toUpperCase();
  const year = now.getFullYear();
  const day = now.getDate();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  const fmt = (d: Date) => d.toLocaleDateString('en', { month: 'short', day: 'numeric', year: 'numeric' });
  return { month, monthShort, year, day, range: `${fmt(firstDay)} – ${fmt(lastDay)}` };
}

function EventList() {
  return (
    <div className="wc-event-list">
      {events.map((e, i) => (
        <div key={i} className="wc-event-item">
          <p className="text-body-small wc-bold">{e.title}</p>
          <p className="text-caption wc-tertiary-text">{e.time}  ·  {e.location}</p>
        </div>
      ))}
    </div>
  );
}

export function GreetingWidget({ menu, widgetSize }: { menu?: React.ReactNode; widgetSize?: WidgetSize }) {
  const cal = getCalendarInfo();
  const isWide = (widgetSize ?? 1) >= 2;

  return (
    <WidgetShell
      maxHeight={418}
      title=""
      icon={
        <div className="wc-calendar-header">
          <div className="wc-calendar-icon-box">
            <span className="text-small-label wc-calendar-icon-month">{cal.monthShort}</span>
            <span className="text-body-base wc-bold wc-calendar-icon-day">{cal.day}</span>
          </div>
          <div className="wc-calendar-header-info">
            <span className="text-body-base wc-widget-title-text wc-calendar-title">{cal.month} {cal.year}</span>
          </div>
        </div>
      }
      actions={
        <Segmented
          size="medium"
          items={[
            { value: 'all', label: 'All' },
            { value: 'glc', label: 'GLC' },
            { value: 'works', label: 'Works' },
          ]}
          defaultValue="all"
        />
      }
      menu={menu}
    >
      {isWide ? (
        <div className="wc-calendar-wide">
          <Calendar
            variant="inline"
            defaultValue={new Date()}
            eventDates={eventDates}
          />
          <div className="wc-calendar-wide-events">
            <EventList />
          </div>
        </div>
      ) : (
        <EventList />
      )}
    </WidgetShell>
  );
}

registerWidget({
  id: 'greeting',
  title: 'Calendar',
  defaultW: 1,
  defaultH: 3,
  minH: 2,
  component: GreetingWidget,
  emoji: '📅',
  description: 'Daily schedule and upcoming events',
});
