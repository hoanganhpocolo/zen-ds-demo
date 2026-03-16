import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const OnlyFans = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#00AEEF" d="M8.56 5.1a6.86 6.86 0 0 1 4.864 2.022 6.9 6.9 0 0 1 2.015 4.88 6.9 6.9 0 0 1-4.247 6.374 6.86 6.86 0 0 1-7.497-1.496 6.915 6.915 0 0 1-1.491-7.52 6.88 6.88 0 0 1 6.355-4.259zm0 8.97a2.06 2.06 0 0 0 2.065-2.068 2.07 2.07 0 0 0-1.274-1.913 2.06 2.06 0 0 0-2.25.449 2.072 2.072 0 0 0 1.46 3.533"/><path fill="#008CCF" d="M16.293 10.276c1.748.505 3.811 0 3.811 0-.598 2.622-2.497 4.264-5.235 4.463a6.87 6.87 0 0 1-6.307 4.16l2.063-6.58c2.121-6.763 3.21-7.22 8.24-7.22h3.455c-.578 2.553-2.57 4.503-6.027 5.175z"/></svg>
    );
  },
);

OnlyFans.displayName = 'OnlyFans';
