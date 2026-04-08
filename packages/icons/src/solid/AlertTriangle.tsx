import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AlertTriangle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.402 3c1.155-2 4.04-2 5.196 0l8.227 14.25c1.154 2-.288 4.5-2.597 4.5H3.772c-2.309 0-3.751-2.5-2.597-4.5zM12 14.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 13h2V7.5h-2z"/></svg>
    );
  },
);

AlertTriangle.displayName = 'AlertTriangle';
