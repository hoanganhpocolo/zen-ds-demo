import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Link02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.5 8H7a4 4 0 1 0 0 8h2.5v2H7A6 6 0 0 1 7 6h2.5zM17 6a6 6 0 0 1 0 12h-2.5v-2H17a4 4 0 0 0 0-8h-2.5V6z"/><path fill="currentColor" d="M17.625 13H7v-2h10.625z"/></svg>
    );
  },
);

Link02.displayName = 'Link02';
