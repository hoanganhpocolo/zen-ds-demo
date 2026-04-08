import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CurrencyBitcoinCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M9 7H7v2h2v6H7v2h2v2h2v-2h1v2h2v-2a3 3 0 0 0 3-3 2.98 2.98 0 0 0-.769-2A2.98 2.98 0 0 0 17 10a3 3 0 0 0-3-3V5h-2v2h-1V5H9zm5 6a1 1 0 1 1 0 2h-3v-2zm0-4a1 1 0 1 1 0 2h-3V9z"/></svg>
    );
  },
);

CurrencyBitcoinCircle.displayName = 'CurrencyBitcoinCircle';
