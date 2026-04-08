import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowCircleBrokenUpLeft = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4.222 4.222c4.295-4.296 11.26-4.296 15.556 0a10.99 10.99 0 0 1 3.113 9.333l-1.981-.281a9 9 0 1 0-7.637 7.637l.281 1.98a10.99 10.99 0 0 1-9.332-3.113c-4.296-4.295-4.296-11.26 0-15.556m11.314 3.95v2h-3.95l8.9 8.9-1.415 1.413-8.9-8.899v3.95h-2V9.172a1 1 0 0 1 1-1z"/></svg>
    );
  },
);

ArrowCircleBrokenUpLeft.displayName = 'ArrowCircleBrokenUpLeft';
