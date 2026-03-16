import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ChevronRightDouble = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.552 11.257c.398.41.398 1.076 0 1.486L6.444 18 5 16.514 9.385 12 5 7.486 6.444 6zm7.15 0a1.07 1.07 0 0 1-.001 1.486L13.594 18l-1.445-1.486L16.534 12 12.15 7.486 13.594 6z"/></svg>
    );
  },
);

ChevronRightDouble.displayName = 'ChevronRightDouble';
