import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BatteryCharging = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 5a4 4 0 0 1 4 4v1h2v4h-2v1a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4zM5 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm6.378 2.015L10.618 11h2.632a1 1 0 0 1 .813 1.581l-2.685 3.687-1.128-.768 1.057-2.5H8.75a1 1 0 0 1-.832-1.555l2.168-3.168z"/></svg>
    );
  },
);

BatteryCharging.displayName = 'BatteryCharging';
