import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ChartBreakoutSquare = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 4H6a2 2 0 0 0-2 2v8.236c2.19.125 5.784-.602 8.963-4.236H9V8h5.8A1.2 1.2 0 0 1 16 9.2V15h-2v-3.168c-3.442 3.631-7.338 4.526-10 4.406V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6h2v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h6zm11 6h-3.5V8H23zm-1.086-6.5-2.707 2.707-1.414-1.414L20.5 2.086zM16 4.5h-2V1h2z"/></svg>
    );
  },
);

ChartBreakoutSquare.displayName = 'ChartBreakoutSquare';
