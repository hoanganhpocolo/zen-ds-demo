import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CalendarHeart = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9 3h6V1h2v2h1a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h1V1h2zm-5 7v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8zm8 1.57a2.683 2.683 0 0 1 3.588.253c.636.657.925 1.442.912 2.25-.012.778-.302 1.513-.7 2.14-.785 1.237-2.14 2.285-3.484 2.733a1 1 0 0 1-.632 0c-1.343-.448-2.699-1.497-3.484-2.733-.397-.627-.688-1.362-.7-2.14-.013-.808.276-1.593.912-2.25A2.683 2.683 0 0 1 12 11.57m2.151 1.645a.69.69 0 0 0-1.003 0L12 14.4l-1.148-1.185a.69.69 0 0 0-1.003 0c-.267.275-.353.549-.349.826.005.306.125.684.389 1.1.476.75 1.3 1.429 2.111 1.785.811-.356 1.635-1.035 2.111-1.785.264-.417.384-.794.389-1.1.004-.277-.082-.55-.349-.826M6 5a2 2 0 0 0-2 2v1h16V7a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

CalendarHeart.displayName = 'CalendarHeart';
