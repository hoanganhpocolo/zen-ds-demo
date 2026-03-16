import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LogOut01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3v2H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h3zm12.707 7.293a1 1 0 0 1 0 1.414l-5.5 5.5-1.414-1.414L18.586 13H7v-2h11.586l-3.793-3.793 1.414-1.414z"/></svg>
    );
  },
);

LogOut01.displayName = 'LogOut01';
