import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ImagePlus = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h.57l8.11-8.561a2 2 0 0 1 2.6-.264l4.293 3.006A1 1 0 0 1 22 15v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h6zM9.324 20H18a2 2 0 0 0 2-2v-2.48l-3.867-2.706zM9 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m11-4h3v2h-3v3h-2V6h-3V4h3V1h2z"/></svg>
    );
  },
);

ImagePlus.displayName = 'ImagePlus';
