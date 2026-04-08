import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ShoppingBag01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.5 1a4 4 0 0 1 3.2 1.6l1.5 2A4 4 0 0 1 22 7v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7c0-.865.28-1.708.8-2.4l1.5-2A4 4 0 0 1 7.5 1zM7 10a5 5 0 0 0 10 0h-2a3 3 0 1 1-6 0zm.5-7a2 2 0 0 0-1.6.8L5 5h14l-.9-1.2a2 2 0 0 0-1.6-.8z"/></svg>
    );
  },
);

ShoppingBag01.displayName = 'ShoppingBag01';
