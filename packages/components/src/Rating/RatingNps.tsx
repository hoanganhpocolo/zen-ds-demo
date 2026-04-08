import { type HTMLAttributes } from 'react';
import styles from './Rating.module.css';

export interface RatingNpsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Currently selected value */
  value?: number;
  /** Called when a chip is clicked */
  onChange?: (value: number) => void;
  /** Scale: 5 = (0–5), 10 = (0–10) */
  scale?: 5 | 10;
  /** Label below the low end */
  lowLabel?: string;
  /** Label below the high end */
  highLabel?: string;
}

export function RatingNps({
  value,
  onChange,
  scale = 5,
  lowLabel,
  highLabel,
  className,
  ...rest
}: RatingNpsProps) {
  const count = scale + 1; // 6 or 11 chips
  const chips = Array.from({ length: count }, (_, i) => i);

  return (
    <div className={[styles['nps-root'], className ?? ''].filter(Boolean).join(' ')} {...rest}>
      <div className={styles['nps-row']}>
        {chips.map((n) => (
          <button
            key={n}
            type="button"
            className={[
              styles['nps-chip'],
              value === n ? styles['nps-chip-selected'] : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => onChange?.(n)}
          >
            {n}
          </button>
        ))}
      </div>
      {(lowLabel || highLabel) && (
        <div className={styles['nps-labels']}>
          <span className={styles['nps-label']}>{lowLabel}</span>
          <span className={styles['nps-label']}>{highLabel}</span>
        </div>
      )}
    </div>
  );
}

RatingNps.displayName = 'RatingNps';
