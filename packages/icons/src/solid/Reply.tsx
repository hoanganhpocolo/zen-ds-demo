import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Reply = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.527 1.854c1.26-1.204 3.349-.335 3.382 1.407l.072 3.74H15a8 8 0 0 1 8 8v4.039a1.001 1.001 0 0 1-1.835.55A5.75 5.75 0 0 0 16.36 17H14v3.678c0 1.755-2.1 2.658-3.374 1.453L1.828 13.81a2.5 2.5 0 0 1-.01-3.622z"/></svg>
    );
  },
);

Reply.displayName = 'Reply';
