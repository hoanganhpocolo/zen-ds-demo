import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowsRight = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21.707 17.086a1 1 0 0 1 0 1.414l-4.5 4.5-1.414-1.414 2.793-2.793H2v-2h16.586L15.793 14l1.414-1.414zm-6-11.586a1 1 0 0 1 0 1.414l-4.5 4.5L9.793 10l2.793-2.793H2v-2h10.586L9.793 2.414 11.207 1z"/></svg>
    );
  },
);

ArrowsRight.displayName = 'ArrowsRight';
