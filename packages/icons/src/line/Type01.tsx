import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Type01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 3a3 3 0 0 1 3 3v2h-2V6a1 1 0 0 0-1-1h-5v14h3v2H8v-2h3V5H6a1 1 0 0 0-1 1v2H3V6a3 3 0 0 1 3-3z"/></svg>
    );
  },
);

Type01.displayName = 'Type01';
