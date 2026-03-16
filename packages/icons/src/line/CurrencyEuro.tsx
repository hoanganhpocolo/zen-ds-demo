import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CurrencyEuro = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14.5 2A9.98 9.98 0 0 1 22 5.385l-1.499 1.324A8.002 8.002 0 0 0 7.082 9H13v2H6.563a8 8 0 0 0 0 2H13v2H7.082a8.002 8.002 0 0 0 13.419 2.291L22 18.615A9.98 9.98 0 0 1 14.5 22c-4.477 0-8.268-2.943-9.542-7H2v-2h2.55a10 10 0 0 1 0-2H2V9h2.958c1.274-4.057 5.065-7 9.542-7"/></svg>
    );
  },
);

CurrencyEuro.displayName = 'CurrencyEuro';
