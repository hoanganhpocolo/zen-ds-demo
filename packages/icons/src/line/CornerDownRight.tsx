import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CornerDownRight = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M5 3v7.232a5 5 0 0 0 5 5h8.491l-3.499-3.316 1.376-1.452 5.32 5.042a1 1 0 0 1 0 1.452L16.368 22l-1.376-1.451 3.5-3.317H10a7 7 0 0 1-7-7V3z"/></svg>
    );
  },
);

CornerDownRight.displayName = 'CornerDownRight';
