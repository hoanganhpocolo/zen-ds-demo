import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MoonStar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.518 2.005a1 1 0 0 1 .588 1.864 6.617 6.617 0 1 0 9.025 9.024 1 1 0 0 1 1.864.59C21.488 18.823 16.994 23 11.521 23 5.712 23 1 18.29 1 12.479 1 7.006 5.177 2.51 10.518 2.005M17.5 1a1 1 0 0 1 .97.758l.318 1.271a3 3 0 0 0 2.183 2.183l1.271.318a1 1 0 0 1 0 1.94l-1.271.318a3 3 0 0 0-2.183 2.183l-.318 1.271a1 1 0 0 1-1.94 0l-.318-1.271a3 3 0 0 0-2.183-2.183l-1.271-.318a1 1 0 0 1 0-1.94l1.271-.318a3 3 0 0 0 2.183-2.183l.318-1.271A1 1 0 0 1 17.5 1m0 4.017c-.384.593-.89 1.1-1.483 1.483.593.384 1.1.89 1.483 1.483.384-.593.89-1.1 1.483-1.483A5 5 0 0 1 17.5 5.017"/></svg>
    );
  },
);

MoonStar.displayName = 'MoonStar';
