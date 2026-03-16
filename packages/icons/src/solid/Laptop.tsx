import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Laptop = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 3a4 4 0 0 1 4 4v9.17c.59.28 1 .882 1 1.58A3.25 3.25 0 0 1 19.75 21H4.25A3.25 3.25 0 0 1 1 17.75c0-.698.41-1.3 1-1.58V7a4 4 0 0 1 4-4zM6 5a2 2 0 0 0-2 2v9h4.293c.718 0 1.406.285 1.914.793a.7.7 0 0 0 .5.207h2.586a.7.7 0 0 0 .5-.207A2.7 2.7 0 0 1 15.707 16H20V7a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

Laptop.displayName = 'Laptop';
