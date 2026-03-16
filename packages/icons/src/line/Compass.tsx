import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Compass = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18m4.063 3.773a1 1 0 0 1 1.128 1.3l-2.12 6.365a1 1 0 0 1-.633.632l-6.365 2.121a1 1 0 0 1-1.264-1.264l2.12-6.364a1 1 0 0 1 .633-.633l6.365-2.121zm-5.394 3.896-1.33 3.992 3.992-1.33 1.33-3.992z"/></svg>
    );
  },
);

Compass.displayName = 'Compass';
