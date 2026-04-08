import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ClockStopwatch = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15.306 3H13v1.308c4.765.492 8.5 4.465 8.5 9.32C21.5 18.818 17.232 23 12 23s-9.5-4.182-9.5-9.372c0-4.855 3.735-8.828 8.5-9.32V3H8.694V1h6.612zM10.5 14.232l4 2.477L15.52 15l-3.001-1.763v-4.02H10.5zM6.207 4.207 2.414 8 1 6.586l3.793-3.793zM23 6.086 21.586 7.5l-3.293-3.293 1.414-1.414z"/></svg>
    );
  },
);

ClockStopwatch.displayName = 'ClockStopwatch';
