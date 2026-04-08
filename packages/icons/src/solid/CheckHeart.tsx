import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CheckHeart = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M12.495 3.886c2.32-2.515 6.118-2.514 8.439 0 3.003 3.254 2.382 7.336.368 10.668-2.008 3.32-5.53 6.186-8.971 7.39a1 1 0 0 1-.661 0c-3.44-1.204-6.963-4.07-8.97-7.39C.684 11.222.063 7.14 3.066 3.886c2.32-2.514 6.118-2.515 8.439 0l.494.536zm-1.036 8.2-2.033-1.918-1.372 1.455 2.76 2.605a1 1 0 0 0 1.414-.043l4.24-4.5-1.456-1.37z" clipRule="evenodd"/></svg>
    );
  },
);

CheckHeart.displayName = 'CheckHeart';
