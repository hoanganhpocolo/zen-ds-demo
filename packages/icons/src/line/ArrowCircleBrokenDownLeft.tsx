import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowCircleBrokenDownLeft = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4.222 4.221a10.99 10.99 0 0 1 9.333-3.111l-.282 1.98a9 9 0 1 0 7.637 7.638l1.98-.282a10.99 10.99 0 0 1-3.112 9.332c-4.296 4.296-11.26 4.296-15.556 0s-4.296-11.261 0-15.557m16.263.707-8.9 8.9h3.951v2H9.172a1 1 0 0 1-1-1V8.464h2v3.95l8.9-8.9z"/></svg>
    );
  },
);

ArrowCircleBrokenDownLeft.displayName = 'ArrowCircleBrokenDownLeft';
