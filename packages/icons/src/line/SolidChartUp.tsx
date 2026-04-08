import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SolidChartUp = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-3.883-3.034l5.618-5.617 2.21 2.209a1 1 0 0 0 1.413 0l4.64-4.64v1.718h2V8.505a1 1 0 0 0-1-1h-4.375v2h1.96l-3.932 3.932-2.209-2.21a1 1 0 0 0-1.414 0L2 16.256V6a4 4 0 0 1 4-4z"/></svg>
    );
  },
);

SolidChartUp.displayName = 'SolidChartUp';
