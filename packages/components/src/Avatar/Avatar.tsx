import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import styles from './Avatar.module.css';

export type AvatarShape = 'circle' | 'square';
export type AvatarSize = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';
export type AvatarBackground = 'subtle' | 'solid';
export type AvatarColor =
  | 'accent'
  | 'neutral'
  | 'blue'
  | 'brown'
  | 'crimson'
  | 'cyan'
  | 'green'
  | 'indigo'
  | 'orange'
  | 'pink'
  | 'plum'
  | 'purple'
  | 'red'
  | 'teal'
  | 'violet'
  | 'yellow';

export type AvatarStatus = 'active' | 'pending' | 'inactive' | 'disabled';

export interface AvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Text content (initials). Ignored when `src` is provided. */
  children?: ReactNode;
  /** Image source URL */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Shape of the avatar */
  shape?: AvatarShape;
  /** Size variant */
  size?: AvatarSize;
  /** Color variant (ignored when `src` is provided) */
  color?: AvatarColor;
  /** Background style */
  background?: AvatarBackground;
  /** Status indicator */
  status?: AvatarStatus;
}

/* ── Color → CSS variable mapping ── */

const COLOR_TOKENS: Record<AvatarColor, { subtle: { bg: string; text: string }; solid: { bg: string; text: string } }> = {
  accent: {
    subtle: { bg: 'var(--color-bg-fill-accent-subtle-default)', text: 'var(--color-content-accent-primary)' },
    solid:  { bg: 'var(--color-bg-fill-accent-solid-default)',  text: 'var(--color-content-on-colors)' },
  },
  neutral: {
    subtle: { bg: 'var(--color-bg-fill-neutral-subtle-default)', text: 'var(--color-content-neutral-primary)' },
    solid:  { bg: 'var(--color-bg-fill-neutral-solid-default)',  text: 'var(--color-content-on-colors)' },
  },
  blue:    { subtle: { bg: 'var(--color-bg-fill-support-blue-subtle)',    text: 'var(--color-content-support-blue-primary)' },    solid: { bg: 'var(--color-bg-fill-support-blue-solid)',    text: 'var(--color-content-on-colors)' } },
  brown:   { subtle: { bg: 'var(--color-bg-fill-support-brown-subtle)',   text: 'var(--color-content-support-brown-primary)' },   solid: { bg: 'var(--color-bg-fill-support-brown-solid)',   text: 'var(--color-content-on-colors)' } },
  crimson: { subtle: { bg: 'var(--color-bg-fill-support-crimson-subtle)', text: 'var(--color-content-support-crimson-primary)' }, solid: { bg: 'var(--color-bg-fill-support-crimson-solid)', text: 'var(--color-content-on-colors)' } },
  cyan:    { subtle: { bg: 'var(--color-bg-fill-support-cyan-subtle)',    text: 'var(--color-content-support-cyan-primary)' },    solid: { bg: 'var(--color-bg-fill-support-cyan-solid)',    text: 'var(--color-content-on-colors)' } },
  green:   { subtle: { bg: 'var(--color-bg-fill-support-green-subtle)',   text: 'var(--color-content-support-green-primary)' },   solid: { bg: 'var(--color-bg-fill-support-green-solid)',   text: 'var(--color-content-on-colors)' } },
  indigo:  { subtle: { bg: 'var(--color-bg-fill-support-indigo-subtle)',  text: 'var(--color-content-support-indigo-primary)' },  solid: { bg: 'var(--color-bg-fill-support-indigo-solid)',  text: 'var(--color-content-on-colors)' } },
  orange:  { subtle: { bg: 'var(--color-bg-fill-support-orange-subtle)',  text: 'var(--color-content-support-orange-primary)' },  solid: { bg: 'var(--color-bg-fill-support-orange-solid)',  text: 'var(--color-content-on-colors)' } },
  pink:    { subtle: { bg: 'var(--color-bg-fill-support-pink-subtle)',    text: 'var(--color-content-support-pink-primary)' },    solid: { bg: 'var(--color-bg-fill-support-pink-solid)',    text: 'var(--color-content-on-colors)' } },
  plum:    { subtle: { bg: 'var(--color-bg-fill-support-plum-subtle)',    text: 'var(--color-content-support-plum-primary)' },    solid: { bg: 'var(--color-bg-fill-support-plum-solid)',    text: 'var(--color-content-on-colors)' } },
  purple:  { subtle: { bg: 'var(--color-bg-fill-support-purple-subtle)',  text: 'var(--color-content-support-purple-primary)' },  solid: { bg: 'var(--color-bg-fill-support-purple-solid)',  text: 'var(--color-content-on-colors)' } },
  red:     { subtle: { bg: 'var(--color-bg-fill-support-red-subtle)',     text: 'var(--color-content-support-red-primary)' },     solid: { bg: 'var(--color-bg-fill-support-red-solid)',     text: 'var(--color-content-on-colors)' } },
  teal:    { subtle: { bg: 'var(--color-bg-fill-support-teal-subtle)',    text: 'var(--color-content-support-teal-primary)' },    solid: { bg: 'var(--color-bg-fill-support-teal-solid)',    text: 'var(--color-content-on-colors)' } },
  violet:  { subtle: { bg: 'var(--color-bg-fill-support-violet-subtle)',  text: 'var(--color-content-support-violet-primary)' },  solid: { bg: 'var(--color-bg-fill-support-violet-solid)',  text: 'var(--color-content-on-colors)' } },
  yellow:  { subtle: { bg: 'var(--color-bg-fill-support-yellow-subtle)',  text: 'var(--color-content-support-yellow-primary)' },  solid: { bg: 'var(--color-bg-fill-support-yellow-solid)',  text: 'var(--color-content-on-colors)' } },
};

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      children,
      src,
      alt = '',
      shape = 'circle',
      size = 'm',
      color = 'accent',
      background = 'subtle',
      status,
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    const isPhoto = !!src;
    const tokens = COLOR_TOKENS[color][background];

    const classNames = [
      styles.avatar,
      styles[shape],
      styles[`size-${size}`],
      isPhoto ? styles.photo : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const colorStyle = isPhoto
      ? style
      : {
          '--avatar-bg': tokens.bg,
          '--avatar-color': tokens.text,
          ...style,
        } as React.CSSProperties;

    return (
      <div ref={ref} className={classNames} style={colorStyle} {...rest}>
        <div className={styles.inner}>
          {isPhoto ? (
            <img className={styles.image} src={src} alt={alt} />
          ) : (
            <span className={styles.initials}>{children}</span>
          )}
        </div>
        {status && <span className={[styles.status, styles[`status-${status}`]].join(' ')} />}
      </div>
    );
  },
);

Avatar.displayName = 'Avatar';
