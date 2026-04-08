import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Chief = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 3a3 3 0 0 1 3 3v.458A10.01 10.01 0 0 1 21.95 15H22a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.05A10.01 10.01 0 0 1 9 6.458V6a3 3 0 0 1 3-3M3 19h18v-2H3zm9-14a1 1 0 0 0-1 1v.05a10 10 0 0 1 2 0V6a1 1 0 0 0-1-1"/></svg>
    );
  },
);

Chief.displayName = 'Chief';
