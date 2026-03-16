import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Perspective01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7 2a1 1 0 0 1 1 1v1.639l8 1.2V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v4h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-.78l-8 1.6V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1V8H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM4 20h2v-2H4zm14-2h2v-2h-2zM8 7a1 1 0 0 1-1 1H6v8h1a1 1 0 0 1 1 1v.78l8-1.6V15a1 1 0 0 1 1-1h1v-4h-1a1 1 0 0 1-1-1V7.861l-8-1.2zm10 1h2V6h-2zM4 4v2h2V4z"/></svg>
    );
  },
);

Perspective01.displayName = 'Perspective01';
