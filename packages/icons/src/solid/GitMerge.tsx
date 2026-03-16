import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GitMerge = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6 2a4 4 0 0 1 1.047 7.861 8 8 0 0 0 7.092 7.092A4.001 4.001 0 0 1 22 18a4 4 0 0 1-7.884.96A10 10 0 0 1 7 15v7H5V9.874A4.002 4.002 0 0 1 6 2m12 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></svg>
    );
  },
);

GitMerge.displayName = 'GitMerge';
