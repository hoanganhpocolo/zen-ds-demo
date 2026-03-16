import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CurrencyDollarCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18m1 4h1a3 3 0 0 1 3 3h-2a1 1 0 0 0-1-1h-1v2h1a3 3 0 1 1 0 6h-1v2h-2v-2h-1a3 3 0 0 1-3-3h2a1 1 0 0 0 1 1h1v-2h-1a3 3 0 1 1 0-6h1V5h2zm0 8h1a1 1 0 1 0 0-2h-1zm-3-6a1 1 0 0 0 0 2h1V9z"/></svg>
    );
  },
);

CurrencyDollarCircle.displayName = 'CurrencyDollarCircle';
