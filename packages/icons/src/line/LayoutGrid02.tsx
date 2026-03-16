import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LayoutGrid02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-5 18h5a2 2 0 0 0 2-2v-2h-7zm-9-2a2 2 0 0 0 2 2h5v-4H4zm9-4h7v-4h-7zm-9 0h7v-4H4zm9-6h7V6a2 2 0 0 0-2-2h-5zM6 4a2 2 0 0 0-2 2v2h7V4z"/></svg>
    );
  },
);

LayoutGrid02.displayName = 'LayoutGrid02';
