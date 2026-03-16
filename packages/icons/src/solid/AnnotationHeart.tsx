import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AnnotationHeart = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 2.5a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6.771l-2.76 1.616C2.677 22.896 1 21.935 1 20.39V6.5a4 4 0 0 1 4-4zm-3.796 6.215C14.333 7.822 12.938 8.222 12 9c-.938-.778-2.333-1.178-3.204-.285-.559.572-.807 1.25-.796 1.942.01.672.263 1.315.618 1.87.702 1.097 1.918 2.033 3.124 2.432a.82.82 0 0 0 .516 0c1.206-.399 2.422-1.335 3.124-2.432.355-.555.607-1.198.618-1.87.01-.693-.237-1.37-.796-1.942"/></svg>
    );
  },
);

AnnotationHeart.displayName = 'AnnotationHeart';
