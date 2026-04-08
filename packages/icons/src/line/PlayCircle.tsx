import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PlayCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18M8.5 9.79c0-1.564 1.715-2.524 3.048-1.704l3.593 2.21a2 2 0 0 1 0 3.407l-3.593 2.211c-1.333.82-3.048-.14-3.048-1.704zm2 4.42L14.092 12 10.5 9.79z"/></svg>
    );
  },
);

PlayCircle.displayName = 'PlayCircle';
