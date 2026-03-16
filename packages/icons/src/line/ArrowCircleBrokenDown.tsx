import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowCircleBrokenDown = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18.602 3.2A10.99 10.99 0 0 1 23 12c0 6.075-4.925 11-11 11S1 18.075 1 12c0-3.599 1.73-6.795 4.398-8.8L6.6 4.8a9 9 0 1 0 10.8 0zM13 13.586l2.793-2.793 1.414 1.414-4.5 4.5a1 1 0 0 1-1.414 0l-4.5-4.5 1.414-1.414L11 13.586V1h2z"/></svg>
    );
  },
);

ArrowCircleBrokenDown.displayName = 'ArrowCircleBrokenDown';
