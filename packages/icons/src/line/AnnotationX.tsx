import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AnnotationX = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 2.5a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6.771l-2.76 1.616C2.677 22.896 1 21.935 1 20.39V6.5a4 4 0 0 1 4-4zm-14 2a2 2 0 0 0-2 2v13.89l2.995-1.753.118-.059A1 1 0 0 1 6.5 18.5H19a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2zm10.464 5.164-2.043 2.043 2.043 2.043-1.414 1.414-2.043-2.043-2.043 2.043L8.55 13.75l2.043-2.043L8.55 9.664 9.964 8.25l2.043 2.043L14.05 8.25z"/></svg>
    );
  },
);

AnnotationX.displayName = 'AnnotationX';
