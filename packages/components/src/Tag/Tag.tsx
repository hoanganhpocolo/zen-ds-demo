import { type HTMLAttributes, type ReactNode } from 'react';
import { XCircle } from '@zen/icons/solid';
import styles from './Tag.module.css';

export type TagTheme = 'text-only' | 'leading-icon' | 'leading-photo';

export interface TagProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  label: ReactNode;
  theme?: TagTheme;
  icon?: ReactNode;
  avatar?: ReactNode;
  removable?: boolean;
  onRemove?: () => void;
  error?: boolean;
  disabled?: boolean;
}

export function Tag({
  label,
  theme = 'text-only',
  icon,
  avatar,
  removable = false,
  onRemove,
  error = false,
  disabled = false,
  className,
  ...rest
}: TagProps) {
  const tagClass = [
    styles.tag,
    error && !disabled ? styles['tag-error'] : '',
    disabled ? styles['tag-disabled'] : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <div className={tagClass} {...rest}>
      {theme === 'leading-icon' && icon && (
        <span className={[styles.leading, disabled ? styles['leading-disabled'] : ''].filter(Boolean).join(' ')}>
          {icon}
        </span>
      )}
      {theme === 'leading-photo' && avatar && (
        <span className={[styles.leading, disabled ? styles['leading-disabled'] : ''].filter(Boolean).join(' ')}>
          {avatar}
        </span>
      )}
      <span className={[styles.label, disabled ? styles['label-disabled'] : error ? styles['label-error'] : ''].filter(Boolean).join(' ')}>
        {label}
      </span>
      {removable && (
        <button
          className={[styles.remove, disabled ? styles['remove-disabled'] : error ? styles['remove-error'] : ''].filter(Boolean).join(' ')}
          onClick={onRemove}
          disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          aria-label="Remove"
          type="button"
        >
          <XCircle size={20} />
        </button>
      )}
    </div>
  );
}

Tag.displayName = 'Tag';
