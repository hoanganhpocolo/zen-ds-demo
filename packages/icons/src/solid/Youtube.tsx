import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Youtube = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6.656 3.049a27.3 27.3 0 0 1 10.688 0A7.04 7.04 0 0 1 23 9.949v4.102a7.04 7.04 0 0 1-5.656 6.9c-3.528.706-7.16.706-10.688 0A7.04 7.04 0 0 1 1 14.051V9.949a7.04 7.04 0 0 1 5.656-6.9m4.368 5.889a1 1 0 0 0-1.524.851v4.421a1 1 0 0 0 1.524.852l3.592-2.21a1 1 0 0 0 0-1.703z"/></svg>
    );
  },
);

Youtube.displayName = 'Youtube';
