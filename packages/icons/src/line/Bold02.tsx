import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Bold02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16 3a5 5 0 0 1 3.436 8.633A5 5 0 0 1 17 21H3v-2h2.5V5H3V3zM7.5 5v14H9V5zM11 19h6a3 3 0 1 0 0-6h-6zm0-14v6h5a3 3 0 1 0 0-6z"/></svg>
    );
  },
);

Bold02.displayName = 'Bold02';
