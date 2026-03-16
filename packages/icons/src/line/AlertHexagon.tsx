import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AlertHexagon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.996 1.005a4 4 0 0 1 4.008 0l6.5 3.763A4 4 0 0 1 22.5 8.229v7.542a4 4 0 0 1-1.996 3.461l-6.5 3.763a4 4 0 0 1-4.008 0l-6.5-3.763A4 4 0 0 1 1.5 15.771V8.229c0-1.427.76-2.746 1.996-3.461zm3.006 1.73a2 2 0 0 0-2.004 0L4.498 6.5A2 2 0 0 0 3.5 8.23v7.542a2 2 0 0 0 .998 1.73l6.5 3.764c.62.358 1.384.358 2.004 0l6.5-3.764a2 2 0 0 0 .998-1.73V8.229a2 2 0 0 0-.998-1.73zM12 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m1-1.5h-2V6.5h2z"/></svg>
    );
  },
);

AlertHexagon.displayName = 'AlertHexagon';
