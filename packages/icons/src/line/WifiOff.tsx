import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const WifiOff = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m20.839 20.092-1.414 1.414-7.504-7.504a5.98 5.98 0 0 0-4.163 1.756l-1.415-1.415a8 8 0 0 1 3.796-2.123l-1.6-1.6a10 10 0 0 0-3.61 2.309l-1.414-1.414a12 12 0 0 1 3.492-2.427L5.51 7.592A14 14 0 0 0 2.1 10.1L.687 8.687A16 16 0 0 1 4.039 6.12L1.747 3.828l1.414-1.414zM12 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0-8c3.314 0 6.314 1.343 8.485 3.515l-1.414 1.414a9.97 9.97 0 0 0-5.344-2.778l-2.144-2.143Q11.79 8 12 8m0-4a15.95 15.95 0 0 1 11.314 4.687L21.899 10.1A13.96 13.96 0 0 0 12 6q-1.147.002-2.245.18L8.063 4.488A16 16 0 0 1 12 4"/></svg>
    );
  },
);

WifiOff.displayName = 'WifiOff';
