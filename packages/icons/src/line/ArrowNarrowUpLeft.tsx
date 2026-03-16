import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowNarrowUpLeft = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m16.003 4.016-.003 2-8.582-.012L20 18.586 18.586 20 6.004 7.418 6.016 16l-2 .003L4 5.002A1 1 0 0 1 5.002 4z"/></svg>
    );
  },
);

ArrowNarrowUpLeft.displayName = 'ArrowNarrowUpLeft';
