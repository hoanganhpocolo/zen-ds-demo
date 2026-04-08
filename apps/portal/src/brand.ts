const STEPS = Array.from({ length: 12 }, (_, i) => i + 1);
const BRIGHT_HUES = new Set(['yellow', 'lime', 'mint', 'sky', 'zen']);

export type Hue =
  | 'zen' | 'pink' | 'crimson' | 'tomato' | 'orange' | 'gold'
  | 'yellow' | 'lime' | 'grass' | 'mint' | 'teal' | 'cyan' | 'sky' | 'blue'
  | 'indigo' | 'violet' | 'purple' | 'plum' | 'brown' | 'bronze'
  | 'gray' | 'sand' | 'smoke';

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
