import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Speedometer02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.933 11 11.018 0 3.032-1.106 5.671-3.22 7.79-4.06 4.065-10.755 4.275-15.056.472A11 11 0 0 1 1 12.018c0-3.043 1.233-5.799 3.223-7.791A10.96 10.96 0 0 1 12 1m-.985 18.028a10.3 10.3 0 0 0-3.694.686c2.958 1.783 6.781 1.699 9.661-.196a17.3 17.3 0 0 0-4.092-.49zM13 5.507h-2V3.059a8.95 8.95 0 0 0-4.617 1.915L8.207 6.8 6.793 8.218 4.969 6.39a8.97 8.97 0 0 0-1.914 4.625h2.33v2.004h-2.33a9 9 0 0 0 2.497 5.286 12.3 12.3 0 0 1 5.462-1.28l1.875-.002c2.001 0 3.99.311 5.895.921 1.248-1.41 1.977-3.056 2.166-4.925H18.5v-2.004h2.445a9 9 0 0 0-1.925-4.64l-3.62 3.626c.349.59.55 1.28.55 2.016a3.95 3.95 0 0 1-1.129 2.768A3.94 3.94 0 0 1 12 15.974a3.953 3.953 0 0 1-3.95-3.956 3.951 3.951 0 0 1 6.016-3.372l3.615-3.62A8.95 8.95 0 0 0 13 3.058zm-1 4.458a2.046 2.046 0 0 0-2.05 2.053c0 1.133.918 2.053 2.05 2.053.574 0 1.092-.236 1.465-.617.363-.371.585-.877.585-1.436 0-.56-.222-1.066-.585-1.437A2.04 2.04 0 0 0 12 9.965"/></svg>
    );
  },
);

Speedometer02.displayName = 'Speedometer02';
