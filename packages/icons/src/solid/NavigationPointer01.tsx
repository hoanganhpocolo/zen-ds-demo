import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const NavigationPointer01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19.5 1.754c1.563-.52 3.05.967 2.53 2.53l-5.608 16.82c-.581 1.745-3.01 1.847-3.735.156l-3.049-7.114-7.114-3.049c-1.69-.724-1.59-3.154.155-3.735z"/></svg>
    );
  },
);

NavigationPointer01.displayName = 'NavigationPointer01';
