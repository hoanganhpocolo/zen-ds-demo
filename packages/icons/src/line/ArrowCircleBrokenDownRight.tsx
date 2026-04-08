import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowCircleBrokenDownRight = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.446 1.11c3.305-.47 6.787.567 9.332 3.111 4.296 4.296 4.296 11.261 0 15.557s-11.26 4.296-15.557 0a10.99 10.99 0 0 1-3.111-9.332l1.98.281a9 9 0 1 0 7.638-7.638zm3.383 11.304v-3.95h2v6.365a1 1 0 0 1-1 1H8.464v-2h3.95l-8.9-8.9 1.414-1.415z"/></svg>
    );
  },
);

ArrowCircleBrokenDownRight.displayName = 'ArrowCircleBrokenDownRight';
