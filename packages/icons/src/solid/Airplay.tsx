import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Airplay = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.464 15.281a2 2 0 0 1 3.072 0l2.865 3.439c1.086 1.302.16 3.28-1.536 3.28h-5.73c-1.696 0-2.622-1.978-1.536-3.28zM19 2a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4v-2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2v2a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z"/></svg>
    );
  },
);

Airplay.displayName = 'Airplay';
