import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BatteryCharging = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 5a4 4 0 0 1 4 4v1h2v4h-2v1a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4zm-9.082 6.445A1 1 0 0 0 8.75 13h2.557l-1.057 2.5 1.128.768 2.685-3.687A1 1 0 0 0 13.25 11h-2.632l.76-1.985-1.292-.738z"/></svg>
    );
  },
);

BatteryCharging.displayName = 'BatteryCharging';
