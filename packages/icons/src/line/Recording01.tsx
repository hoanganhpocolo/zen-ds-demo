import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Recording01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 22h-2V2h2zm-4.5-3.5h-2v-13h2zm9 0h-2v-13h2zM4 14H2v-4h2zm18 0h-2v-4h2z"/></svg>
    );
  },
);

Recording01.displayName = 'Recording01';
