import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LogOut02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.19 1A11.24 11.24 0 0 1 21 5.217L19.439 6.5A9.2 9.2 0 0 0 12.19 3c-5.056 0-9.156 4.03-9.156 9s4.1 9 9.156 9a9.2 9.2 0 0 0 7.249-3.5l1.383 1.5a11.24 11.24 0 0 1-8.632 4C6.01 23 1 18.075 1 12S6.01 1 12.19 1m6.825 10.294a.99.99 0 0 1 0 1.412l-4.82 4.75-1.44-1.412L15.843 13h-8.74v-2h8.74l-3.088-3.044 1.44-1.412z"/></svg>
    );
  },
);

LogOut02.displayName = 'LogOut02';
