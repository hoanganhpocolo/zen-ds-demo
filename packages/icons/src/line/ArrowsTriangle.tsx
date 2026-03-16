import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowsTriangle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22.335 17.218c.803 1.333-.157 3.032-1.713 3.032H14.03l1.262 1.64-.792.61-.793.61-2.5-3.25a1 1 0 0 1 0-1.22l2.5-3.25.793.61.792.61-1.262 1.64h6.592l-1.684-2.797 1.713-1.031zm-15.4-7.584a1 1 0 0 1 .735.491L9.618 13.5l-1.732 1-1.102-1.907-3.407 5.657h3.427v2H3.377c-1.556 0-2.516-1.7-1.713-3.032l3.37-5.593H3v-2h3.804zm3.351-6.729c.778-1.29 2.65-1.29 3.427 0l3.4 5.643.992-1.993 1.79.89-1.804 3.625a1 1 0 0 1-.895.555H13v-2h2.426L12 3.938l-1.742 2.89-1.713-1.031z"/></svg>
    );
  },
);

ArrowsTriangle.displayName = 'ArrowsTriangle';
