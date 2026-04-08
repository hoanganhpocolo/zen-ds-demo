import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Wallet04 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17.206 3.005A4 4 0 0 1 21 7v1.836a3.501 3.501 0 0 1 0 6.327V17a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12zM5 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12l.204-.01A2 2 0 0 0 19 17v-1.5h-2.5a3.5 3.5 0 1 1 0-7H19V7a2 2 0 0 0-1.796-1.99L17 5zm11.5 5.5a1.5 1.5 0 0 0 0 3h3q.151 0 .3-.031l.027-.006a1.5 1.5 0 0 0-.017-2.932h-.01a1.5 1.5 0 0 0-.3-.031z"/></svg>
    );
  },
);

Wallet04.displayName = 'Wallet04';
