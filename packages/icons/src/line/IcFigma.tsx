import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const IcFigma = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15.5 1C17.985 1 20 2.927 20 5.305c0 1.352-.652 2.558-1.67 3.347C19.347 9.442 20 10.648 20 12c0 2.377-2.015 4.305-4.5 4.305a4.63 4.63 0 0 1-2.5-.726v3.116C13 21.073 10.985 23 8.5 23S4 21.073 4 18.695c0-1.352.652-2.558 1.67-3.347C4.653 14.558 4 13.352 4 12s.652-2.559 1.67-3.348C4.653 7.863 4 6.657 4 5.305 4 2.927 6.015 1 8.5 1zm-7 15.305c-1.38 0-2.5 1.07-2.5 2.39s1.12 2.392 2.5 2.392 2.5-1.071 2.5-2.392v-2.39zm0-6.697C7.12 9.608 6 10.68 6 12s1.12 2.392 2.5 2.392H11V9.608zm7 0C14.12 9.608 13 10.68 13 12s1.12 2.392 2.5 2.392S18 13.32 18 12s-1.12-2.392-2.5-2.392m-7-6.695C7.12 2.913 6 3.984 6 5.305s1.12 2.39 2.5 2.39H11V2.913zM13 7.695h2.5c1.38 0 2.5-1.07 2.5-2.39s-1.12-2.392-2.5-2.392H13z"/></svg>
    );
  },
);

IcFigma.displayName = 'IcFigma';
