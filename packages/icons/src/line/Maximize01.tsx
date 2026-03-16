import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Maximize01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.5 14.914 5.414 20h4.172v2H3a1 1 0 0 1-1-1v-6.586h2v4.172L9.086 13.5zM21 2a1 1 0 0 1 1 1v6.586h-2V5.414L14.914 10.5 13.5 9.086 18.586 4h-4.172V2z"/></svg>
    );
  },
);

Maximize01.displayName = 'Maximize01';
