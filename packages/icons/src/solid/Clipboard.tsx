import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Clipboard = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 1a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zM9.5 3a1.5 1.5 0 0 0-1.48 1.265C8.15 5.244 8.985 6 10 6h3.964c1.04 0 1.896-.79 2.006-1.803A1.5 1.5 0 0 0 14.5 3z"/></svg>
    );
  },
);

Clipboard.displayName = 'Clipboard';
