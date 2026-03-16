import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ProductHuntBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.452 12h2.924a1.548 1.548 0 1 0 0-3.096h-2.924z"/><path fill="currentColor" fillRule="evenodd" d="M12 22.32c5.7 0 10.32-4.62 10.32-10.32S17.7 1.68 12 1.68 1.68 6.3 1.68 12 6.3 22.32 12 22.32M8.388 6.84h4.988a3.612 3.612 0 0 1 0 7.224h-2.924v3.096H8.388z" clipRule="evenodd"/></svg>
    );
  },
);

ProductHuntBlack.displayName = 'ProductHuntBlack';
