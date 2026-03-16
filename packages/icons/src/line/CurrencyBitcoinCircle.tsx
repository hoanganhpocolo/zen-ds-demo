import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CurrencyBitcoinCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18m-1 4h1V5h2v2a3 3 0 0 1 3 3 2.98 2.98 0 0 1-.769 2A2.98 2.98 0 0 1 17 14a3 3 0 0 1-3 3v2h-2v-2h-1v2H9v-2H7v-2h2V9H7V7h2V5h2zm0 8h3a1 1 0 1 0 0-2h-3zm0-4h3a1 1 0 1 0 0-2h-3z"/></svg>
    );
  },
);

CurrencyBitcoinCircle.displayName = 'CurrencyBitcoinCircle';
