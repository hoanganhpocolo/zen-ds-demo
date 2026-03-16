import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Droplets01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16 2a1 1 0 0 1 .8.4l.002.002.004.006.014.019.053.072.197.272a52 52 0 0 1 2.798 4.358c.765 1.338 1.54 2.854 2.127 4.369C22.577 13 23 14.571 23 16a7 7 0 0 1-14 0c0-1.428.423-3 1.005-4.502.586-1.515 1.362-3.031 2.127-4.37A52 52 0 0 1 15.127 2.5l.053-.072.014-.019.004-.006.001-.002c.189-.251.486-.4.801-.4M5 1a1 1 0 0 1 .81.415l2.101 2.91c1.46 1.755 1.452 4.103-.026 5.852C7.12 11.08 6.08 11.57 5 11.57s-2.122-.49-2.886-1.394C.637 8.428.63 6.08 2.09 4.324l2.1-2.909A1 1 0 0 1 5 1"/></svg>
    );
  },
);

Droplets01.displayName = 'Droplets01';
