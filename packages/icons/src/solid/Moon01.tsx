import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Moon01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7.744 1.089a1 1 0 0 1 1.323 1.323 9.4 9.4 0 0 0-.836 3.895 9.46 9.46 0 0 0 9.462 9.462c1.39 0 2.708-.3 3.895-.836a1 1 0 0 1 1.323 1.323A11.47 11.47 0 0 1 12.461 23C6.132 23 1 17.867 1 11.537c0-4.65 2.77-8.65 6.744-10.448"/></svg>
    );
  },
);

Moon01.displayName = 'Moon01';
