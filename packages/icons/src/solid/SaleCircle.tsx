import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SaleCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m4.243 13.121a1.5 1.5 0 1 0-2.122 2.123 1.5 1.5 0 0 0 2.122-2.123m-8.485.707 1.414 1.414 7.071-7.07-1.415-1.414zm2.12-7.07a1.5 1.5 0 1 0-2.12 2.12 1.5 1.5 0 0 0 2.12-2.12"/></svg>
    );
  },
);

SaleCircle.displayName = 'SaleCircle';
