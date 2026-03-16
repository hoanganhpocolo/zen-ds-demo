import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Shield = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.052 1.33a3 3 0 0 1 1.897 0l6.877 2.293a3 3 0 0 1 2.04 3.094l-.537 6.439a9 9 0 0 1-4.198 6.885l-4.6 2.875a1 1 0 0 1-1.061 0l-4.6-2.875a9 9 0 0 1-4.199-6.885l-.537-6.439a3 3 0 0 1 2.041-3.094z"/></svg>
    );
  },
);

Shield.displayName = 'Shield';
