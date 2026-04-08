import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const VolumeMax = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-.93a3 3 0 0 1-2.496-1.336L5.464 16H3.5A2.5 2.5 0 0 1 1 13.5v-3A2.5 2.5 0 0 1 3.5 8h1.965l3.11-4.664A3 3 0 0 1 11.07 2zm7.553 3.423A7.99 7.99 0 0 1 23 12a7.99 7.99 0 0 1-3.447 6.576l-1.139-1.644A5.99 5.99 0 0 0 21 12a5.99 5.99 0 0 0-2.586-4.933zm-2.278 3.289a3.994 3.994 0 0 1 0 6.575l-1.137-1.644a1.996 1.996 0 0 0 0-3.287z"/></svg>
    );
  },
);

VolumeMax.displayName = 'VolumeMax';
