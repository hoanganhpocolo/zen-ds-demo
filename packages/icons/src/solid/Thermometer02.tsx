import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Thermometer02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7 1a3 3 0 0 1 3 3v10a5 5 0 1 1-6 0V4a3 3 0 0 1 3-3m0 15.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M22 12h-9v-2h9zm0-4h-9V6h9zm0-4h-9V2h9z"/></svg>
    );
  },
);

Thermometer02.displayName = 'Thermometer02';
