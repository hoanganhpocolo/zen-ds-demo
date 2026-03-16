import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Gift02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14.5 2a3.5 3.5 0 0 1 3.163 5H18a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4h.337A3.5 3.5 0 0 1 12 3.052 3.5 3.5 0 0 1 14.5 2M4 15v3a2 2 0 0 0 2 2h5v-5zm9 0v5h5a2 2 0 0 0 2-2v-3zM6 9a2 2 0 0 0-2 2v2h7V9zm7 4h7v-2a2 2 0 0 0-2-2h-5zM9.5 4a1.5 1.5 0 1 0 0 3H11V5.5A1.5 1.5 0 0 0 9.5 4m5 0A1.5 1.5 0 0 0 13 5.5V7h1.5a1.5 1.5 0 0 0 0-3"/></svg>
    );
  },
);

Gift02.displayName = 'Gift02';
