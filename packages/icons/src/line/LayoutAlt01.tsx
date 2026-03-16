import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LayoutAlt01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-8 18h8a2 2 0 0 0 2-2v-8H10zm-6-2a2 2 0 0 0 2 2h2V10H4zM6 4a2 2 0 0 0-2 2v2h16V6a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

LayoutAlt01.displayName = 'LayoutAlt01';
