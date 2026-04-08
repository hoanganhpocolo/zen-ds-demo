import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Pizza = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.783 1.015a1 1 0 0 1 .803.76l4.389 19a1 1 0 0 1-1.2 1.2l-19-4.39A1 1 0 0 1 1 16.613C1 7.99 7.99 1 16.612 1zm-.036 6.017a10.53 10.53 0 0 0-9.715 9.715l12.633 2.918zM16.5 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-.679-10.978c-6.888.395-12.404 5.911-12.799 12.8l2.039.47c.584-5.93 5.3-10.647 11.231-11.231zM11.5 13a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m3-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/></svg>
    );
  },
);

Pizza.displayName = 'Pizza';
