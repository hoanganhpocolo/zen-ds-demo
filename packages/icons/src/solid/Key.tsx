import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Key = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14.997 2A7 7 0 0 1 22 9a7.002 7.002 0 0 1-8.441 6.852l-1.856 1.855a1 1 0 0 1-.707.293h-1v1a1 1 0 0 1-1 1H7.993v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707l5.852-5.849A7 7 0 0 1 14.998 2M15 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m0 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/></svg>
    );
  },
);

Key.displayName = 'Key';
