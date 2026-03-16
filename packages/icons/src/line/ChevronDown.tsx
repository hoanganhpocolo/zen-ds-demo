import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ChevronDown = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m18 10.414-5.293 5.293a1 1 0 0 1-1.414 0L6 10.414 7.414 9 12 13.586 16.586 9z"/></svg>
    );
  },
);

ChevronDown.displayName = 'ChevronDown';
