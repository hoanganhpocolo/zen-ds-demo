import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowUpLeft = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 6H7.414L20 18.586 18.586 20 6 7.414V19H4V5a1 1 0 0 1 1-1h14z"/></svg>
    );
  },
);

ArrowUpLeft.displayName = 'ArrowUpLeft';
