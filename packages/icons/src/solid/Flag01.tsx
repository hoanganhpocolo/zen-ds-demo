import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Flag01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M5.251 1.329a11 11 0 0 1 5.503.043l2.643.704a9 9 0 0 0 4.271.09l2.115-.47A1 1 0 0 1 21 2.673v12a1 1 0 0 1-.783.975l-2.114.47a11 11 0 0 1-5.221-.11l-2.644-.704a9 9 0 0 0-4.502-.036L5 15.453V23H3V2.673a1 1 0 0 1 .758-.971z"/></svg>
    );
  },
);

Flag01.displayName = 'Flag01';
