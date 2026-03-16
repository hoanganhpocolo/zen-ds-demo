import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GitBranch02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7 14.126a4.01 4.01 0 0 1 2.861 2.827 8 8 0 0 0 7.092-7.092A4.002 4.002 0 0 1 18 2a4 4 0 0 1 .96 7.884 10 10 0 0 1-9.076 9.077A4.002 4.002 0 0 1 2 18a4 4 0 0 1 3-3.874V2h2zM6 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2M18 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></svg>
    );
  },
);

GitBranch02.displayName = 'GitBranch02';
