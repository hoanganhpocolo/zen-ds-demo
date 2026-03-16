import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AlignLeft01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M3 21H1V3h2zM14.207 6.207 9.414 11H23v2H9.414l4.793 4.793-1.414 1.414-6.5-6.5a1 1 0 0 1 0-1.414l6.5-6.5z"/></svg>
    );
  },
);

AlignLeft01.displayName = 'AlignLeft01';
