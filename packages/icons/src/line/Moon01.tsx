import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Moon01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7.744 1.089a1 1 0 0 1 1.323 1.323 9.4 9.4 0 0 0-.836 3.895 9.46 9.46 0 0 0 9.462 9.462c1.39 0 2.708-.3 3.895-.836a1 1 0 0 1 1.323 1.323A11.47 11.47 0 0 1 12.461 23C6.132 23 1 17.867 1 11.537c0-4.65 2.77-8.65 6.744-10.448M6.414 4.26A9.44 9.44 0 0 0 3 11.537C3 16.763 7.236 21 12.462 21a9.44 9.44 0 0 0 7.277-3.413q-.997.181-2.046.182c-6.33 0-11.461-5.132-11.462-11.462q.001-1.049.182-2.046"/></svg>
    );
  },
);

Moon01.displayName = 'Moon01';
