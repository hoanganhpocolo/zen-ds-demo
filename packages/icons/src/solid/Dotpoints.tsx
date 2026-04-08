import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Dotpoints = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M3.5 17.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M22 20H7v-2h15zM3.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M22 13H7v-2h15zM3.5 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M22 6H7V4h15z"/></svg>
    );
  },
);

Dotpoints.displayName = 'Dotpoints';
