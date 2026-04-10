import { Segmented } from '@zen/components';
import { Globe01 } from '@zen/icons/line';
import { WidgetShell } from './WidgetShell';
import { registerWidget } from './registry';
import './widget-content.css';

export function UpdatesWidget({ menu }: { menu?: React.ReactNode }) {
  return (
    <WidgetShell
      title="Recent Updates"
      icon={<Globe01 size={20} />}
      actions={
        <Segmented
          size="medium"
          items={[
            { value: 'event', label: 'Event' },
            { value: 'news', label: 'News' },
          ]}
          defaultValue="event"
        />
      }
      menu={menu}
      flush
    >
      <img src="/connect and shine .png" alt="Connect & Shine" className="wc-banner-img" />
    </WidgetShell>
  );
}

registerWidget({
  id: 'updates',
  title: 'Recent Updates',
  defaultW: 1,
  defaultH: 3,
  minH: 2,
  component: UpdatesWidget,
  emoji: '📰',
  description: 'Latest events and news',
});
