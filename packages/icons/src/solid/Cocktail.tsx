import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Cocktail = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18.232 1.5 15.635 6H21a1 1 0 0 1 1 1v3a1 1 0 0 1-.386.79L13 17.487V20h5v2H6v-2h5v-2.512L2.386 10.79A1 1 0 0 1 2 10V7a1 1 0 0 1 1-1h1a4 4 0 1 1 8 0h1.324L16.5.5zM4 9.51 5.915 11h4.523l1.732-3H4zM12.748 11h5.337L20 9.51V8h-5.52z"/></svg>
    );
  },
);

Cocktail.displayName = 'Cocktail';
