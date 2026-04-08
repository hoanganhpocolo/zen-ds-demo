import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ShopStore = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-3 8.644A4 4 0 0 1 12 12a4 4 0 0 1-3-1.356 3.99 3.99 0 0 1-5 .819V18a2 2 0 0 0 2 2h2v-3a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v3h2a2 2 0 0 0 2-2v-6.537a3.99 3.99 0 0 1-5-.82M11 16a1 1 0 0 0-1 1v3h4v-3a1 1 0 0 0-1-1zM6 4a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0h2a2 2 0 1 0 4 0h2a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

ShopStore.displayName = 'ShopStore';
