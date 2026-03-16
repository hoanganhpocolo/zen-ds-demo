import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GraduationHat = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.467 2.747a3 3 0 0 1 3.064 0l8.935 5.308c.378.225.555.62.534 1.006V17h-2v-6.185l-2 1.188v4.927c0 .624-.29 1.212-.787 1.59l-2.575 1.964a6 6 0 0 1-7.275 0l-2.576-1.963A2 2 0 0 1 5 16.93v-4.926l-3.467-2.06a1.1 1.1 0 0 1 0-1.89zm3.064 12.506c-.944.56-2.12.561-3.064 0L7 13.193v3.738l2.575 1.963a4 4 0 0 0 4.85 0L17 16.93v-3.74zM12.51 4.467a1 1 0 0 0-1.021 0L3.857 9l7.632 4.534c.314.186.706.186 1.021 0L20.142 9z"/></svg>
    );
  },
);

GraduationHat.displayName = 'GraduationHat';
