import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Scale03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9 12a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3zm9-10a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-3v-2h3a2 2 0 0 0 2-2V6c0-.179-.026-.352-.07-.517L15.414 10H18v2h-5a1 1 0 0 1-1-1V6h2v2.585l4.516-4.516A2 2 0 0 0 18 4H6a2 2 0 0 0-2 2v3H2V6a4 4 0 0 1 4-4z"/></svg>
    );
  },
);

Scale03.displayName = 'Scale03';
