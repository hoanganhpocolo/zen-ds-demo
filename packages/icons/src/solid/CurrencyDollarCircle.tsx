import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CurrencyDollarCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m-1 6h-1a3 3 0 0 0 0 6h1v2h-1a1 1 0 0 1-1-1H7a3 3 0 0 0 3 3h1v2h2v-2h1a3 3 0 1 0 0-6h-1V9h1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3h-1V5h-2zm3 6a1 1 0 1 1 0 2h-1v-2zm-3-2h-1a1 1 0 1 1 0-2h1z"/></svg>
    );
  },
);

CurrencyDollarCircle.displayName = 'CurrencyDollarCircle';
