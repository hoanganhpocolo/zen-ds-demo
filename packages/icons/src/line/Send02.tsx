import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Send02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.21 3.342c.737-1.474 2.842-1.474 3.579 0L21.717 19.2c.823 1.645-.823 3.434-2.53 2.751L12 19.077l-7.187 2.874c-1.707.683-3.354-1.106-2.531-2.75zM4.07 20.095 11 17.322V6.235zM13 17.322l6.93 2.773L13 6.235z"/></svg>
    );
  },
);

Send02.displayName = 'Send02';
