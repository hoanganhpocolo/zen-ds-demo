import { useEffect } from 'react';
import { Button } from '@zen/components';
import styles from './ThemePicker.module.css';

export const HUES = [
  'zen', 'pink', 'crimson', 'tomato', 'orange', 'gold',
  'yellow', 'lime', 'grass', 'mint', 'teal', 'cyan', 'sky', 'blue',
  'indigo', 'violet', 'purple', 'plum', 'brown', 'bronze',
  'gray', 'sand', 'smoke',
] as const;

export type Hue = typeof HUES[number];

export const DEFAULT_HUE: Hue = 'zen';

const STEPS = Array.from({ length: 12 }, (_, i) => i + 1);

// Hues where step-9 is bright/light → dark text on brand backgrounds
const BRIGHT_HUES = new Set<Hue>(['yellow', 'lime', 'mint', 'sky', 'zen']);

export function applyBrandHue(hue: Hue) {
  const root = document.documentElement;
  const computed = getComputedStyle(root);
  const isDark = root.getAttribute('data-theme') === 'dark';
  const prefix = isDark ? 'dark' : 'light';

  STEPS.forEach(i => {
    root.style.setProperty(
      `--color-brand-${i}`,
      computed.getPropertyValue(`--${prefix}-color-${hue}-${i}`).trim(),
    );
    root.style.setProperty(
      `--color-brand-alpha-${i}`,
      computed.getPropertyValue(`--${prefix}-color-${hue}-alpha-${i}`).trim(),
    );
  });

  root.setAttribute('data-brand-bright', BRIGHT_HUES.has(hue) ? 'true' : 'false');
}

export function resetBrandHue() {
  const root = document.documentElement;
  STEPS.forEach(i => {
    root.style.removeProperty(`--color-brand-${i}`);
    root.style.removeProperty(`--color-brand-alpha-${i}`);
  });
  root.removeAttribute('data-brand-bright');
}

interface ThemePickerProps {
  hue: Hue;
  onChange: (hue: Hue) => void;
  onClose: () => void;
}

export function ThemePicker({ hue, onChange, onClose }: ThemePickerProps) {
  useEffect(() => {
    hue === DEFAULT_HUE ? resetBrandHue() : applyBrandHue(hue);
  }, [hue]);

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.panel}>
        <p className={`text-body-small ${styles.label}`}>Brand color</p>
        <div className={styles.chips}>
          {HUES.map((h) => (
            <button
              key={h}
              className={`${styles.chip} ${hue === h ? styles.chipSelected : ''}`}
              style={{ background: `var(--light-color-${h}-9)` }}
              title={h}
              onClick={() => onChange(h)}
            />
          ))}
        </div>
        {hue !== DEFAULT_HUE && (
          <Button variant="tertiary" size="xs" onClick={() => onChange(DEFAULT_HUE)}>
            Reset
          </Button>
        )}
      </div>
    </>
  );
}
