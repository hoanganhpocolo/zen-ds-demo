import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MusicNote01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17.507 2.402A3 3 0 0 1 21 5.362V16l-.005.206A4 4 0 1 1 19 12.536V5.363a1 1 0 0 0-1.164-.986l-8 1.333A1 1 0 0 0 9 6.695V18l-.005.206A4 4 0 1 1 7 14.536v-7.84a3 3 0 0 1 2.507-2.96zM5 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4m12-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></svg>
    );
  },
);

MusicNote01.displayName = 'MusicNote01';
