import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ChevronLeftLineMedium = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15 6.414 9.414 12 15 17.586 13.586 19l-6.293-6.293a1 1 0 0 1 0-1.414L13.586 5z"/></svg>
    );
  },
);

ChevronLeftLineMedium.displayName = 'ChevronLeftLineMedium';
