import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SolidChartDown = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7.744l5.028 5.029a1 1 0 0 0 1.414 0l2.21-2.21 3.931 3.932h-1.96v2h4.374a1 1 0 0 0 1-1v-4.13h-2v1.716l-4.639-4.639a1 1 0 0 0-1.414 0l-2.209 2.21-5.618-5.618A4 4 0 0 1 6 2z"/></svg>
    );
  },
);

SolidChartDown.displayName = 'SolidChartDown';
