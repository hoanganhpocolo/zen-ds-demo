import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SearchRefraction = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.685 1a9.185 9.185 0 0 1 9.184 9.185 9.15 9.15 0 0 1-1.995 5.716l4.626 4.626L21.027 22l-4.626-4.626a9.15 9.15 0 0 1-5.716 1.995 9.185 9.185 0 1 1 0-18.369m0 2.083a7.102 7.102 0 1 0 0 14.204 7.102 7.102 0 0 0 0-14.204M11 4.893c2.72.16 4.89 2.37 4.983 5.107h-2.002A3.3 3.3 0 0 0 11 6.898z"/></svg>
    );
  },
);

SearchRefraction.displayName = 'SearchRefraction';
