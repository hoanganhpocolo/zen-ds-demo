import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ChartBreakoutCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 3a8.96 8.96 0 0 0-6.363 2.64A9 9 0 0 0 3 12.018c0 .737.088 1.453.254 2.137 2.04.342 6.136-.071 9.709-4.155H9V8h5.8A1.2 1.2 0 0 1 16 9.2v6.097h-2v-3.465c-3.422 3.61-7.293 4.516-9.954 4.408a9 9 0 0 0 2.002 2.541c3.509 3.103 9.004 2.93 12.316-.387C20.106 16.648 21 14.517 21 12.018h2c0 3.032-1.106 5.67-3.22 7.789-4.06 4.066-10.756 4.277-15.057.473a11.03 11.03 0 0 1-3.227-4.983A11 11 0 0 1 1 12.017c0-3.041 1.232-5.798 3.222-7.79A10.96 10.96 0 0 1 12 1zm11 7h-3.5V8H23zm-1.293-6.293-2.5 2.5-1.414-1.414 2.5-2.5zM16 4.5h-2V1h2z"/></svg>
    );
  },
);

ChartBreakoutCircle.displayName = 'ChartBreakoutCircle';
