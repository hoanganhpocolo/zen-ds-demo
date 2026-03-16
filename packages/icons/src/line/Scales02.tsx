import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Scales02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 2c1.306 0 2.414.835 2.826 2H22v2h-2v2.667l2.8 3.733a1 1 0 0 1 .2.6v3a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3a1 1 0 0 1 .2-.6L18 8.667V6h-3.174A3 3 0 0 1 13 7.825V20h5v2H6v-2h5V7.825A3 3 0 0 1 9.174 6H6v2.667L8.8 12.4a1 1 0 0 1 .2.6v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a1 1 0 0 1 .2-.6L4 8.667V6H2V4h7.174c.412-1.165 1.52-2 2.826-2M3 13.332V16h4v-2.668l-2-2.666zm14 0V16h4v-2.668l-2-2.666zM12 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></svg>
    );
  },
);

Scales02.displayName = 'Scales02';
