import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const NavigationPointer02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.21 3.342c.737-1.474 2.841-1.474 3.579 0L21.717 19.2c.823 1.645-.823 3.434-2.531 2.751l-7.187-2.874-7.186 2.874c-1.707.683-3.354-1.106-2.531-2.75zM4.07 20.095l7.186-2.875a2 2 0 0 1 1.487 0l7.186 2.875L12 4.236z"/></svg>
    );
  },
);

NavigationPointer02.displayName = 'NavigationPointer02';
