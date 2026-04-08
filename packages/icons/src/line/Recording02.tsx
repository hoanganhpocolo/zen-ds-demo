import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Recording02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17.5 22h-2V2h2zM13 18h-2V6h2zm-9-4H2v-4h2zm18 0h-2v-4h2zm-13.5-.5h-2v-3h2z"/></svg>
    );
  },
);

Recording02.displayName = 'Recording02';
