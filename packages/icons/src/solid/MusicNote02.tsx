import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MusicNote02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.5 4.517a2 2 0 0 1 2.788-1.838l2.575 1.103A6 6 0 0 1 19.5 9.297v1.531a7 7 0 0 1-1.622 4.48l-1.11 1.333-1.537-1.282 1.11-1.33a5 5 0 0 0 1.159-3.2V9.296a4 4 0 0 0-2.425-3.677L12.5 4.517V18a4 4 0 1 1-2-3.464z"/></svg>
    );
  },
);

MusicNote02.displayName = 'MusicNote02';
