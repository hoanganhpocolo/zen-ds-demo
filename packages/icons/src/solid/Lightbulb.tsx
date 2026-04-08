import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Lightbulb = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14 23h-4v-2H9a2 2 0 0 1-2-2v-1.52A8.99 8.99 0 0 1 3 10a9 9 0 0 1 18 0 8.99 8.99 0 0 1-4 7.48V19a2 2 0 0 1-2 2h-1zM9 13h2v4h2v-4h2v-2H9z"/></svg>
    );
  },
);

Lightbulb.displayName = 'Lightbulb';
