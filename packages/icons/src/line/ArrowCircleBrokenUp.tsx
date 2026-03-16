import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowCircleBrokenUp = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.293 7.293a1 1 0 0 1 1.414 0l4.5 4.5-1.414 1.414L13 10.414V23h-2V10.414l-2.793 2.793-1.414-1.414zM12 1c6.075 0 11 4.925 11 11 0 3.599-1.73 6.795-4.398 8.8L17.4 19.2a9 9 0 1 0-10.8 0l-1.202 1.6A10.99 10.99 0 0 1 1 12C1 5.925 5.925 1 12 1"/></svg>
    );
  },
);

ArrowCircleBrokenUp.displayName = 'ArrowCircleBrokenUp';
