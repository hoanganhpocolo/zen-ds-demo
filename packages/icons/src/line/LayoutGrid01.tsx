import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LayoutGrid01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-5 18h5a2 2 0 0 0 2-2v-5h-7zm-9-2a2 2 0 0 0 2 2h5v-7H4zm9-7h7V6a2 2 0 0 0-2-2h-5zM6 4a2 2 0 0 0-2 2v5h7V4z"/></svg>
    );
  },
);

LayoutGrid01.displayName = 'LayoutGrid01';
