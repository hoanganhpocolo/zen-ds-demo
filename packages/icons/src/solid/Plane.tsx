import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Plane = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17.086 2.1a3.338 3.338 0 1 1 4.715 4.715l-3.39 3.08 2.312 9.577a1 1 0 0 1-.265.941l-1.216 1.216a1 1 0 0 1-1.539-.152l-4.54-6.811-3.335 3.032-.258 3.364a1 1 0 0 1-.29.63l-.816.816a1 1 0 0 1-1.626-.314l-1.54-3.592-3.592-1.54a1 1 0 0 1-.313-1.626l.815-.815a1 1 0 0 1 .63-.29l3.364-.259 3.032-3.336-6.81-4.539a1 1 0 0 1-.152-1.539l1.215-1.216a1 1 0 0 1 .942-.264l9.576 2.31z"/></svg>
    );
  },
);

Plane.displayName = 'Plane';
