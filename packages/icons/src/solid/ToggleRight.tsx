import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ToggleRight = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 6a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8"/></svg>
    );
  },
);

ToggleRight.displayName = 'ToggleRight';
