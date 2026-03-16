import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Hexagon02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.996 1.005a4 4 0 0 1 4.008 0l6.5 3.762A4 4 0 0 1 22.5 8.23v7.541a4 4 0 0 1-1.996 3.462l-6.5 3.763a4 4 0 0 1-4.008 0l-6.5-3.763A4 4 0 0 1 1.5 15.77V8.23a4 4 0 0 1 1.996-3.463zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/></svg>
    );
  },
);

Hexagon02.displayName = 'Hexagon02';
