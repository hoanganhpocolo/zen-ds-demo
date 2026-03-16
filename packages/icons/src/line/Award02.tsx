import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Award02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17 1a3 3 0 0 1 3 3v2.37c0 .615-.19 1.216-.542 1.72l-3.247 4.637a6 6 0 1 1-8.423 0L4.542 8.09A3 3 0 0 1 4 6.37V4a3 3 0 0 1 3-3zm-5 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6.016 3.827Q6 3.911 6 4v2.37c0 .204.063.405.18.573l3.245 4.635c.45-.214.932-.373 1.435-.47zm7.105 7.278-.077-.013a6 6 0 0 1 1.53.486l3.245-4.635A1 1 0 0 0 18 6.369V4q-.001-.09-.017-.175zm-1.13-1.909L16.128 3H7.866z"/></svg>
    );
  },
);

Award02.displayName = 'Award02';
