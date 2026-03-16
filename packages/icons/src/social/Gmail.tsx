import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Gmail = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#4285F4" d="M3.087 19.744h3.284V11.77L1.68 8.25v10.086c0 .779.631 1.407 1.407 1.407"/><path fill="#34A853" d="M17.629 19.744h3.284c.778 0 1.407-.63 1.407-1.407V8.25l-4.691 3.519"/><path fill="#FBBC04" d="M17.629 5.672v6.098l4.69-3.518V6.375c0-1.74-1.986-2.732-3.376-1.689"/><path fill="#EA4335" d="M6.371 11.77v-6.1l5.63 4.222 5.628-4.222v6.099L12 15.99"/><path fill="#C5221F" d="M1.68 6.375v1.877l4.691 3.518V5.672l-1.313-.986C3.664 3.643 1.68 4.635 1.68 6.376"/></svg>
    );
  },
);

Gmail.displayName = 'Gmail';
