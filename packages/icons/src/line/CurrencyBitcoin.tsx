import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CurrencyBitcoin = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 21h-2v2H8v-2H4v-2h2V5H4V3h4V1h2v2h2V1h2v2h.25a4.75 4.75 0 0 1 3.208 8.251A5.25 5.25 0 0 1 14.75 21H14v2h-2zm-4-2h6.75a3.25 3.25 0 0 0 0-6.5H8zm0-8.5h6.25a2.75 2.75 0 1 0 0-5.5H8z"/></svg>
    );
  },
);

CurrencyBitcoin.displayName = 'CurrencyBitcoin';
