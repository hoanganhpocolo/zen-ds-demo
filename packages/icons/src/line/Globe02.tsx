import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Globe02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c.948 0 1.87.12 2.749.347C19.493 2.567 23 6.873 23 12c0 6.075-4.925 11-11 11S1 18.075 1 12c0-1.72.395-3.349 1.1-4.8A11 11 0 0 1 12 1m2.994 6.106a1 1 0 0 1-.588.808L10.144 9.81 8.8 11.599a1 1 0 0 1-1.359.231L3.46 9.15A9 9 0 0 0 3 12a9 9 0 1 0 18 0 9 9 0 0 0-5.637-8.35zm-3.889 5.447a1 1 0 0 1 1.266-.482l5 2a1 1 0 0 1 .461 1.484l-2 3A1 1 0 0 1 15 19h-3a1 1 0 0 1-.948-.684l-1-3a1 1 0 0 1 .053-.763zm.975 2.524L12.72 17h1.745l1.02-1.53-3.002-1.2zM12 3a9 9 0 0 0-7.686 4.314L7.77 9.64 8.7 8.4a1 1 0 0 1 .394-.314l3.972-1.766.343-3.21A9 9 0 0 0 12 3"/></svg>
    );
  },
);

Globe02.displayName = 'Globe02';
