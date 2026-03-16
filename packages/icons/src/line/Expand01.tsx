import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Expand01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4 13.296v5.29l5-5L10.414 15l-5 5h5.29v2H3a1 1 0 0 1-1-1v-7.704zM21 2a1 1 0 0 1 1 1v8.296h-2V5.414l-5 5L13.586 9l5-5h-5.882V2z"/></svg>
    );
  },
);

Expand01.displayName = 'Expand01';
