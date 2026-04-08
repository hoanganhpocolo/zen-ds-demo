import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Trophy02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18.759 2.007c.697.07 1.241.66 1.241 1.376V4h1a2 2 0 0 1 2 2v3.219a2 2 0 0 1-1.515 1.94l-1.934.483A8 8 0 0 1 13 16.936V20h4v2H7v-2h4v-3.064a8 8 0 0 1-6.552-5.294l-1.933-.483A2 2 0 0 1 1 9.22V6a2 2 0 0 1 2-2h1v-.617C4 2.619 4.62 2 5.383 2h13.234zM20 9q0 .238-.016.473L21 9.219V6h-1zM3 9.219l1.015.254A8 8 0 0 1 4 9V6H3z"/></svg>
    );
  },
);

Trophy02.displayName = 'Trophy02';
