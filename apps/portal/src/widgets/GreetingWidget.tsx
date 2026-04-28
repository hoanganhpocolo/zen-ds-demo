import { useState } from 'react';
import { Segmented, Calendar } from '@zen/components';
import { Rocket, Lock01, Play } from '@zen/icons/solid';
import { WidgetShell } from './WidgetShell';
import { registerWidget } from './registry';
import type { WidgetSize } from './DashboardGrid';
import { glcEvents, GLC_MILESTONE_META, type GLCEvent, type GLCMilestoneType } from './glc-events';
import './widget-content.css';

interface WorkEvent {
  kind: 'work';
  id: string;
  title: string;
  time: string;
  location: string;
  day: number;
}

const worksEvents: WorkEvent[] = [
  { kind: 'work', id: 'w-1', title: 'Nexus Daily meeting',          time: '10:00 AM', location: 'Hot desk GPP',  day: 6 },
  { kind: 'work', id: 'w-2', title: 'VNGGames Connect & Shine 2025', time: '14:00 AM', location: 'Stadium',       day: 6 },
  { kind: 'work', id: 'w-3', title: 'Nexus Daily meeting',          time: '10:00 AM', location: 'Hot desk GPP',  day: 7 },
  { kind: 'work', id: 'w-4', title: 'Sprint Review Q2',             time: '15:30 PM', location: 'Meeting Room A',day: 8 },
  { kind: 'work', id: 'w-5', title: 'Design System Sync',           time: '16:00 PM', location: 'Online',        day: 10 },
  { kind: 'work', id: 'w-6', title: 'Team Standup',                 time: '09:00 AM', location: 'Hot desk GPP',  day: 12 },
  { kind: 'work', id: 'w-7', title: '1-on-1 with Manager',          time: '11:00 AM', location: 'Room B2',       day: 15 },
];

type FilterTab = 'all' | 'glc' | 'works';
type AnyEvent = GLCEvent | WorkEvent;

function getMilestoneIcon(type: GLCMilestoneType) {
  switch (type) {
    case 'ob':     return <Rocket size={16} />;
    case 'cbt':    return <Lock01 size={16} />;
    case 'start':  return <Play size={16} />;
    case 'launch': return <Rocket size={16} />;
  }
}

function MilestoneRow({ ev }: { ev: Extract<GLCEvent, { kind: 'milestone' }> }) {
  const meta = GLC_MILESTONE_META[ev.type];
  return (
    <a
      className="wc-event-milestone"
      data-tone={meta.tone}
      href={ev.href ?? '#'}
      onClick={(e) => { if (!ev.href) e.preventDefault(); }}
    >
      <span className="text-body-base wc-event-milestone-text">
        {ev.game} {meta.label}
      </span>
      <span className="wc-event-milestone-icon">{getMilestoneIcon(ev.type)}</span>
    </a>
  );
}

function TaskRow({ ev }: { ev: Extract<GLCEvent, { kind: 'task' }> }) {
  return (
    <a
      className="wc-event-task"
      href={ev.href ?? '#'}
      onClick={(e) => { if (!ev.href) e.preventDefault(); }}
    >
      <p className="text-body-base wc-event-task-title">
        {ev.locale ? `[${ev.locale}] ` : ''}{ev.title}
      </p>
      <p className="text-body-small wc-tertiary-text">{ev.game}</p>
    </a>
  );
}

function WorkRow({ ev }: { ev: WorkEvent }) {
  return (
    <div className="wc-event-item">
      <p className="text-body-base wc-bold">{ev.title}</p>
      <p className="text-body-small wc-tertiary-text">{ev.time} · {ev.location}</p>
    </div>
  );
}

function EventList({ items, maxItems }: { items: AnyEvent[]; maxItems?: number }) {
  const sliced = maxItems ? items.slice(0, maxItems) : items;
  return (
    <div className="wc-event-list">
      {sliced.map((ev) => {
        if (ev.kind === 'milestone') return <MilestoneRow key={ev.id} ev={ev} />;
        if (ev.kind === 'task')      return <TaskRow      key={ev.id} ev={ev} />;
        return <WorkRow key={ev.id} ev={ev} />;
      })}
    </div>
  );
}

function selectEvents(tab: FilterTab): AnyEvent[] {
  if (tab === 'glc') return [...glcEvents];
  if (tab === 'works') return [...worksEvents];
  // 'all' — milestones first (impactful dates), then tasks, then works.
  // First 6 fill the widget viewport; the rest stays in the scroll buffer.
  const ms = glcEvents.filter((e) => e.kind === 'milestone');
  const ts = glcEvents.filter((e) => e.kind === 'task');
  return [...ms, ...ts, ...worksEvents];
}

function useCalendarInfo(visibleEvents: AnyEvent[]) {
  const now = new Date();
  const eventDates = [...new Set(visibleEvents.map((e) => e.day))].map(
    (d) => new Date(now.getFullYear(), now.getMonth(), d)
  );
  const month = now.toLocaleString('en', { month: 'long' });
  const monthShort = now.toLocaleString('en', { month: 'short' }).toUpperCase();
  const year = now.getFullYear();
  const day = now.getDate();
  return { month, monthShort, year, day, eventDates };
}

export function GreetingWidget({ menu, widgetSize, maxItems }: { menu?: React.ReactNode; widgetSize?: WidgetSize; maxItems?: number }) {
  const [tab, setTab] = useState<FilterTab>('all');
  const visibleEvents = selectEvents(tab);
  const cal = useCalendarInfo(visibleEvents);
  const isWide = (widgetSize ?? 1) >= 2;

  return (
    <WidgetShell
      title=""
      icon={
        <div className="wc-calendar-header">
          <div className="wc-calendar-icon-box">
            <span className="text-small-label wc-calendar-icon-month">{cal.monthShort}</span>
            <span className="text-body-base wc-bold wc-calendar-icon-day">{cal.day}</span>
          </div>
          <div className="wc-calendar-header-info">
            <span className="text-body-extra wc-widget-title-text wc-calendar-title">{cal.month} {cal.year}</span>
          </div>
        </div>
      }
      actions={
        <Segmented
          size="medium"
          items={[
            { value: 'all',   label: 'All' },
            { value: 'glc',   label: 'GLC' },
            { value: 'works', label: 'Works' },
          ]}
          value={tab}
          onChange={(v) => setTab(v as FilterTab)}
        />
      }
      menu={menu}
    >
      {isWide ? (
        <div className="wc-calendar-wide">
          <Calendar
            variant="inline"
            defaultValue={new Date()}
            eventDates={cal.eventDates}
          />
          <div className="wc-calendar-wide-events">
            <EventList items={visibleEvents} maxItems={maxItems} />
          </div>
        </div>
      ) : (
        <EventList items={visibleEvents} maxItems={maxItems} />
      )}
    </WidgetShell>
  );
}

registerWidget({
  id: 'greeting',
  title: 'Calendar',
  category: 'home',
  defaultW: 1,
  defaultH: 3,
  minH: 2,
  component: GreetingWidget,
  emoji: '📅',
  description: 'Daily schedule, GLC milestones, and tasks',
});
