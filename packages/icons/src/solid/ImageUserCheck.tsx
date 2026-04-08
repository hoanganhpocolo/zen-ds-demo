import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ImageUserCheck = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m24 17.414-4.493 4.493a1 1 0 0 1-1.414 0l-2.8-2.8 1.414-1.414 2.093 2.093L22.586 16zM18 2a4 4 0 0 1 4 4v6h-3a6.99 6.99 0 0 0-5.743 3H10a5 5 0 0 0-5 5h7v2H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-6 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/></svg>
    );
  },
);

ImageUserCheck.displayName = 'ImageUserCheck';
