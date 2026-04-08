import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CheckHeart = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m16.468 9.685-4.24 4.5a1.003 1.003 0 0 1-1.414.042l-2.76-2.604 1.372-1.455 2.033 1.918 3.553-3.772z"/><path fill="currentColor" fillRule="evenodd" d="M12.495 3.886c2.32-2.515 6.118-2.514 8.439 0 3.003 3.254 2.382 7.336.368 10.668-2.008 3.32-5.53 6.186-8.971 7.39a1 1 0 0 1-.661 0c-3.44-1.204-6.963-4.07-8.97-7.39C.684 11.222.063 7.14 3.066 3.886c2.32-2.514 6.118-2.515 8.439 0l.494.536zm6.969 1.356c-1.529-1.656-3.97-1.656-5.5 0l-1.229 1.333a1 1 0 0 1-1.47 0l-1.229-1.333c-1.528-1.656-3.97-1.656-5.499 0-2.158 2.34-1.895 5.351-.127 8.276 1.71 2.829 4.703 5.304 7.59 6.416 2.887-1.112 5.88-3.587 7.59-6.416 1.768-2.925 2.032-5.937-.126-8.276" clipRule="evenodd"/></svg>
    );
  },
);

CheckHeart.displayName = 'CheckHeart';
