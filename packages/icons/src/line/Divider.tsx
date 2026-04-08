import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Divider = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 16a4 4 0 0 1 4 4v2h-2v-2a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2H2v-2a4 4 0 0 1 4-4zM3.01 11a1 1 0 0 1 0 2h-.011a1 1 0 0 1 0-2zm4.497 0a1 1 0 0 1 0 2h-.01a1 1 0 0 1 0-2zm4.498 0a1 1 0 0 1 0 2h-.01a1 1 0 0 1 0-2zm4.498 0a1 1 0 0 1 0 2h-.01a1 1 0 0 1 0-2zM21 11a1 1 0 0 1 0 2h-.01a1 1 0 0 1 0-2zM4 4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2h2v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V2h2z"/></svg>
    );
  },
);

Divider.displayName = 'Divider';
