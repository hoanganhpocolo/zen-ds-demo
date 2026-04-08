import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GooglePlay = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#EA4335" d="M11.258 11.538 2.6 20.61a2.35 2.35 0 0 0 3.439 1.394l9.742-5.549z"/><path fill="#FBBC04" d="M20.013 9.996 15.8 7.583l-4.742 4.162 4.762 4.696L20 14.054a2.29 2.29 0 0 0 0-4.058z"/><path fill="#4285F4" d="M2.6 3.396a2.2 2.2 0 0 0-.078.594v16.026q.001.302.078.593l8.955-8.839z"/><path fill="#34A853" d="m11.323 12.003 4.477-4.42L6.07 2.01a2.4 2.4 0 0 0-1.206-.33A2.35 2.35 0 0 0 2.6 3.39z"/></svg>
    );
  },
);

GooglePlay.displayName = 'GooglePlay';
