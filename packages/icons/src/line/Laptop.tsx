import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Laptop = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 3a4 4 0 0 1 4 4v8.27c.597.346 1 .99 1 1.73a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4c0-.74.403-1.384 1-1.73V7a4 4 0 0 1 4-4zM3 17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2h-5.293a.7.7 0 0 0-.5.207 2.7 2.7 0 0 1-1.914.793h-2.586a2.7 2.7 0 0 1-1.914-.793.7.7 0 0 0-.5-.207zM6 5a2 2 0 0 0-2 2v8h4.293c.718 0 1.406.285 1.914.793a.7.7 0 0 0 .5.207h2.586a.7.7 0 0 0 .5-.207A2.7 2.7 0 0 1 15.707 15H20V7a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

Laptop.displayName = 'Laptop';
