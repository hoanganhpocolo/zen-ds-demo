import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ThumbsDown = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M20 2a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2.491l-3.1 4.265A3 3 0 0 1 11.98 22.5h-.48a3 3 0 0 1-3-3V17H4.16a3 3 0 0 1-2.991-3.23l.55-7.154A5 5 0 0 1 6.704 2zm-2 13h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2z"/></svg>
    );
  },
);

ThumbsDown.displayName = 'ThumbsDown';
