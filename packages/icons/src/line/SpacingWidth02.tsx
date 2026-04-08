import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SpacingWidth02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4 22H2V2h2zm18 0h-2V2h2zM8 11h8V8h2v8h-2v-3H8v3H6V8h2z"/></svg>
    );
  },
);

SpacingWidth02.displayName = 'SpacingWidth02';
