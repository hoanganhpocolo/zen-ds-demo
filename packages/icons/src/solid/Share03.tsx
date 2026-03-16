import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Share03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 1a4 4 0 1 1-2.842 6.814l-5.307 3.098a4 4 0 0 1 0 2.175l5.31 3.095a4 4 0 1 1-1.01 1.727l-5.308-3.094a4 4 0 1 1-.001-5.629l5.307-3.098A4.004 4.004 0 0 1 18 1"/></svg>
    );
  },
);

Share03.displayName = 'Share03';
