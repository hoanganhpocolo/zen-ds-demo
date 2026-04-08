import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ProductHunt = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#DA552F" d="M22.32 12c0 5.7-4.62 10.32-10.32 10.32S1.68 17.7 1.68 12 6.3 1.68 12 1.68 22.32 6.3 22.32 12"/><path fill="#fff" d="M13.376 12h-2.924V8.904h2.924a1.548 1.548 0 1 1 0 3.096m0-5.16H8.388v10.32h2.064v-3.096h2.924a3.612 3.612 0 0 0 0-7.224"/></svg>
    );
  },
);

ProductHunt.displayName = 'ProductHunt';
