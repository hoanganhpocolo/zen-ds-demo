import { forwardRef, type ReactNode, type HTMLAttributes } from 'react';
import styles from './FieldShell.module.css';

export type FieldSize = 's' | 'm' | 'l' | 'xl';

export interface FieldHelpText {
  message: string;
  tone?: 'neutral' | 'negative';
  icon?: boolean;
}

export interface FieldShellProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  label?: string;
  size?: FieldSize;
  leading?: ReactNode;
  trailing?: ReactNode;
  helpText?: FieldHelpText | string;
  charCount?: string;
  error?: boolean | string;
  disabled?: boolean;
  readOnly?: boolean;
  focused?: boolean;
  /** Allow container height to be auto (for textarea) */
  autoHeight?: boolean;
  /** Remove vertical padding on auto-height container (child manages its own) */
  noVPadding?: boolean;
  /** The inner input/textarea element */
  children: ReactNode;
  /** Click handler to focus the inner input */
  onFieldClick?: () => void;
}

/** Resolve help text considering error state */
export function resolveHelpText(
  helpText: FieldHelpText | string | undefined,
  error: boolean | string | undefined,
): FieldHelpText | undefined {
  const hasError = !!error;
  if (typeof error === 'string' && error)
    return { message: error, tone: 'negative', icon: true };
  if (hasError && typeof helpText === 'string')
    return { message: helpText, tone: 'negative', icon: true };
  if (typeof helpText === 'string')
    return { message: helpText, tone: 'neutral', icon: true };
  if (helpText) {
    const h = { ...helpText };
    if (hasError) h.tone = 'negative';
    return h;
  }
  return undefined;
}

export const FieldShell = forwardRef<HTMLDivElement, FieldShellProps>(
  (
    {
      label,
      size = 'm',
      leading,
      trailing,
      helpText,
      charCount,
      error,
      disabled,
      readOnly,
      focused,
      autoHeight,
      noVPadding,
      children,
      onFieldClick,
      className,
      ...rest
    },
    ref,
  ) => {
    const hasError = !!error;
    const resolvedHelp = resolveHelpText(helpText, error);

    // State class
    let stateClass = styles.default;
    if (disabled) stateClass = styles.disabled;
    else if (readOnly) stateClass = styles['read-only'];
    else if (hasError) stateClass = styles.error;
    else if (focused) stateClass = styles.focused;

    const rootClassNames = [
      styles.root,
      styles[`size-${size}`],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const fieldClassNames = [
      styles.field,
      styles[`size-${size}`],
      stateClass,
      autoHeight ? styles['auto-height'] : '',
      noVPadding ? styles['no-v-padding'] : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={rootClassNames} {...rest}>
        {label && (
          <label
            className={[
              styles.label,
              disabled ? styles['label-disabled'] : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {label}
          </label>
        )}

        <div className={fieldClassNames} onClick={onFieldClick}>
          <div className={styles.container}>
            {leading && (
              <div
                className={[
                  styles.addon,
                  disabled || readOnly ? styles['addon-disabled'] : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {leading}
              </div>
            )}

            {children}

            {trailing && (
              <div
                className={[
                  styles.addon,
                  disabled || readOnly ? styles['addon-disabled'] : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {trailing}
              </div>
            )}
          </div>

          <div className={styles.shadow} />
        </div>

        {(resolvedHelp || charCount) && (
          <div className={styles['help-row']}>
            {resolvedHelp && (
              <div
                className={[
                  styles.help,
                  resolvedHelp.tone === 'negative'
                    ? styles['help-negative']
                    : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {resolvedHelp.icon !== false && (
                  <span className={styles['help-icon']}>
                    {resolvedHelp.tone === 'negative' ? (
                      <AlertOctagonIcon />
                    ) : (
                      <InfoCircleIcon />
                    )}
                  </span>
                )}
                <span>{resolvedHelp.message}</span>
              </div>
            )}
            {charCount && (
              <span className={styles['char-count']}>{charCount}</span>
            )}
          </div>
        )}
      </div>
    );
  },
);

FieldShell.displayName = 'FieldShell';

/* ── Inline SVG icons ── */

function InfoCircleIcon() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AlertOctagonIcon() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.86 2H16.14L22 7.86V16.14L16.14 22H7.86L2 16.14V7.86L7.86 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8V12M12 16H12.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
