import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AlarmClockCheck = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.001 2.9a9.55 9.55 0 0 1 7.305 15.702l2.983 2.984L20.875 23l-3.01-3.012A9.5 9.5 0 0 1 12 22a9.5 9.5 0 0 1-5.863-2.012L3.126 23l-1.414-1.414 2.984-2.984A9.55 9.55 0 0 1 12.001 2.9m-.3 10.686-2.494-2.493-1.414 1.414 3.2 3.2a1 1 0 0 0 1.414 0l4.8-4.8-1.414-1.414zM6.825 2.414 2.414 6.825 1 5.411 5.412 1zM23 5.41l-1.414 1.414-4.41-4.41L18.59 1z"/></svg>
    );
  },
);

AlarmClockCheck.displayName = 'AlarmClockCheck';
