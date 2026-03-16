import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SpacingHeight02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22 22H2v-2h20zM16 8h-3v8h3v2H8v-2h3V8H8V6h8zm6-4H2V2h20z"/></svg>
    );
  },
);

SpacingHeight02.displayName = 'SpacingHeight02';
