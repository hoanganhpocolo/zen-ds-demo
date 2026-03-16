import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Beaker01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 3h-2v2.513A9 9 0 1 1 3 14a9 9 0 0 1 6-8.487V3H7V1h10zm-2.5 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2m2-7.748a1 1 0 0 1-.751.969A7 7 0 0 0 6.257 10h11.486a7 7 0 0 0-3.992-2.78A1 1 0 0 1 13 6.253V3h-2z"/></svg>
    );
  },
);

Beaker01.displayName = 'Beaker01';
