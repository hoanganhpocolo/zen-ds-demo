import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Drink = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 3a7 7 0 0 1 6.928 6H22v2h-2.078l-.687 8.328A4 4 0 0 1 15.25 23H8.761a4 4 0 0 1-3.987-3.668L4.08 11H2V9h2.072A7 7 0 0 1 11 3V1h2zM6.768 19.166A2 2 0 0 0 8.76 21h6.488a2 2 0 0 0 1.993-1.836L17.42 17H6.587zM6.42 15h11.165l.33-4H6.086zM11 5a5 5 0 0 0-4.9 4h11.8A5 5 0 0 0 13 5z"/></svg>
    );
  },
);

Drink.displayName = 'Drink';
