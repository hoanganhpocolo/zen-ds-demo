import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Dataflow03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6 1a2 2 0 0 1 2 2h10a5 5 0 0 1 0 10h-3a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2H6a3 3 0 1 0 0 6h10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2H6a5 5 0 0 1 0-10h3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h3a3 3 0 1 0 0-6H8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm5 12h2v-2h-2z"/></svg>
    );
  },
);

Dataflow03.displayName = 'Dataflow03';
