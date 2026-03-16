import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ChevronDown01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.416 10c.519 0 .779.695.412 1.1l-4.141 4.586a.906.906 0 0 1-1.373 0L7.171 11.1c-.367-.406-.108-1.1.411-1.101z"/></svg>
    );
  },
);

ChevronDown01.displayName = 'ChevronDown01';
