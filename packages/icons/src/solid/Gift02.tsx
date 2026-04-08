import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Gift02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11 22H6a4 4 0 0 1-4-4v-3h9zm11-4a4 4 0 0 1-4 4h-5v-7h9zM14.5 2a3.5 3.5 0 0 1 3.163 5H18a4 4 0 0 1 4 4v2h-9V7h-2v6H2v-2a4 4 0 0 1 4-4h.337A3.5 3.5 0 0 1 12 3.052 3.5 3.5 0 0 1 14.5 2m-5 2a1.5 1.5 0 1 0 0 3H11V5.5A1.5 1.5 0 0 0 9.5 4m5 0A1.5 1.5 0 0 0 13 5.5V7h1.5a1.5 1.5 0 0 0 0-3"/></svg>
    );
  },
);

Gift02.displayName = 'Gift02';
