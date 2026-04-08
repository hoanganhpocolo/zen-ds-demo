import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GitCommit = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 7a5 5 0 0 1 4.9 4H23v2h-6.1a5.002 5.002 0 0 1-9.8 0H1v-2h6.1A5 5 0 0 1 12 7m0 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></svg>
    );
  },
);

GitCommit.displayName = 'GitCommit';
