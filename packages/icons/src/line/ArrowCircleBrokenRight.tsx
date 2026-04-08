import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowCircleBrokenRight = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11c-3.599 0-6.795-1.73-8.8-4.398L4.8 17.4a9 9 0 1 0 0-10.8L3.2 5.398A10.99 10.99 0 0 1 12 1m4.707 10.293a1 1 0 0 1 0 1.414l-4.5 4.5-1.414-1.414L13.586 13H1v-2h12.586l-2.793-2.793 1.414-1.414z"/></svg>
    );
  },
);

ArrowCircleBrokenRight.displayName = 'ArrowCircleBrokenRight';
