import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Crop = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6 4h13a1 1 0 0 1 1 1v13h3v2h-3v3h-2v-3H5a1 1 0 0 1-1-1V6H1V4h3V1h2zm0 14h12V6H6z"/></svg>
    );
  },
);

Crop.displayName = 'Crop';
