import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Monitor01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 2a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-6v2h3v2H8v-2h3v-2H5a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM5 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm14 10H5V6h14z"/></svg>
    );
  },
);

Monitor01.displayName = 'Monitor01';
