import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ChevronLeft01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.9 7.172c.406-.367 1.1-.107 1.1.411v8.833c0 .519-.694.779-1.1.412l-4.586-4.142a.906.906 0 0 1 0-1.372z"/></svg>
    );
  },
);

ChevronLeft01.displayName = 'ChevronLeft01';
