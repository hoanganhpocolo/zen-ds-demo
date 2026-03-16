import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Wifi = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0-4c2.21 0 4.21.895 5.657 2.343l-1.415 1.415A5.98 5.98 0 0 0 12 14a5.98 5.98 0 0 0-4.242 1.758l-1.415-1.415A7.98 7.98 0 0 1 12 12m0-4c3.314 0 6.314 1.343 8.485 3.515l-1.414 1.414A9.97 9.97 0 0 0 12 10a9.97 9.97 0 0 0-7.071 2.929l-1.414-1.414A11.96 11.96 0 0 1 12 8m0-4a15.95 15.95 0 0 1 11.314 4.687L21.899 10.1A13.96 13.96 0 0 0 12 6a13.96 13.96 0 0 0-9.9 4.1L.688 8.688A15.95 15.95 0 0 1 12 4"/></svg>
    );
  },
);

Wifi.displayName = 'Wifi';
