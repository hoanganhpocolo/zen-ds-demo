import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ClockFastForward = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1a10.97 10.97 0 0 1 8 3.45V2h2v5.636a1 1 0 0 1-1 1h-5.586v-2h3.813A9 9 0 1 0 21 12h2c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 11.95 2.55 2.55-1.414 1.414-2.843-2.843a1 1 0 0 1-.293-.707V7.5h2z"/></svg>
    );
  },
);

ClockFastForward.displayName = 'ClockFastForward';
