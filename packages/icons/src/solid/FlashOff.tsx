import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FlashOff = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m20 20.63-1.303 1.297-3.547-3.53-3.492 4.265a.92.92 0 0 1-1.023.284.92.92 0 0 1-.612-.863v-5.958h-6.91a.92.92 0 0 1-.821-.5.91.91 0 0 1 .074-.954l3.796-5.216L2 5.315l1.303-1.296zM12.04 1.38a.924.924 0 0 1 1.668.538v6.875h7.371a.913.913 0 0 1 .714 1.495l-4.353 5.315-9.136-9.09z"/></svg>
    );
  },
);

FlashOff.displayName = 'FlashOff';
