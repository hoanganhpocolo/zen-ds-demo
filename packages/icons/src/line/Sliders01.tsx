import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Sliders01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8 15H6v7H4v-7H2v-2h6zm5 7h-2V12h2zm9-5h-2v5h-2v-5h-2v-2h6zm-2-5h-2V2h2zM6 10H4V2h2zm7-8v5h2v2H9V7h2V2z"/></svg>
    );
  },
);

Sliders01.displayName = 'Sliders01';
