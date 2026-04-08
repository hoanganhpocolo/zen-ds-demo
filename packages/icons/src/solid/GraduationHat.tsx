import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GraduationHat = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.468 2.747c.944-.56 2.12-.56 3.064 0l8.935 5.308c.38.227.557.626.533 1.014V17h-2v-6.184l-2 1.188v4.927c0 .624-.291 1.213-.787 1.59l-2.575 1.964a6 6 0 0 1-7.275 0l-2.576-1.963A2 2 0 0 1 5 16.932v-4.928L1.534 9.946a1.1 1.1 0 0 1 0-1.891zm3.064 12.506a3 3 0 0 1-3.064 0L7 13.193v3.738l2.575 1.963a4 4 0 0 0 4.85 0L17 16.931v-3.738z"/></svg>
    );
  },
);

GraduationHat.displayName = 'GraduationHat';
