import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Droplets03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14 1a1 1 0 0 1 .72.306l5.656 5.857c3.498 3.623 3.498 9.483 0 13.106a8.807 8.807 0 0 1-12.752 0C5.916 18.5 5.046 16.2 5.002 13.898a4.94 4.94 0 0 1-2.55-1.417c-1.936-2.005-1.936-5.242 0-7.247L5.28 2.306a1 1 0 0 1 1.44 0l2.798 2.896 3.762-3.896C13.47 1.11 13.73 1 14 1m-3.365 5.925c.729 1.851.367 4.051-1.087 5.556a4.94 4.94 0 0 1-2.546 1.415 7.4 7.4 0 0 0 2.06 4.983c2.732 2.828 7.144 2.828 9.876 0 2.75-2.848 2.75-7.479 0-10.326L14 3.439zM3.89 6.624c-1.188 1.23-1.188 3.238 0 4.468a2.904 2.904 0 0 0 4.218 0c1.188-1.23 1.188-3.238 0-4.468L6 4.439z"/></svg>
    );
  },
);

Droplets03.displayName = 'Droplets03';
