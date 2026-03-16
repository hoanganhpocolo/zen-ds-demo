import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Bell01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1a8 8 0 0 1 8 8v4.196l1.796 2.695C22.682 17.22 21.729 19 20.132 19H16a4 4 0 0 1-8 0H3.868c-1.597 0-2.55-1.78-1.664-3.11L4 13.197V9a8 8 0 0 1 8-8m-2 18a2 2 0 0 0 4 0z"/></svg>
    );
  },
);

Bell01.displayName = 'Bell01';
