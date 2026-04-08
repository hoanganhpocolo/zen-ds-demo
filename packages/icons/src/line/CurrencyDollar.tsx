import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CurrencyDollar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 4h1.838l.32.013a4 4 0 0 1 3.475 2.722l.315.949-1.896.632-.317-.949a2 2 0 0 0-1.737-1.36L14.838 6H13v5h1.5a4.5 4.5 0 1 1 0 9H13v2h-2v-2H9.162a4 4 0 0 1-3.795-2.735l-.315-.949 1.896-.632.317.949A2 2 0 0 0 9.162 18H11v-5H9.5a4.5 4.5 0 1 1 0-9H11V2h2zm0 14h1.5a2.5 2.5 0 0 0 0-5H13zM9.5 6a2.5 2.5 0 0 0 0 5H11V6z"/></svg>
    );
  },
);

CurrencyDollar.displayName = 'CurrencyDollar';
