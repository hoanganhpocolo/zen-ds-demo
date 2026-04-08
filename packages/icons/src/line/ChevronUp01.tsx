import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ChevronUp01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.313 8.314a.906.906 0 0 1 1.374 0l4.141 4.586c.367.406.107 1.1-.412 1.1H7.583c-.519 0-.778-.694-.411-1.1z"/></svg>
    );
  },
);

ChevronUp01.displayName = 'ChevronUp01';
