import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LockKeyholeSquare = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-6 5a3.5 3.5 0 0 0-1.363 6.724L9.36 16.276a.5.5 0 0 0 .45.724h4.382a.5.5 0 0 0 .448-.724l-1.277-2.552A3.5 3.5 0 0 0 12 7"/></svg>
    );
  },
);

LockKeyholeSquare.displayName = 'LockKeyholeSquare';
