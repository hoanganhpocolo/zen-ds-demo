import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ChevronUpDouble = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.257 12.448a1.074 1.074 0 0 1 1.486 0L18 17.556 16.514 19 12 14.615 7.486 19 6 17.556zM12 5c.279 0 .546.107.743.299L18 10.406l-1.486 1.445L12 7.466 7.486 11.85 6 10.406 11.257 5.3c.197-.193.463-.3.743-.3"/></svg>
    );
  },
);

ChevronUpDouble.displayName = 'ChevronUpDouble';
