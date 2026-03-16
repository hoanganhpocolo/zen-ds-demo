import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Hamburger = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15 2a7 7 0 0 1 7 7v1h-2v6h2v1a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-1h2v-6H2V9a7 7 0 0 1 7-7zM4.174 18c.412 1.165 1.52 2 2.826 2h10a3 3 0 0 0 2.826-2zM6 16h12v-2H6zm0-4h12v-2H6zm3-8a5 5 0 0 0-4.9 4h15.8A5 5 0 0 0 15 4zM8 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>
    );
  },
);

Hamburger.displayName = 'Hamburger';
