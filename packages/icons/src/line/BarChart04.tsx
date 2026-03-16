import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BarChart04 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4 2v16a2 2 0 0 0 2 2h16v2H6a4 4 0 0 1-4-4V2zm5 15H7V4h2zm5 0h-2V7h2zm5 0h-2v-7h2z"/></svg>
    );
  },
);

BarChart04.displayName = 'BarChart04';
