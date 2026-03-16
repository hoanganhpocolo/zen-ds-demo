import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LockKeyholeCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 6a3.5 3.5 0 0 0-1.363 6.724L9.36 16.276a.5.5 0 0 0 .45.724h4.382a.5.5 0 0 0 .448-.724l-1.277-2.552A3.5 3.5 0 0 0 12 7"/></svg>
    );
  },
);

LockKeyholeCircle.displayName = 'LockKeyholeCircle';
