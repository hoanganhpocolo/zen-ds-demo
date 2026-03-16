import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AlignRight01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M23 3v18h-2V3zm-5.293 8.293a1 1 0 0 1 0 1.414l-6.5 6.5-1.414-1.414L14.586 13H1v-2h13.586L9.793 6.207l1.414-1.414z"/></svg>
    );
  },
);

AlignRight01.displayName = 'AlignRight01';
