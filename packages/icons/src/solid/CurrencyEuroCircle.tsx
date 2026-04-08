import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CurrencyEuroCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m.676 5a5.81 5.81 0 0 0-5.27 3.364H5.5v2h1.386a6 6 0 0 0 0 .884H5.5v2h1.906A5.808 5.808 0 0 0 16.691 16l-1.382-1.444a3.8 3.8 0 0 1-2.633 1.057 3.8 3.8 0 0 1-2.92-1.365h2.118v-2h-2.98a4 4 0 0 1 0-.884h2.98v-2H9.756A3.8 3.8 0 0 1 12.676 8c1.022 0 1.948.402 2.633 1.058l1.382-1.445A5.8 5.8 0 0 0 12.676 6"/></svg>
    );
  },
);

CurrencyEuroCircle.displayName = 'CurrencyEuroCircle';
