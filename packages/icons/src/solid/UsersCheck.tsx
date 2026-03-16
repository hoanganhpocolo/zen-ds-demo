import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const UsersCheck = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10 22H2a1 1 0 0 1-1-1 8 8 0 0 1 8-8h4zm13-5.672-5.293 5.293a1 1 0 0 1-1.414 0l-3-3 1.414-1.414L17 19.5l4.586-4.586zM9 2a4.75 4.75 0 1 1 0 9.5A4.75 4.75 0 0 1 9 2m6 0a4.75 4.75 0 1 1-1.286 9.321A6.72 6.72 0 0 0 15.5 6.75c0-1.764-.678-3.37-1.786-4.572A4.8 4.8 0 0 1 15 2"/></svg>
    );
  },
);

UsersCheck.displayName = 'UsersCheck';
