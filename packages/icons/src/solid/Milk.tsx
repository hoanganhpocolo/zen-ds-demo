import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Milk = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14 1a2 2 0 0 1 2 2v2.857l4.058 3.823A3 3 0 0 1 21 11.863V20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8.115a3 3 0 0 1 .982-2.22L8.5 5.557V3a2 2 0 0 1 2-2zm2 19c0 .25-.035.494-.093.727l-.014.056q-.03.11-.067.217H18a1 1 0 0 0 1-1v-8h-3zm-5.757-6.636a.94.94 0 0 0-1.486 0l-1.229 1.583-.134.192a2.52 2.52 0 0 0 .338 3.126c.977.98 2.56.98 3.536 0 .892-.896.98-2.319.204-3.318zm4.775-3.699q.172.156.315.335h2.147l-3.183-3h-2.21zM10.5 5H14V3h-3.5z"/></svg>
    );
  },
);

Milk.displayName = 'Milk';
