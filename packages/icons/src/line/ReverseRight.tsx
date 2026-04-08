import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ReverseRight = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22.688 9.316a1 1 0 0 1 0 1.452l-5.594 5.316-1.376-1.451 3.773-3.591H6.48a3.48 3.48 0 0 0 0 6.958H21v2H6.479a5.479 5.479 0 0 1 0-10.958H19.49l-3.773-3.59L17.094 4z"/></svg>
    );
  },
);

ReverseRight.displayName = 'ReverseRight';
