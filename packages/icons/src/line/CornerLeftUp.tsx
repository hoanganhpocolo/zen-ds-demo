import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CornerLeftUp = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7.768 2a1 1 0 0 1 .726.313l5.042 5.319-1.452 1.376-3.316-3.5V14a5 5 0 0 0 5 5H21v2h-7.232a7 7 0 0 1-7-7V5.509L3.45 9.008 2 7.632l5.042-5.32A1 1 0 0 1 7.768 2"/></svg>
    );
  },
);

CornerLeftUp.displayName = 'CornerLeftUp';
