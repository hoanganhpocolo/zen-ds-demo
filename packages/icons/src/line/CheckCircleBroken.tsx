import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CheckCircleBroken = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c2.656 0 5.091.941 6.992 2.508L17.57 4.93A8.96 8.96 0 0 0 12 3a9 9 0 1 0 8.893 7.607l1.986-.246q.12.803.121 1.639c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1"/><path fill="currentColor" d="m22 6.327-10.38 10.38a1 1 0 0 1-1.414 0l-4.413-4.413 1.414-1.414 3.706 3.706 9.673-9.673z"/></svg>
    );
  },
);

CheckCircleBroken.displayName = 'CheckCircleBroken';
