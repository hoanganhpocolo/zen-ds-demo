import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BookmarkCheck = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M17 1a4 4 0 0 1 4 4v15.66c0 1.872-1.98 3.08-3.645 2.223L12 20.125l-5.355 2.758c-1.612.83-3.521-.278-3.64-2.049L3 20.66V5a4 4 0 0 1 4-4zm-5.5 10.793L9.207 9.5l-1.414 1.414 3 3a1 1 0 0 0 1.414 0l4.5-4.5L15.293 8z" clipRule="evenodd"/></svg>
    );
  },
);

BookmarkCheck.displayName = 'BookmarkCheck';
