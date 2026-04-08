import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GridDotsRight = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M3 19.991a1 1 0 0 1 1 1V21a1 1 0 0 1-2 0v-.01a1 1 0 0 1 1-1m4.5 0a1 1 0 0 1 1 1V21a1 1 0 0 1-2 0v-.01a1 1 0 0 1 1-1m4.5 0a1 1 0 0 1 1 1V21a1 1 0 0 1-2 0v-.01a1 1 0 0 1 1-1m4.5 0a1 1 0 0 1 1 1V21a1 1 0 0 1-2 0v-.01a1 1 0 0 1 1-1M22 2v19.99h-2V2zM3 15.493a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0v-.01a1 1 0 0 1 1-1m0-4.498a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0v-.01a1 1 0 0 1 1-1m0-4.497a1 1 0 0 1 1 1v.009a1 1 0 0 1-2 0v-.01a1 1 0 0 1 1-.999M3 2a1 1 0 0 1 1 .999v.01a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1m4.5 0a1 1 0 0 1 1 .999v.01a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1M12 2a1 1 0 0 1 1 .999v.01a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1m4.5 0a1 1 0 0 1 1 .999v.01a1 1 0 0 1-2 0V3a1 1 0 0 1 1-.999"/></svg>
    );
  },
);

GridDotsRight.displayName = 'GridDotsRight';
