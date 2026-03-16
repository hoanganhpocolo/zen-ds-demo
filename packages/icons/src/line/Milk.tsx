import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Milk = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14 1a2 2 0 0 1 2 2v2.857l4.058 3.823A3 3 0 0 1 21 11.863V20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8.115a3 3 0 0 1 .982-2.22L8.5 5.557V3a2 2 0 0 1 2-2zM5.327 11.145a1 1 0 0 0-.327.74V20a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-8.115a1 1 0 0 0-.327-.74L9.5 7.352zM16 20c0 .25-.035.494-.093.727l-.014.056q-.03.11-.067.217H18a1 1 0 0 0 1-1v-8h-3zm-7.243-6.636a.94.94 0 0 1 1.486 0l1.229 1.583c.775 1 .688 2.422-.204 3.318-.977.98-2.56.98-3.536 0a2.52 2.52 0 0 1-.338-3.126l.134-.192zm6.26-3.699a3 3 0 0 1 .316.335h2.147l-3.183-3h-2.21zM10.5 5H14V3h-3.5z"/></svg>
    );
  },
);

Milk.displayName = 'Milk';
