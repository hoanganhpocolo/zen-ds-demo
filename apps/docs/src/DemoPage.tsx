import { useState } from 'react';
import { UIExampleDemo } from './demos/UIExampleDemo';
import { TimeOffDemo } from './demos/TimeOffDemo';
import { TimeOffSettingsDemo } from './demos/TimeOffSettingsDemo';
import { InspectorProvider } from './inspector/InspectorContext';
import { PropsPanel, SelectionRing } from './inspector/PropsPanel';
import styles from './DemoPage.module.css';

const DEMOS = [
  { id: 'ui-example',       label: 'UI Example' },
  { id: 'timeoff',          label: 'Time Off' },
  { id: 'timeoff-settings', label: 'Time Off Settings' },
] as const;

type DemoId = typeof DEMOS[number]['id'];

export function DemoPage() {
  const [active, setActive] = useState<DemoId>('ui-example');

  return (
    <InspectorProvider>
      <div className={styles.root}>
        <div className={styles.tabBar}>
          {DEMOS.map(demo => (
            <button
              key={demo.id}
              className={[styles.tab, active === demo.id ? styles.tabActive : ''].filter(Boolean).join(' ')}
              onClick={() => setActive(demo.id)}
            >
              {demo.label}
            </button>
          ))}
        </div>
        {active === 'ui-example' ? (
          <div className={styles.frameOuter}>
            <UIExampleDemo />
          </div>
        ) : (
          <div className={styles.frameOuter}>
            <div className={styles.frame}>
              {active === 'timeoff'          && <TimeOffDemo />}
              {active === 'timeoff-settings' && <TimeOffSettingsDemo />}
            </div>
          </div>
        )}
      </div>
      <SelectionRing />
      <PropsPanel />
    </InspectorProvider>
  );
}
