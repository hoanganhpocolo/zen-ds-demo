import { useState, type HTMLAttributes } from 'react';
import { Star01 } from '@zen/icons/solid';
import styles from './Rating.module.css';

export interface RatingStarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Current rating value (0–5, supports 0.5 steps) */
  value?: number;
  /** Called when value changes */
  onChange?: (value: number) => void;
  /** Allow half-star selection and display */
  allowHalf?: boolean;
  /** Disable interaction */
  readOnly?: boolean;
  /** Star icon size in px */
  size?: number;
}

export function RatingStar({
  value = 0,
  onChange,
  allowHalf = false,
  readOnly = false,
  size = 24,
  className,
  ...rest
}: RatingStarProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const displayValue = hoverValue ?? value;

  const getStarType = (index: number): 'full' | 'half' | 'empty' => {
    if (displayValue >= index) return 'full';
    if (allowHalf && displayValue >= index - 0.5) return 'half';
    return 'empty';
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>, index: number) => {
    if (readOnly) return;
    if (allowHalf) {
      const rect = e.currentTarget.getBoundingClientRect();
      const half = e.clientX - rect.left < rect.width / 2;
      setHoverValue(half ? index - 0.5 : index);
    } else {
      setHoverValue(index);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>, index: number) => {
    if (readOnly) return;
    let next: number;
    if (allowHalf) {
      const rect = e.currentTarget.getBoundingClientRect();
      const half = e.clientX - rect.left < rect.width / 2;
      next = half ? index - 0.5 : index;
    } else {
      next = index;
    }
    onChange?.(next);
  };

  return (
    <div
      className={[styles['star-root'], readOnly ? '' : styles['star-interactive'], className ?? ''].filter(Boolean).join(' ')}
      onMouseLeave={() => !readOnly && setHoverValue(null)}
      {...rest}
    >
      {[1, 2, 3, 4, 5].map((index) => {
        const type = getStarType(index);
        return (
          <span
            key={index}
            className={styles['star-item']}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onClick={(e) => handleClick(e, index)}
          >
            {/* Base star (always rendered — empty = gray) */}
            <Star01 size={size} className={styles['star-empty']} />
            {/* Filled overlay */}
            {type !== 'empty' && (
              <Star01
                size={size}
                className={styles['star-filled']}
                style={type === 'half' ? { clipPath: 'inset(0 50% 0 0)' } : undefined}
              />
            )}
          </span>
        );
      })}
    </div>
  );
}

RatingStar.displayName = 'RatingStar';
