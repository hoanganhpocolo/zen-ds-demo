import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ChevronLeftDouble = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.85 7.486 7.467 12l4.385 4.514L10.406 18 5.3 12.743A1.07 1.07 0 0 1 5 12c0-.279.107-.546.299-.743L10.406 6zm7.15 0L14.615 12 19 16.514 17.556 18l-5.108-5.257a1.074 1.074 0 0 1 0-1.486L17.556 6z"/></svg>
    );
  },
);

ChevronLeftDouble.displayName = 'ChevronLeftDouble';
