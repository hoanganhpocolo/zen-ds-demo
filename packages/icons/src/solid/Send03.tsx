import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Send03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M2.049 4.814C1.366 3.107 3.155 1.461 4.8 2.283l15.858 7.929c1.474.737 1.474 2.84 0 3.578L4.8 21.719c-1.645.822-3.433-.825-2.751-2.532l2.474-6.186H15v-2H4.523z"/></svg>
    );
  },
);

Send03.displayName = 'Send03';
