import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BezierCurve03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14 2a1 1 0 0 1 1 1v4a1 1 0 0 1-.368.775L19.566 16H22a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2.434l4.934-8.225A1 1 0 0 1 9 7V3a1 1 0 0 1 1-1zM3 20h2v-2H3zm16 0h2v-2h-2zM6.632 16.225A1 1 0 0 1 7 17v1h10v-1c0-.313.143-.592.368-.775L12.434 8h-.868zM11 6h2V4h-2z"/></svg>
    );
  },
);

BezierCurve03.displayName = 'BezierCurve03';
