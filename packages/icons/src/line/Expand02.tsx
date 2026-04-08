import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Expand02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21 2a1 1 0 0 1 1 1v8.296h-2V5.414L5.414 20h5.29v2H3a1 1 0 0 1-1-1v-7.704h2v5.29L18.586 4h-5.882V2z"/></svg>
    );
  },
);

Expand02.displayName = 'Expand02';
