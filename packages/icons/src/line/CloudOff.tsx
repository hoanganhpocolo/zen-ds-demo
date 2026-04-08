import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CloudOff = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m21.9 21.213-1.415 1.414-1.853-1.854A6 6 0 0 1 17 21H7A6 6 0 0 1 5.032 9.33a7 7 0 0 1 .4-1.756L2.688 4.828 4.1 3.414zM7.062 9.205A5 5 0 0 0 7 10l.002.083c.008.482-.33.901-.802.997A4.002 4.002 0 0 0 7 19h9.858zM12 3a7 7 0 0 1 6.967 6.33 6.002 6.002 0 0 1 2.965 9.086l-1.45-1.45a4.002 4.002 0 0 0-2.684-5.887 1 1 0 0 1-.8-1.04l.002-.03V10a5 5 0 0 0-7.696-4.21L7.866 4.351A6.97 6.97 0 0 1 12 3"/></svg>
    );
  },
);

CloudOff.displayName = 'CloudOff';
