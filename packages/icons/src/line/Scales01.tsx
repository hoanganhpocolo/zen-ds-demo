import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Scales01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 2c1.2 0 2.23.705 2.71 1.722l7.14-.72.2 1.991L20 5.2v2.468l2.8 3.733a1 1 0 0 1 .2.6v3a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3a1 1 0 0 1 .2-.6L18 7.667V5.4l-3.089.312A3 3 0 0 1 13 7.825V20h5v2H6v-2h5V7.825a3 3 0 0 1-1.712-1.548L6 6.608v2.059L8.8 12.4a1 1 0 0 1 .2.6v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a1 1 0 0 1 .2-.6L4 8.667V6.811l-1.85.186-.2-1.99 7.138-.72A3 3 0 0 1 12 2M3 13.332V16h4v-2.668l-2-2.666zm14-1V15h4v-2.668l-2-2.666zM12 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></svg>
    );
  },
);

Scales01.displayName = 'Scales01';
