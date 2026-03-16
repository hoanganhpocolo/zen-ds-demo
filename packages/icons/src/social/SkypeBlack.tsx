import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SkypeBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.922 18.134c-3.414 0-4.973-1.74-4.973-3.015a1.106 1.106 0 0 1 1.167-1.106c1.462 0 1.08 2.193 3.806 2.193 1.394 0 2.213-.84 2.213-1.628 0-.474-.27-1.015-1.19-1.232l-3.046-.768c-2.446-.622-2.873-1.983-2.873-3.245 0-2.619 2.396-3.566 4.677-3.566 2.1 0 4.598 1.16 4.598 2.73 0 .677-.565 1.04-1.222 1.04-1.248 0-1.038-1.753-3.55-1.753-1.248 0-1.904.585-1.904 1.404s.971 1.096 1.824 1.282l2.246.508c2.464.555 3.12 2 3.12 3.383 0 2.129-1.648 3.773-4.896 3.773m9.43-4.504a10 10 0 0 0 .146-1.691 9.617 9.617 0 0 0-11.281-9.512 5.66 5.66 0 0 0-2.836-.754 5.752 5.752 0 0 0-4.964 8.598 9.623 9.623 0 0 0 11.14 11.2 5.65 5.65 0 0 0 2.831.754 5.752 5.752 0 0 0 4.964-8.595"/></svg>
    );
  },
);

SkypeBlack.displayName = 'SkypeBlack';
