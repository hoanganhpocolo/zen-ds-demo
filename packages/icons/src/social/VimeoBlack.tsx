import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const VimeoBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M20.592 8.398q-.115 2.375-3.508 6.5-3.508 4.31-5.936 4.31-1.503 0-2.544-2.625l-1.388-4.812q-.772-2.623-1.657-2.624-.193 0-1.35.766L3.4 8.927Q4.674 7.87 5.91 6.811q1.698-1.386 2.549-1.46 2.007-.181 2.471 2.595.502 2.996.696 3.726.579 2.485 1.274 2.485.54 0 1.622-1.612 1.08-1.612 1.158-2.455.155-1.393-1.158-1.393-.619.001-1.273.266 1.268-3.925 4.844-3.815 2.65.073 2.499 3.25"/></svg>
    );
  },
);

VimeoBlack.displayName = 'VimeoBlack';
