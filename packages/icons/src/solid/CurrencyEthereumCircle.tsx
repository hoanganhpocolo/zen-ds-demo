import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CurrencyEthereumCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 15.901L6.914 14.59l-.828 1.82 5.5 2.5c.263.12.565.12.828 0l5.5-2.5-.828-1.82zm.764-10.999a1 1 0 0 0-1.528 0l-3.882 4.59a1 1 0 0 0 .35 1.555l3.882 1.765c.263.119.565.119.828 0l3.883-1.765a1 1 0 0 0 .35-1.556z"/></svg>
    );
  },
);

CurrencyEthereumCircle.displayName = 'CurrencyEthereumCircle';
