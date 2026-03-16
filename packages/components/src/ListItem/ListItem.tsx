import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import styles from './ListItem.module.css';

export interface ListItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Highlight as selected */
  selected?: boolean;
  /** Leading slot — avatar, icon, image, thumbnail, etc. */
  leading?: ReactNode;
  /** Primary title text */
  title?: ReactNode;
  /** Secondary caption text */
  caption?: ReactNode;
  /** Trailing slot — action buttons, badge, chevron, etc. */
  trailing?: ReactNode;
}

export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
  (
    {
      selected = false,
      leading,
      title,
      caption,
      trailing,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const classes = [
      styles.root,
      selected ? styles.selected : '',
      className ?? '',
    ].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classes} {...rest}>
        <div className={styles.contents}>
          {/* Leading slot */}
          {leading && (
            <div className={styles.leading}>
              {leading}
            </div>
          )}

          {/* Info content */}
          {(title != null || caption != null) && (
            <div className={styles.info}>
              {title != null && (
                <span className={styles.title}>{title}</span>
              )}
              {caption != null && (
                <span className={styles.caption}>{caption}</span>
              )}
            </div>
          )}

          {/* Custom children override (when not using title/caption) */}
          {children}

          {/* Trailing slot */}
          {trailing && (
            <div className={styles.trailing}>
              {trailing}
            </div>
          )}
        </div>
      </div>
    );
  },
);

ListItem.displayName = 'ListItem';
