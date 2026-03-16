import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowsDown = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7.207 18.586 10 15.793l1.414 1.414-4.5 4.5a1 1 0 0 1-1.414 0l-4.5-4.5 1.414-1.414 2.793 2.793V2h2zm11.586-6 2.793-2.793L23 11.207l-4.5 4.5a1 1 0 0 1-1.414 0l-4.5-4.5L14 9.793l2.793 2.793V2h2z"/></svg>
    );
  },
);

ArrowsDown.displayName = 'ArrowsDown';
