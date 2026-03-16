import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Pilcrow02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M20 3v2h-1.874v15H20v2H10v-2h2.626v-7H9A5 5 0 0 1 9 3zm-5.374 17h1.5V5h-1.5zM9 5a3 3 0 0 0 0 6h3.626V5z"/></svg>
    );
  },
);

Pilcrow02.displayName = 'Pilcrow02';
