import { forwardRef, type HTMLAttributes } from 'react';
import styles from './Divider.module.css';

export type DividerColor = 'default' | 'medium' | 'high';
export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /** Border color intensity */
  color?: DividerColor;
  /** Orientation */
  orientation?: DividerOrientation;
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ color = 'default', orientation = 'horizontal', className, ...rest }, ref) => {
    const classNames = [
      styles.root,
      styles[color],
      styles[orientation],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={classNames}
        {...rest}
      />
    );
  },
);

Divider.displayName = 'Divider';
