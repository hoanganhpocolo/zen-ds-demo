import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Football = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m1.986 2.222a1.999 1.999 0 0 1-3.973 0 9 9 0 0 0-5.63 3.985 1.998 1.998 0 0 1-1.32 3.743A8.96 8.96 0 0 0 4.8 17.4a2 2 0 0 1 2.963 2.54A8.96 8.96 0 0 0 12 21a8.96 8.96 0 0 0 4.236-1.06 2 2 0 0 1 2.962-2.54 8.96 8.96 0 0 0 1.738-6.45q-.21.049-.436.05a2 2 0 0 1-.884-3.793 9 9 0 0 0-5.63-3.985M12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"/></svg>
    );
  },
);

Football.displayName = 'Football';
