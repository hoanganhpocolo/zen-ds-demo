import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowNarrowDownLeft = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M20 5.414 7.418 17.996l8.58-.012.002 2L5.002 20A1 1 0 0 1 4 18.998l.016-11 2 .002-.012 8.582L18.586 4z"/></svg>
    );
  },
);

ArrowNarrowDownLeft.displayName = 'ArrowNarrowDownLeft';
