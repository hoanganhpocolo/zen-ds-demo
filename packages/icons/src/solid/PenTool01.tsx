import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PenTool01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m4.531 2.052 10.23.682c.484.032.94.239 1.283.581l1.148 1.149a11 11 0 0 1 3.169 8.827l1.78 1.78a1 1 0 0 1 0 1.414l-5.656 5.656a1 1 0 0 1-1.414 0l-1.78-1.779a11 11 0 0 1-8.827-3.17l-1.149-1.148a2 2 0 0 1-.58-1.283l-.683-10.23a1 1 0 0 1 .29-.774l6.866 6.865a2.5 2.5 0 1 0 1.414-1.414L3.757 2.343l.08-.072c.194-.156.442-.236.694-.22"/></svg>
    );
  },
);

PenTool01.displayName = 'PenTool01';
