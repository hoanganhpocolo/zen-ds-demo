import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Dataflow03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M20 17a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zM7 13H6a3 3 0 1 0 0 6h8v2H6a5 5 0 0 1 0-10h1zm11 8h2v-2h-2zM13 9a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zm-2 4h2v-2h-2zm7-10a5 5 0 0 1 0 10h-1v-2h1a3 3 0 1 0 0-6h-8V3zM6 1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM4 5h2V3H4z"/></svg>
    );
  },
);

Dataflow03.displayName = 'Dataflow03';
