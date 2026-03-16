import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowCircleUpRight = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M9.172 9.465h3.95l-5.364 5.363 1.414 1.415 5.364-5.364v3.95h2V8.464a1 1 0 0 0-1-1H9.172z"/></svg>
    );
  },
);

ArrowCircleUpRight.displayName = 'ArrowCircleUpRight';
