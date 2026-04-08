import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AlignHorizontalCentre02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16 4a3 3 0 0 1 3 3v1a3 3 0 0 1-2.846 2.996L16 11h-3v2h6a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-6v3h-2v-3H5a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3h6v-2H8a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h3V1h2v3z"/></svg>
    );
  },
);

AlignHorizontalCentre02.displayName = 'AlignHorizontalCentre02';
