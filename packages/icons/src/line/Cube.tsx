import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Cube = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.996 1.005a4 4 0 0 1 4.008 0l6.5 3.763A4 4 0 0 1 22.5 8.229v7.542a4 4 0 0 1-1.996 3.461l-6.5 3.763a4 4 0 0 1-4.008 0l-6.5-3.763A4 4 0 0 1 1.5 15.771V8.229c0-1.427.76-2.746 1.996-3.461zM3.5 15.77a2 2 0 0 0 .998 1.73l6.5 3.764H11v-8.86a4 4 0 0 1-1.004-.41L3.5 8.233zm10.504-3.776c-.319.185-.657.32-1.004.41v8.86h.002l6.5-3.764a2 2 0 0 0 .998-1.73V8.233zm-1.002-9.26a2 2 0 0 0-2.004 0L4.498 6.5l-.003.001 6.503 3.765a2 2 0 0 0 2.004 0L19.504 6.5l-.002-.001z"/></svg>
    );
  },
);

Cube.displayName = 'Cube';
