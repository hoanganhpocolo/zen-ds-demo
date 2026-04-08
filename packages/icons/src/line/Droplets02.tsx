import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Droplets02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1a1 1 0 0 1 .719.306l5.657 5.857c3.498 3.623 3.498 9.483 0 13.106a8.807 8.807 0 0 1-12.752 0c-3.498-3.623-3.498-9.483 0-13.106l5.656-5.857C11.47 1.11 11.73 1 12 1M7.063 8.553c-2.75 2.847-2.75 7.478 0 10.326 2.73 2.828 7.144 2.828 9.875 0 2.75-2.848 2.75-7.479 0-10.326L12 3.439z"/></svg>
    );
  },
);

Droplets02.displayName = 'Droplets02';
