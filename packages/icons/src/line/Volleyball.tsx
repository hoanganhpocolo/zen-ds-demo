import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Volleyball = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M7.426 15.514a23 23 0 0 0-2.52 2.02A8.98 8.98 0 0 0 13.89 20.8a22.2 22.2 0 0 1-6.465-5.285m4.404-2.37q-1.391.562-2.691 1.297a20.2 20.2 0 0 0 6.28 4.9l.998.499a9 9 0 0 0 2.417-1.988 26 26 0 0 1-5.108-3.19l-1.893-1.514zm6.435-7.604a23.3 23.3 0 0 1-1.091 9.12 24 24 0 0 0 2.799 1.515A8.96 8.96 0 0 0 21 12a8.97 8.97 0 0 0-2.735-6.46m-6.699 2.206A17.4 17.4 0 0 0 4.4 11.67L3.045 12.9a9 9 0 0 0 .795 2.9 24.7 24.7 0 0 1 7.265-4.518l.23-1.379q.178-1.074.23-2.156m1.689-4.657c.428 2.357.448 4.773.054 7.142l-.226 1.355 1.892 1.513q.236.186.477.368a21.3 21.3 0 0 0 .612-9.497 9 9 0 0 0-2.81-.881m-2.046-.053a9 9 0 0 0-7.995 7.014 19.4 19.4 0 0 1 8.343-4.365 19 19 0 0 0-.348-2.649"/></svg>
    );
  },
);

Volleyball.displayName = 'Volleyball';
