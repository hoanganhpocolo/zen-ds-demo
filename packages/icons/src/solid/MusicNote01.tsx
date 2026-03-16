import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MusicNote01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17.507 2.402A3 3 0 0 1 21 5.362V16a4 4 0 1 1-2-3.463V5.362a1 1 0 0 0-1.164-.986l-8 1.333A1 1 0 0 0 9 6.695V18a4 4 0 1 1-2-3.463V6.695a3 3 0 0 1 2.507-2.96z"/></svg>
    );
  },
);

MusicNote01.displayName = 'MusicNote01';
