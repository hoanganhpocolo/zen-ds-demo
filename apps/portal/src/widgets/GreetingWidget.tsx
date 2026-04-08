import { WidgetShell } from './WidgetShell';
import { registerWidget } from './registry';
import './widget-content.css';

export function GreetingWidget({ onRemove, menu }: { onRemove?: () => void; menu?: React.ReactNode }) {
  return (
    <WidgetShell title="Today's Schedule" icon={<span>📅</span>} menu={menu}>
      <div className="wc-greeting">
        <p className="text-body-small wc-secondary-text">Thursday, 20th January</p>
        <div className="wc-event-list">
          <div className="wc-event-item">
            <p className="text-body-small wc-bold">Nexus Daily meeting</p>
            <p className="text-caption wc-tertiary-text">10:00 AM · Hot desk GPP</p>
          </div>
          <div className="wc-event-item">
            <p className="text-body-small wc-bold">VNGGames Connect & Shine 2025</p>
            <p className="text-caption wc-tertiary-text">14:00 AM · Stadium</p>
          </div>
        </div>
        <p className="text-body-small wc-more-events">+2 more events</p>
      </div>
    </WidgetShell>
  );
}

registerWidget({
  id: 'greeting',
  title: "Today's Schedule",
  defaultW: 1,
  defaultH: 3,
  minH: 2,
  component: GreetingWidget,
  emoji: '📅',
  description: 'Daily schedule and upcoming events',
});
