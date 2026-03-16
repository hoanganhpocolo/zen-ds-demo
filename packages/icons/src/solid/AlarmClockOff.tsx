import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AlarmClockOff = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21 21.586 19.586 23l-2.523-2.523C15.582 21.435 13.839 22 12 22a9.5 9.5 0 0 1-5.863-2.012L3.126 23l-1.414-1.414 2.984-2.984A9.5 9.5 0 0 1 2.45 12.45c0-1.878.543-3.63 1.479-5.106L1 4.414 2.414 3zM12.001 2.9c5.274 0 9.55 4.276 9.55 9.55 0 2.018-.684 3.929-1.828 5.504L12.5 10.732V7.5h-2v1.232L6.447 4.68a9.5 9.5 0 0 1 5.554-1.78M23 5.41l-1.414 1.414-4.41-4.41L18.59 1zM6.825 2.414 5.504 3.736 4.09 2.321 5.41 1z"/></svg>
    );
  },
);

AlarmClockOff.displayName = 'AlarmClockOff';
