import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LineChartUp = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM6 4a2 2 0 0 0-2 2v8.256l3.028-3.029a1 1 0 0 1 1.414 0l2.21 2.21 3.931-3.932h-1.96v-2h4.374a1 1 0 0 1 1 1v4.13h-2V10.92l-4.639 4.639a1 1 0 0 1-1.414 0l-2.209-2.21L4 17.085V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

LineChartUp.displayName = 'LineChartUp';
