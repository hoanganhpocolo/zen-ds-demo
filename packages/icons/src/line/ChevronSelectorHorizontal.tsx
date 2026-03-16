import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ChevronSelectorHorizontal = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10 7.414 5.414 12 10 16.586 8.586 18l-5.293-5.293a1 1 0 0 1 0-1.414L8.586 6zm10.707 3.879a1 1 0 0 1 0 1.414L15.414 18 14 16.586 18.586 12 14 7.414 15.414 6z"/></svg>
    );
  },
);

ChevronSelectorHorizontal.displayName = 'ChevronSelectorHorizontal';
