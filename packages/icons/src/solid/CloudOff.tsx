import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CloudOff = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m21.9 21.213-1.415 1.414-1.853-1.854A6 6 0 0 1 17 21H7A6 6 0 0 1 5.032 9.33a7 7 0 0 1 .4-1.756L2.688 4.828 4.1 3.414zM12 3a7 7 0 0 1 6.967 6.33 6.002 6.002 0 0 1 2.964 9.086L7.866 4.352A6.97 6.97 0 0 1 12 3"/></svg>
    );
  },
);

CloudOff.displayName = 'CloudOff';
