import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowCircleBrokenUpRight = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4.221 4.222c4.296-4.296 11.261-4.296 15.557 0 4.296 4.295 4.296 11.26 0 15.556a10.99 10.99 0 0 1-9.332 3.112l.281-1.98a9 9 0 1 0-7.638-7.637l-1.979.281a10.99 10.99 0 0 1 3.111-9.333m10.607 3.95a1 1 0 0 1 1 1v6.364h-2v-3.95l-8.9 8.9-1.414-1.415 8.9-8.9h-3.95v-2z"/></svg>
    );
  },
);

ArrowCircleBrokenUpRight.displayName = 'ArrowCircleBrokenUpRight';
