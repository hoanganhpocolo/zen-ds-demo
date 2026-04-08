import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Car02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14.194 3.013a4 4 0 0 1 3.455 2.653L18.83 9H20a4 4 0 0 1 4 4v4a2 2 0 0 1-2 2h-1.036a3.5 3.5 0 0 1-6.928 0H9.964a3.5 3.5 0 0 1-6.928 0H3a3 3 0 0 1-3-3V7a4 4 0 0 1 4-4h9.879zM6.5 17A1.5 1.5 0 0 0 5 18.5 1.5 1.5 0 1 0 6.5 17m11 0a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 1 0 1.5-1.5M4 5a2 2 0 0 0-2 2v2h3V5zm3 4h9.708l-.943-2.666a2 2 0 0 0-1.729-1.328L13.88 5H7z"/></svg>
    );
  },
);

Car02.displayName = 'Car02';
