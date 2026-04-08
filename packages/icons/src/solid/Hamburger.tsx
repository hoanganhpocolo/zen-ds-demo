import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Hamburger = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15 2a7 7 0 0 1 7 7 1 1 0 0 1-1 1h-1v6h1a1 1 0 0 1 1 1 5 5 0 0 1-5 5H7a5 5 0 0 1-5-5 1 1 0 0 1 1-1h1v-6H3a1 1 0 0 1-1-1 7 7 0 0 1 7-7zM6 16h12v-2H6zm0-6v2h12v-2zm2-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></svg>
    );
  },
);

Hamburger.displayName = 'Hamburger';
