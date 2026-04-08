import { useState, useCallback, type HTMLAttributes } from 'react';
import styles from './Slider.module.css';

export type SliderTheme = 'neutral' | 'accent' | 'white';
export type SliderSize = 'small' | 'medium' | 'large';

export interface SliderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Controlled value */
  value?: number;
  /** Uncontrolled default value */
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  /** Called when value changes */
  onChange?: (value: number) => void;
  /** Fill color theme */
  theme?: SliderTheme;
  size?: SliderSize;
  /** Show min/max labels below the track */
  showLabels?: boolean;
  disabled?: boolean;
}

export function Slider({
  value,
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  theme = 'neutral',
  size = 'medium',
  showLabels = false,
  disabled = false,
  className,
  style,
  ...rest
}: SliderProps) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue);
  const current = isControlled ? value! : internal;

  const percent = Math.min(100, Math.max(0, ((current - min) / (max - min)) * 100));

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = Number(e.target.value);
      if (!isControlled) setInternal(next);
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  const rootClasses = [
    styles.root,
    styles[`size-${size}`],
    styles[`theme-${theme}`],
    disabled ? styles.disabled : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const cssVars = {
    '--_percent': `${percent}%`,
    ...style,
  } as React.CSSProperties;

  return (
    <div className={rootClasses} style={cssVars} {...rest}>
      <div className={styles.track}>
        {/* Invisible native input — handles all interaction, keyboard, accessibility */}
        <input
          type="range"
          className={styles.input}
          min={min}
          max={max}
          step={step}
          value={current}
          onChange={handleChange}
          disabled={disabled}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={current}
        />
        {/* Fill */}
        <div className={styles.fill} />
        {/* Thumb */}
        <div className={styles.thumb} />
      </div>

      {showLabels && (
        <div className={styles.labels}>
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
}

Slider.displayName = 'Slider';
