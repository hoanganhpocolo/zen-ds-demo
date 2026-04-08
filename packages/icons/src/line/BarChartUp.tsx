import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BarChartUp = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4 22H2v-5h2zm5 0H7v-9h2zm5 0h-2V8h2zm3.37-19.775a1 1 0 0 1 1.337.068l3 3-1.414 1.414L19 5.414V22h-2V5.414l-1.293 1.293-1.414-1.414 3-3z"/></svg>
    );
  },
);

BarChartUp.displayName = 'BarChartUp';
