import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ThermometerCold = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 1a3 3 0 0 1 3 3v10a5 5 0 1 1-6 0V4a3 3 0 0 1 3-3m-8 5.586 1.293-1.293 1.414 1.414L10 9.414V11h3v2h-3v7H8v-2.586l-1.293 1.293-1.414-1.414L8 14.586V13H5.914l-2.707 2.707-1.414-1.414L3.086 13H1v-2h2.086L1.793 9.707l1.414-1.414L5.914 11H8V9.414L5.293 6.707l1.414-1.414L8 6.586V4h2zm8 9.914a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>
    );
  },
);

ThermometerCold.displayName = 'ThermometerCold';
