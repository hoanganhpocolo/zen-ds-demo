import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LifeBuoy = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M12 1c3.286 0 6.236 1.442 8.25 3.724A10.96 10.96 0 0 1 23 12c0 3.318-1.47 6.293-3.791 8.309A10.96 10.96 0 0 1 12 23a10.97 10.97 0 0 1-7.817-3.26A10.97 10.97 0 0 1 1 12c0-2.998 1.2-5.717 3.145-7.7A10.97 10.97 0 0 1 12 1M6.343 19A8.96 8.96 0 0 0 12 21c1.87 0 3.604-.57 5.042-1.544l-2.18-2.18A6 6 0 0 1 12 18a5.98 5.98 0 0 1-3.518-1.139zm10.64-10.343A6 6 0 0 1 18 12a5.98 5.98 0 0 1-1.555 4.03l2.123 2.123A8.97 8.97 0 0 0 21 12c0-1.943-.615-3.74-1.661-5.21zM4.912 6.453A8.96 8.96 0 0 0 3 12c0 2.107.723 4.044 1.937 5.578l2.143-2.143A6 6 0 0 1 6 12c0-1.274.398-2.456 1.075-3.428zM12 8c-1.12 0-2.13.458-2.856 1.2A3.98 3.98 0 0 0 8 12c0 1.09.435 2.077 1.144 2.8A4 4 0 0 0 12 16c.902 0 1.73-.298 2.4-.8A4 4 0 0 0 16 12c0-1.09-.435-2.077-1.144-2.8A3.98 3.98 0 0 0 12 8m0-5a8.96 8.96 0 0 0-5.687 2.024l2.162 2.12A5.98 5.98 0 0 1 12 6c1.35 0 2.598.447 3.6 1.2l2.404-1.905A8.96 8.96 0 0 0 12 3" clipRule="evenodd"/></svg>
    );
  },
);

LifeBuoy.displayName = 'LifeBuoy';
