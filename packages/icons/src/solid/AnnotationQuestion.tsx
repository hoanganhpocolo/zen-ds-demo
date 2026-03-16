import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AnnotationQuestion = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 2.5a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6.771l-2.76 1.616C2.677 22.896 1 21.935 1 20.39V6.5a4 4 0 0 1 4-4zM12 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-7a3 3 0 0 0-3 3h2a1 1 0 1 1 1.248.969c-.56.143-1.248.66-1.248 1.531v.5h2v-.172A3 3 0 0 0 12 7"/></svg>
    );
  },
);

AnnotationQuestion.displayName = 'AnnotationQuestion';
