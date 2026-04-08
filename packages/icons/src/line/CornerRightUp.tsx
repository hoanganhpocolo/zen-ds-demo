import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CornerRightUp = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.232 2a1 1 0 0 1 .726.313L22 7.632l-1.451 1.376-3.317-3.5V14a7 7 0 0 1-7 7H3v-2h7.232a5 5 0 0 0 5-5V5.509l-3.316 3.499-1.452-1.376 5.042-5.32c.189-.199.452-.312.726-.312"/></svg>
    );
  },
);

CornerRightUp.displayName = 'CornerRightUp';
