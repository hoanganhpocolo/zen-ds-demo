import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Running = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.134 1.385a1.55 1.55 0 0 1 1.99.469 10.6 10.6 0 0 0 5.265 3.889l.562.187c.54.18.945.626 1.076 1.174l.022.111.186 1.115-4.494 1.205.518 1.931 4.306-1.154.27 1.625-4.094 1.098.518 1.931 3.907-1.048.187 1.125A4.25 4.25 0 0 1 23 19.251v2.25a1.5 1.5 0 0 1-1.5 1.5h-7.098l-.021-.002H1.5v-2h10.013l-10.12-9.714a2 2 0 0 1-.31-2.503L2.73 6.144l6.563 6.563 1.414-1.415-6.58-6.58L9 1.464z"/></svg>
    );
  },
);

Running.displayName = 'Running';
