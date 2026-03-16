import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LayoutAlt03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM4 18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4zm13 0H7v-2h10zm0-4H7v-2h10zM6 4a2 2 0 0 0-2 2v2h16V6a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

LayoutAlt03.displayName = 'LayoutAlt03';
