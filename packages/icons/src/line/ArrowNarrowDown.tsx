import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowNarrowDown = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m13 18.581 5.584-5.599L20 14.395l-7.292 7.311a1 1 0 0 1-1.416 0L4 14.395l1.416-1.413 5.584 5.6V2h2z"/></svg>
    );
  },
);

ArrowNarrowDown.displayName = 'ArrowNarrowDown';
