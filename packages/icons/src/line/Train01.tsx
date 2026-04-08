import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Train01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M3 11h8V8a3 3 0 0 1 3-3h7V3h2v18h-2v-3H3v3H1V3h2zm0 5h18v-3H3zm11-9a1 1 0 0 0-1 1v3h8V7zM7 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4"/></svg>
    );
  },
);

Train01.displayName = 'Train01';
