import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Sliders02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M5 10a3 3 0 0 1 1 5.83V22H4v-6.17A3.001 3.001 0 0 1 5 10m8 12h-2v-8h2zm6-10a3 3 0 0 1 1 5.83V22h-2v-4.17A3.001 3.001 0 0 1 19 12m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8-5.83a3.001 3.001 0 1 1-2 0V2h2zM12 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8 2h-2V2h2zM6 8H4V2h2z"/></svg>
    );
  },
);

Sliders02.displayName = 'Sliders02';
