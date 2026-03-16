import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BookClosed = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 1a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zM7 17a2 2 0 1 0 0 4h12v-4zM7 3a2 2 0 0 0-2 2v10.536A4 4 0 0 1 7 15h12V3z"/></svg>
    );
  },
);

BookClosed.displayName = 'BookClosed';
