import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Share03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 1a4 4 0 1 1-2.842 6.814l-5.307 3.098a4 4 0 0 1 0 2.175l5.31 3.095a4 4 0 1 1-1.01 1.727l-5.308-3.094a4 4 0 1 1-.001-5.629l5.307-3.098A4.004 4.004 0 0 1 18 1m0 16c-.693 0-1.303.352-1.662.888a1 1 0 0 1-.123.209A2 2 0 1 0 18 17M6 10a2 2 0 1 0 1.727.994q-.015-.024-.028-.049A2 2 0 0 0 6 10m12-7a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></svg>
    );
  },
);

Share03.displayName = 'Share03';
