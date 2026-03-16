import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ShieldTick = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.051 1.33a3 3 0 0 1 1.897 0l6.877 2.294a3 3 0 0 1 2.04 3.094l-.537 6.439a9 9 0 0 1-4.198 6.885l-4.6 2.875a1 1 0 0 1-1.061 0l-4.6-2.875a9 9 0 0 1-4.199-6.885l-.537-6.439a3 3 0 0 1 2.041-3.094zm.448 10.757L9.206 9.794l-1.414 1.414 3 3a1 1 0 0 0 1.414 0l4.5-4.5-1.414-1.414z"/></svg>
    );
  },
);

ShieldTick.displayName = 'ShieldTick';
