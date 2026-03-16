import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SlashCircle01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M4.968 6.382A8.96 8.96 0 0 0 3 12a9 9 0 0 0 9 9 8.96 8.96 0 0 0 5.618-1.968zM12 3a8.96 8.96 0 0 0-5.618 1.968l12.65 12.65A8.96 8.96 0 0 0 21 12a9 9 0 0 0-9-9"/></svg>
    );
  },
);

SlashCircle01.displayName = 'SlashCircle01';
