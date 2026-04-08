import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ChevronRightLineMedium = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.707 11.293a1 1 0 0 1 0 1.414L10.414 19 9 17.586 14.586 12 9 6.414 10.414 5z"/></svg>
    );
  },
);

ChevronRightLineMedium.displayName = 'ChevronRightLineMedium';
