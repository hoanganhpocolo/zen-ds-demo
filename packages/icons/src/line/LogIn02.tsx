import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LogIn02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11c-3.56 0-6.724-1.692-8.733-4.311L4.875 17.5a9 9 0 1 0 0-11L3.5 5.018A10.98 10.98 0 0 1 12 1m4.445 10.294a1 1 0 0 1 0 1.412l-4.737 4.75-1.416-1.412L13.327 13H1v-2h12.327l-3.035-3.044 1.416-1.412z"/></svg>
    );
  },
);

LogIn02.displayName = 'LogIn02';
