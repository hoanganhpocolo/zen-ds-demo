import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ShoppingCart = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><g clipPath="url(#a)"><path fill="currentColor" d="M9 19a2 2 0 1 1 0 4 2 2 0 0 1 0-4m8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4M2.72 1a2 2 0 0 1 1.94 1.515L5.28 5H23a1 1 0 0 1 .958 1.287L21.6 14.15A4 4 0 0 1 17.768 17H9.343a4 4 0 0 1-3.881-3.03L2.72 3H0V1z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>
    );
  },
);

ShoppingCart.displayName = 'ShoppingCart';
