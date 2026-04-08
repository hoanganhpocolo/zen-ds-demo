import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ThermometerWarm = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 1a3 3 0 0 1 3 3v10a5 5 0 1 1-6 0V4a3 3 0 0 1 3-3M7.207 19.707l-2.5 2.5-1.414-1.414 2.5-2.5zM18 16.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-5.732-6.232a3 3 0 0 0-.952 5.846l-.632 1.897a5.002 5.002 0 0 1 1.584-9.743zM4.5 15H1v-2h3.5zm2.707-7.207L5.793 9.207l-2.5-2.5 1.414-1.414zM12.5 6h-2V3h2z"/></svg>
    );
  },
);

ThermometerWarm.displayName = 'ThermometerWarm';
