import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const IcStars02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 11a1 1 0 0 1 .97.758l.127.507a5 5 0 0 0 3.638 3.638l.507.127a1 1 0 0 1 0 1.94l-.507.127a5 5 0 0 0-3.638 3.638l-.127.507a1 1 0 0 1-1.94 0l-.127-.507a5 5 0 0 0-3.638-3.638l-.507-.127a1 1 0 0 1 0-1.94l.507-.127a5 5 0 0 0 3.638-3.638l.127-.507A1 1 0 0 1 17 11M7 18h2v2H7v2H5v-2H3v-2h2v-2h2zm10-3.256A7 7 0 0 1 14.744 17 7 7 0 0 1 17 19.256 7 7 0 0 1 19.256 17 7 7 0 0 1 17 14.744M7 1a1 1 0 0 1 .97.758l.127.507a5 5 0 0 0 3.638 3.638l.507.127a1 1 0 0 1 0 1.94l-.507.127a5 5 0 0 0-3.638 3.638l-.127.507a1 1 0 0 1-1.94 0l-.127-.507a5 5 0 0 0-3.638-3.638l-.507-.127a1 1 0 0 1 0-1.94l.507-.127a5 5 0 0 0 3.638-3.638l.127-.507A1 1 0 0 1 7 1m0 3.744A7 7 0 0 1 4.744 7 7 7 0 0 1 7 9.256 7 7 0 0 1 9.256 7 7 7 0 0 1 7 4.744M20 5h2v2h-2v2h-2V7h-2V5h2V3h2z"/></svg>
    );
  },
);

IcStars02.displayName = 'IcStars02';
