import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ChevronLeftLineSmall = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15 7.414 10.414 12 15 16.586 13.586 18l-5.293-5.293a1 1 0 0 1 0-1.414L13.586 6z"/></svg>
    );
  },
);

ChevronLeftLineSmall.displayName = 'ChevronLeftLineSmall';
