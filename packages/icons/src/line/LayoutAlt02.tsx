import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LayoutAlt02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2V4zm4 16h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-8zm7-3h-4v-2h4zm0-4h-4v-2h4zm0-4h-4V7h4z"/></svg>
    );
  },
);

LayoutAlt02.displayName = 'LayoutAlt02';
