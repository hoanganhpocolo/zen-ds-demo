import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ClockRewind = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11h-2a9 9 0 1 0-1.773 5.364h-3.813v-2H21a1 1 0 0 1 1 1V22h-2v-2.45A10.97 10.97 0 0 1 12 23C5.925 23 1 18.075 1 12S5.925 1 12 1m0 11.536 1.964 1.964-1.414 1.414-2.257-2.257A1 1 0 0 1 10 12.95V7.086h2z"/></svg>
    );
  },
);

ClockRewind.displayName = 'ClockRewind';
