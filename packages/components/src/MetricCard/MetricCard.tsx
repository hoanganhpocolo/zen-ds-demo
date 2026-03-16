import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { TrendUp01, TrendDown01, DotsVertical } from '@zen/icons/line';
import { Button } from '../Button';
import styles from './MetricCard.module.css';

export type MetricCardLevel = 'master' | 'sub';
export type MetricCardTheme = 'default' | 'subtle';
export type MetricTrendDirection = 'positive' | 'negative' | 'neutral';

export interface MetricTrendProps {
  /** Trend percentage or label, e.g. "+24% vs. last year" */
  label: string;
  direction?: MetricTrendDirection;
}

export interface MetricCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Card hierarchy level */
  level?: MetricCardLevel;
  /** Visual style */
  theme?: MetricCardTheme;
  /** Icon displayed in the icon slot */
  icon?: ReactNode;
  /** Metric label above the value */
  metricTitle?: string;
  /** Color dot next to the metric title */
  metricColor?: string;
  /** Main metric value */
  value?: ReactNode;
  /** Trend badge */
  trend?: MetricTrendProps;
  /** Show the 3-dot action button */
  showAction?: boolean;
  /** Action button click handler */
  onAction?: () => void;
  /** Optional chart/visual slot (right side) */
  chart?: ReactNode;
}

function TrendBadge({ label, direction = 'positive' }: MetricTrendProps) {
  const icon =
    direction === 'positive' ? (
      <TrendUp01 size={16} />
    ) : direction === 'negative' ? (
      <TrendDown01 size={16} />
    ) : null;

  return (
    <div className={[styles.badge, styles[`badge-${direction}`]].join(' ')}>
      {icon && <span className={styles['badge-icon']}>{icon}</span>}
      <span className={styles['badge-label']}>{label}</span>
    </div>
  );
}

function MetricInline({
  metricTitle,
  metricColor,
  value,
  trend,
}: {
  metricTitle?: string;
  metricColor?: string;
  value?: ReactNode;
  trend?: MetricTrendProps;
}) {
  return (
    <div className={styles['metric-inline']}>
      <div className={styles['metric-content']}>
        {metricTitle && (
          <div className={styles['metric-title-row']}>
            {metricColor && (
              <span className={styles['metric-color-dot']} style={{ background: metricColor }} />
            )}
            <p className={styles['metric-title']}>{metricTitle}</p>
          </div>
        )}
        <p className={styles['metric-value']}>{value ?? '$1,680.68'}</p>
      </div>
      {trend && <TrendBadge {...trend} />}
    </div>
  );
}

export const MetricCard = forwardRef<HTMLDivElement, MetricCardProps>(
  (
    {
      level = 'master',
      theme = 'default',
      icon,
      metricTitle,
      metricColor,
      value,
      trend,
      showAction = true,
      onAction,
      chart,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const classNames = [
      styles.root,
      styles[level],
      styles[theme],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classNames} {...rest}>
        {/* 3-dot action button — absolute top right */}
        {showAction && theme === 'default' && (
          <div className={styles['action-slot']}>
            <Button
              variant="flat-primary"
              size="xs"
              icon={<DotsVertical size={20} />}
              onClick={onAction}
              aria-label="More options"
            />
          </div>
        )}

        {/* Metric contents */}
        <div className={styles['metric-contents']}>
          {children ?? (
            <>
              {/* Master: icon on top, then metric */}
              {level === 'master' && (
                <>
                  {icon && <div className={styles['icon-slot']}>{icon}</div>}
                  <MetricInline
                    metricTitle={metricTitle}
                    metricColor={metricColor}
                    value={value}
                    trend={trend}
                  />
                </>
              )}

              {/* Sub: icon left, metric right */}
              {level === 'sub' && (
                <div className={styles['sub-row']}>
                  {icon && <div className={styles['icon-slot']}>{icon}</div>}
                  <MetricInline
                    metricTitle={metricTitle}
                    metricColor={metricColor}
                    value={value}
                    trend={trend}
                  />
                </div>
              )}
            </>
          )}
        </div>

        {/* Optional chart/visual slot */}
        {chart && <div className={styles['chart-slot']}>{chart}</div>}
      </div>
    );
  },
);

MetricCard.displayName = 'MetricCard';
