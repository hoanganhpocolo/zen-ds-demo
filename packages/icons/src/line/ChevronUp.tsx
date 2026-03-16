import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ChevronUp = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.293 8.293a1 1 0 0 1 1.414 0L18 13.586 16.586 15 12 10.414 7.414 15 6 13.586z"/></svg>
    );
  },
);

ChevronUp.displayName = 'ChevronUp';
