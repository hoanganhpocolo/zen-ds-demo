import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AnnotationX = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 2.5a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6.771l-2.76 1.616C2.677 22.896 1 21.935 1 20.39V6.5a4 4 0 0 1 4-4zm-6.993 7.793L9.964 8.25 8.55 9.664l2.043 2.043L8.55 13.75l1.414 1.414 2.043-2.043 2.043 2.043 1.414-1.414-2.043-2.043 2.043-2.043L14.05 8.25z"/></svg>
    );
  },
);

AnnotationX.displayName = 'AnnotationX';
