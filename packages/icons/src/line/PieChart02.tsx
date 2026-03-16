import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PieChart02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.5 6a1 1 0 0 1 1 1v6.513H17a1 1 0 0 1 1 1c0 2.34-.856 4.383-2.488 6.018-3.138 3.143-8.31 3.306-11.635.367A8.5 8.5 0 0 1 1 14.513c0-2.35.952-4.48 2.49-6.02A8.47 8.47 0 0 1 9.5 6m-1 2.076a6.48 6.48 0 0 0-3.595 1.83A6.5 6.5 0 0 0 3 14.513c0 1.945.85 3.69 2.201 4.885 2.532 2.24 6.504 2.116 8.895-.279 1.02-1.023 1.637-2.225 1.835-3.606H9.5a1 1 0 0 1-1-1zM13 1c5.523 0 10 4.477 10 10a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m1 9h6.939A8.005 8.005 0 0 0 14 3.062z"/></svg>
    );
  },
);

PieChart02.displayName = 'PieChart02';
