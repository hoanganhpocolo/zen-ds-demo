import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CurrencyEthereumCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18m5.914 13.41-5.5 2.5a1 1 0 0 1-.828 0l-5.5-2.5.828-1.82L12 16.9l5.086-2.311zM12 4c.294 0 .574.13.764.354l5.5 6.5a1 1 0 0 1-.35 1.556l-5.5 2.5a1 1 0 0 1-.828 0l-5.5-2.5a1 1 0 0 1-.35-1.556l5.501-6.5A1 1 0 0 1 12 4m-3.883 7.137L12 12.9l3.883-1.764L12 6.547z"/></svg>
    );
  },
);

CurrencyEthereumCircle.displayName = 'CurrencyEthereumCircle';
