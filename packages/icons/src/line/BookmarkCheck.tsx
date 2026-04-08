import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BookmarkCheck = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m16.707 9.414-4.5 4.5a1 1 0 0 1-1.414 0l-3-3L9.207 9.5l2.293 2.293L15.293 8z"/><path fill="currentColor" fillRule="evenodd" d="M17 1a4 4 0 0 1 4 4v15.66c0 1.872-1.98 3.08-3.645 2.223L12 20.125l-5.355 2.758C4.98 23.74 3 22.532 3 20.66V5a4 4 0 0 1 4-4zM7 3a2 2 0 0 0-2 2v15.66a.5.5 0 0 0 .729.445l5.355-2.758a2 2 0 0 1 1.832 0l5.355 2.758A.5.5 0 0 0 19 20.66V5a2 2 0 0 0-2-2z" clipRule="evenodd"/></svg>
    );
  },
);

BookmarkCheck.displayName = 'BookmarkCheck';
