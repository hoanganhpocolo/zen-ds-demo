import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Glasses02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7 6h-.459a2 2 0 0 0-1.973 1.67l-.45 2.696a5 5 0 0 1 6.54 2.817 5 5 0 0 1 2.683 0 5 5 0 0 1 6.54-2.817l-.45-2.695A2 2 0 0 0 17.46 6H17V4h.459a4 4 0 0 1 3.945 3.343l.832 4.993h-.006a5 5 0 1 1-9.227 2.839 3 3 0 0 0-1.01-.175 3 3 0 0 0-.998.175A4.998 4.998 0 0 1 1 15c0-.974.279-1.884.76-2.652l.836-5.005A4 4 0 0 1 6.54 4H7zm-1 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6m12 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/></svg>
    );
  },
);

Glasses02.displayName = 'Glasses02';
