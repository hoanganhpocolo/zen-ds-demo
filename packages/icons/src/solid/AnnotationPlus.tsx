import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AnnotationPlus = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 2.5a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6.771l-2.76 1.616C2.677 22.896 1 21.935 1 20.39V6.5a4 4 0 0 1 4-4zm-8 8H8.5v2H11V15h2v-2.5h2.5v-2H13V8h-2z"/></svg>
    );
  },
);

AnnotationPlus.displayName = 'AnnotationPlus';
