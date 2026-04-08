import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CloudLightning = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m13.58 11-2.04 4.594H14A1 1 0 0 1 14.914 17l-2.667 6-1.827-.812 2.04-4.594H10a1 1 0 0 1-.914-1.407l2.667-6zM12 2a7 7 0 0 1 6.967 6.33A6.002 6.002 0 0 1 17 20v-2a4 4 0 0 0 .799-7.92 1 1 0 0 1-.801-1.04L17 9.01V9A5 5 0 0 0 7 9l.002.083c.008.482-.33.901-.802.997A4.001 4.001 0 0 0 7 18v2A6 6 0 0 1 5.032 8.33 7 7 0 0 1 12 2"/></svg>
    );
  },
);

CloudLightning.displayName = 'CloudLightning';
