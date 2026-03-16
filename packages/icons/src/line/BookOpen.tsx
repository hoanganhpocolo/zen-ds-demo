import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BookOpen = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19.095 2.001C20.8 1.886 22 3.316 22 4.841v12.063c0 1.2-1.014 2.044-2.09 2.048-3.373.015-6.007 1.653-7.061 2.62-.25.228-.557.312-.849.283a1.08 1.08 0 0 1-.849-.284c-1.054-.966-3.688-2.604-7.061-2.619C3.014 18.948 2 18.104 2 16.904V4.84c0-1.524 1.2-2.954 2.905-2.839 2.077.141 5.003.751 7.095 2.583 2.092-1.832 5.018-2.442 7.095-2.583M4.77 3.997C4.4 3.972 4 4.284 4 4.84v12.066q0 .003.012.014a.13.13 0 0 0 .087.032c2.873.013 5.282 1.012 6.901 2.025V6.389C9.416 4.77 6.833 4.137 4.77 3.997m14.459 0c-2.063.14-4.645.773-6.23 2.392v12.588c1.619-1.012 4.028-2.012 6.901-2.025a.13.13 0 0 0 .087-.032l.012-.015V4.84c0-.556-.401-.868-.77-.843"/></svg>
    );
  },
);

BookOpen.displayName = 'BookOpen';
