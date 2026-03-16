import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SaleCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18m2.121 11.121a1.5 1.5 0 1 1 2.121 2.122 1.5 1.5 0 0 1-2.12-2.122m2.121-4.95-7.07 7.071-1.414-1.414 7.07-7.07zM7.758 7.759a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12"/></svg>
    );
  },
);

SaleCircle.displayName = 'SaleCircle';
