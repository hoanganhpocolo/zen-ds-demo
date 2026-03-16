import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Hurricane02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 21h-5v-2h5zm-2-4H8v-2h7zm3-4H9v-2h9zm2-4H6V7h14zm2-4H2V3h20z"/></svg>
    );
  },
);

Hurricane02.displayName = 'Hurricane02';
