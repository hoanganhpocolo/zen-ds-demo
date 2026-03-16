import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FaceLookDown = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M7.667 14.223a5.445 5.445 0 0 0 9.694 3.402l-1.56-1.251a3.445 3.445 0 0 1-6.134-2.151zM18.5 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-6-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>
    );
  },
);

FaceLookDown.displayName = 'FaceLookDown';
