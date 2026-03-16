import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Running = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.133 1.385a1.55 1.55 0 0 1 1.99.469 10.6 10.6 0 0 0 5.266 3.889l.562.187c.54.18.945.626 1.076 1.174l.022.111 1.304 7.828A4.25 4.25 0 0 1 23 19.25v2.25a1.5 1.5 0 0 1-1.5 1.5h-20v-2h10.014l-10.12-9.715a2 2 0 0 1-.311-2.503l1.955-3.13c.15-.24.35-.446.586-.603L9 1.464zM5.57 6.155l5.138 5.138-1.414 1.414L4.18 7.595 2.778 9.841l11.624 11.16H21v-1.75A2.25 2.25 0 0 0 18.75 17a1.296 1.296 0 0 1-1.278-1.083l-.247-1.48-1.967.528-.517-1.931 2.153-.578-.27-1.626-2.365.635-.518-1.931 2.553-.685-.182-1.092-.354-.118a12.6 12.6 0 0 1-6.003-4.276z"/></svg>
    );
  },
);

Running.displayName = 'Running';
