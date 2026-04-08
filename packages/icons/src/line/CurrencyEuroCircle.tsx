import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CurrencyEuroCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18m.676 3a5.8 5.8 0 0 1 4.015 1.613L15.31 9.058A3.8 3.8 0 0 0 12.676 8c-1.173 0-2.222.53-2.92 1.364h2.118v2h-2.98a4 4 0 0 0 0 .884h2.98v2H9.756a3.8 3.8 0 0 0 2.92 1.365 3.8 3.8 0 0 0 2.633-1.057L16.69 16a5.808 5.808 0 0 1-9.285-1.752H5.5v-2h1.386a6 6 0 0 1 0-.884H5.5v-2h1.906A5.81 5.81 0 0 1 12.676 6"/></svg>
    );
  },
);

CurrencyEuroCircle.displayName = 'CurrencyEuroCircle';
