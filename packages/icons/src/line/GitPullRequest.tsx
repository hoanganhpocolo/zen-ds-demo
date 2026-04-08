import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GitPullRequest = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6 2a4 4 0 0 1 1 7.874V22H5V9.874A4.002 4.002 0 0 1 6 2m9 3a4 4 0 0 1 4 4v5.126A4.002 4.002 0 0 1 18 22a4 4 0 0 1-1-7.874V9a2 2 0 0 0-2-2h-3V5zm3 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4M6 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></svg>
    );
  },
);

GitPullRequest.displayName = 'GitPullRequest';
