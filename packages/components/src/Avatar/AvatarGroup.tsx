import { forwardRef, Children, type HTMLAttributes, type ReactElement } from 'react';
import styles from './Avatar.module.css';
import type { AvatarProps, AvatarSize } from './Avatar';

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Avatar elements */
  children: ReactElement<AvatarProps> | ReactElement<AvatarProps>[];
  /** Size applied to all avatars in the group */
  size?: AvatarSize;
  /** Maximum number of avatars to show before "+N" overflow */
  max?: number;
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, size = 'm', max, className, ...rest }, ref) => {
    const items = Children.toArray(children) as ReactElement<AvatarProps>[];
    const visible = max && max < items.length ? items.slice(0, max) : items;
    const overflow = max && max < items.length ? items.length - max : 0;

    const classNames = [
      styles.group,
      styles[`group-${size}`],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classNames} {...rest}>
        {visible.map((child, i) => (
          <div
            key={child.key ?? i}
            className={styles['group-item']}
            style={{ zIndex: visible.length - i + 1 }}
          >
            {child}
          </div>
        ))}
        {overflow > 0 && (
          <div
            className={styles['group-item']}
            style={{ zIndex: 1 }}
          >
            <div className={[styles.avatar, styles.circle, styles[`size-${size}`], styles.more].join(' ')}>
              <div className={styles.inner}>
                <span className={styles.initials}>+{overflow}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  },
);

AvatarGroup.displayName = 'AvatarGroup';
