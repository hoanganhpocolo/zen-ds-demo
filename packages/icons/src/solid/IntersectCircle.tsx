import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const IntersectCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9 1c3.8 0 6.981 2.65 7.797 6.203a8 8 0 1 1-9.594 9.594A8 8 0 0 1 9 1m7.993 8.339a8 8 0 0 1-7.654 7.654 6 6 0 1 0 7.654-7.654M9 3a6 6 0 0 0-1.993 11.661 8 8 0 0 1 7.654-7.654A6 6 0 0 0 9 3"/></svg>
    );
  },
);

IntersectCircle.displayName = 'IntersectCircle';
