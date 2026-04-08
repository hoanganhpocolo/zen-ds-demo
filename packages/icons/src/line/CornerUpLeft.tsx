import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CornerUpLeft = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m9.008 3.451-3.5 3.317H14a7 7 0 0 1 7 7V21h-2v-7.232a5 5 0 0 0-5-5H5.509l3.499 3.316-1.376 1.452-5.32-5.042a1 1 0 0 1 0-1.452L7.633 2z"/></svg>
    );
  },
);

CornerUpLeft.displayName = 'CornerUpLeft';
