import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CornerDownLeft = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21 10.232a7 7 0 0 1-7 7H5.509l3.499 3.317L7.632 22l-5.32-5.042a1 1 0 0 1 0-1.452l5.32-5.042 1.376 1.452-3.5 3.316H14a5 5 0 0 0 5-5V3h2z"/></svg>
    );
  },
);

CornerDownLeft.displayName = 'CornerDownLeft';
