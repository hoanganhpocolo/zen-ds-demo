import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PresentationChart = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M23 4h-1.75v7a5 5 0 0 1-5 5h-1.836L19 20.586 17.586 22 13 17.414V22h-2v-4.586L6.414 22 5 20.586 9.586 16H7.75a5 5 0 0 1-5-5V4H1V2h22zM4.75 11a3 3 0 0 0 3 3h8.5a3 3 0 0 0 3-3V4H4.75zM9 12H7v-2h2zm4 0h-2V9h2zm4 0h-2V6.5h2z"/></svg>
    );
  },
);

PresentationChart.displayName = 'PresentationChart';
