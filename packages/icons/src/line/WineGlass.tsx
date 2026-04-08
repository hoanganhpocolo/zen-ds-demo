import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const WineGlass = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 22H6v-2h5v-5.35l-5.437-2.417A6 6 0 0 1 2 6.751V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3.751a6 6 0 0 1-3.564 5.482L13 14.65V20h5zM4 6.751a4 4 0 0 0 2.375 3.655l5.625 2.5 5.625-2.5A4 4 0 0 0 20 6.751V4H4z"/></svg>
    );
  },
);

WineGlass.displayName = 'WineGlass';
