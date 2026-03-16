import {
  forwardRef,
  useState,
  useCallback,
  createContext,
  useContext,
  type ReactNode,
  type HTMLAttributes,
} from 'react';
import styles from './Accordion.module.css';

/* ══════════════════════════════════════════
   Accordion Item
   ══════════════════════════════════════════ */

export type AccordionSize = 'm' | 'l' | 'xl';
export type AccordionTheme = 'divider' | 'box';

export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Title text */
  title: string;
  /** Size variant */
  size?: AccordionSize;
  /** Visual theme */
  theme?: AccordionTheme;
  /** Controlled expanded state */
  expanded?: boolean;
  /** Default expanded state (uncontrolled) */
  defaultExpanded?: boolean;
  /** Called when expanded state changes */
  onExpandedChange?: (expanded: boolean) => void;
  /** Content to display when expanded */
  children?: ReactNode;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      title,
      size: sizeProp,
      theme: themeProp,
      expanded: controlledExpanded,
      defaultExpanded = false,
      onExpandedChange,
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    const group = useContext(AccordionGroupContext);
    const size = sizeProp ?? group?.size ?? 'm';
    const theme = themeProp ?? group?.theme ?? 'divider';

    const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
    const isControlled = controlledExpanded !== undefined;
    const expanded = isControlled ? controlledExpanded : internalExpanded;

    const handleToggle = useCallback(() => {
      const next = !expanded;
      if (!isControlled) setInternalExpanded(next);
      onExpandedChange?.(next);
    }, [expanded, isControlled, onExpandedChange]);

    const iconSize = size === 'xl' ? 32 : size === 'l' ? 28 : 24;

    const rootClassNames = [
      styles.root,
      styles[`size-${size}`],
      styles[`theme-${theme}`],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={rootClassNames} {...rest}>
        <button
          className={styles.header}
          onClick={handleToggle}
          type="button"
          aria-expanded={expanded}
        >
          <span className={[styles.title, styles[`title-${size}`]].join(' ')}>
            {title}
          </span>
          <div
            className={[
              styles['chevron-wrapper'],
              styles[`size-${size}`],
            ].join(' ')}
          >
            <span
              className={[
                styles.chevron,
                expanded ? styles['chevron-expanded'] : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <ChevronDownIcon size={iconSize} />
            </span>
          </div>
        </button>

        <div
          className={[
            styles.content,
            expanded ? styles['content-expanded'] : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <div className={styles['content-inner']}>
            <div className={styles['content-body']}>{children}</div>
          </div>
        </div>
      </div>
    );
  },
);

Accordion.displayName = 'Accordion';

/* ══════════════════════════════════════════
   Accordion Group
   ══════════════════════════════════════════ */

interface AccordionGroupContextValue {
  size?: AccordionSize;
  theme?: AccordionTheme;
}

const AccordionGroupContext = createContext<AccordionGroupContextValue | null>(
  null,
);

export interface AccordionGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Shared size for all children */
  size?: AccordionSize;
  /** Shared theme for all children */
  theme?: AccordionTheme;
  children: ReactNode;
}

export const AccordionGroup = forwardRef<HTMLDivElement, AccordionGroupProps>(
  ({ size = 'm', theme = 'divider', children, className, ...rest }, ref) => {
    const groupClassNames = [
      styles.group,
      theme === 'divider' ? styles['group-divider'] : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <AccordionGroupContext.Provider value={{ size, theme }}>
        <div ref={ref} className={groupClassNames} {...rest}>
          {children}
        </div>
      </AccordionGroupContext.Provider>
    );
  },
);

AccordionGroup.displayName = 'AccordionGroup';

/* ── Inline SVG icon ── */

function ChevronDownIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
