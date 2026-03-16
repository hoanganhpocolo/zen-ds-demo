import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Lightbulb = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1a9 9 0 0 1 9 9 8.99 8.99 0 0 1-4 7.48V19a2 2 0 0 1-2 2h-1v2h-4v-2H9a2 2 0 0 1-2-2v-1.52A8.99 8.99 0 0 1 3 10a9 9 0 0 1 9-9m0 2a7 7 0 0 0-3.499 13.061L9 16.35V19h6v-2.65l.499-.289A7 7 0 0 0 12 3m3 10h-2v4h-2v-4H9v-2h6z"/></svg>
    );
  },
);

Lightbulb.displayName = 'Lightbulb';
