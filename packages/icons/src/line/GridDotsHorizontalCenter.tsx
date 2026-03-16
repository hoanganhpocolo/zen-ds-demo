import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GridDotsHorizontalCenter = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M3 19.991a1 1 0 0 1 1 1V21a1 1 0 0 1-2 0v-.01a1 1 0 0 1 1-1m4.5 0a1 1 0 0 1 1 1V21a1 1 0 0 1-2 0v-.01a1 1 0 0 1 1-1M13 22h-2V2.01h2zm3.5-2.009a1 1 0 0 1 1 1V21a1 1 0 0 1-2 0v-.01a1 1 0 0 1 1-1m4.5 0a1 1 0 0 1 1 1V21a1 1 0 0 1-2 0v-.01a1 1 0 0 1 1-1M3 15.493a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0v-.01a1 1 0 0 1 1-1m18 0a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0v-.01a1 1 0 0 1 1-1M3 10.995a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0v-.01a1 1 0 0 1 1-1m18 0a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0v-.01a1 1 0 0 1 1-1M3 6.498a1 1 0 0 1 1 1v.009a1 1 0 0 1-2 0v-.01a1 1 0 0 1 1-.999m18 0a1 1 0 0 1 1 1v.009a1 1 0 0 1-2 0v-.01a1 1 0 0 1 1-.999M3 2a1 1 0 0 1 1 .999v.01a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1m4.5 0a1 1 0 0 1 1 .999v.01a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1m9 0a1 1 0 0 1 1 .999v.01a1 1 0 0 1-2 0V3a1 1 0 0 1 1-.999M21 2a1 1 0 0 1 1 .999v.01a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1"/></svg>
    );
  },
);

GridDotsHorizontalCenter.displayName = 'GridDotsHorizontalCenter';
