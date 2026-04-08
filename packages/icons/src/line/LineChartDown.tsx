import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LineChartDown = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM6 4a2 2 0 0 0-2 2v.916l4.735 4.735 2.21-2.209a1 1 0 0 1 1.413 0l3.64 3.64v-1.718h2v4.131a1 1 0 0 1-1 1h-4.375v-2h1.96l-2.932-2.931-2.209 2.209a1 1 0 0 1-1.414 0L4 9.744V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

LineChartDown.displayName = 'LineChartDown';
