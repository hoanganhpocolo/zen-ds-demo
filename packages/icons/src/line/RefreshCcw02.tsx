import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const RefreshCcw02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22 13a1 1 0 0 1 1 1v6h-2v-3.31c-.824.931-1.718 1.88-2.686 2.698C16.59 20.844 14.52 22 12 22c-4.76 0-8.741-3.325-9.752-7.778l1.95-.444A8.004 8.004 0 0 0 12 20c1.864 0 3.492-.845 5.023-2.14 1.003-.848 1.915-1.845 2.797-2.86H16v-2zM12 2c4.76 0 8.741 3.325 9.752 7.778l-1.95.444A8.004 8.004 0 0 0 12 4c-1.864 0-3.492.845-5.022 2.14C5.974 6.988 5.062 7.985 4.18 9H8v2H2a1 1 0 0 1-1-1V4h2v3.31c.824-.931 1.718-1.88 2.686-2.698C7.408 3.156 9.48 2 12 2"/></svg>
    );
  },
);

RefreshCcw02.displayName = 'RefreshCcw02';
