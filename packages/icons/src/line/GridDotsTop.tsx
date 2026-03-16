import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GridDotsTop = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M3.01 20a1 1 0 0 1 0 2h-.011a1 1 0 0 1 0-2zm4.497 0a1 1 0 0 1 0 2h-.01a1 1 0 0 1 0-2zm4.498 0a1 1 0 0 1 0 2h-.01a1 1 0 0 1 0-2zm4.498 0a1 1 0 0 1 0 2h-.01a1 1 0 0 1 0-2zM21 20a1 1 0 0 1 0 2h-.01a1 1 0 0 1 0-2zM3.01 15.5a1 1 0 0 1 0 2h-.011a1 1 0 0 1 0-2zm17.99 0a1 1 0 0 1 0 2h-.01a1 1 0 0 1 0-2zM3.01 11a1 1 0 0 1 0 2h-.011a1 1 0 0 1 0-2zM21 11a1 1 0 0 1 0 2h-.01a1 1 0 0 1 0-2zM3.01 6.5a1 1 0 0 1 0 2h-.011a1 1 0 0 1 0-2zM21 6.5a1 1 0 0 1 0 2h-.01a1 1 0 0 1 0-2zm.99-4.5v2H2V2z"/></svg>
    );
  },
);

GridDotsTop.displayName = 'GridDotsTop';
