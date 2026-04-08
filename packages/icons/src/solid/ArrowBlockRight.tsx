import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowBlockRight = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11 6.02c0-1.655 1.896-2.595 3.212-1.592l6.806 5.185a3 3 0 0 1 0 4.774l-6.806 5.185C12.896 20.575 11 19.636 11 17.981V16.5H5a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h6z"/></svg>
    );
  },
);

ArrowBlockRight.displayName = 'ArrowBlockRight';
