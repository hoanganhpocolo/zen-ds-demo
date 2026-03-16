import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GitBranch01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4 7h10.126A4.002 4.002 0 0 1 22 8a4 4 0 0 1-7.874 1H4v4.2c0 .857 0 1.439.037 1.889.036.438.101.663.18.82a2 2 0 0 0 .875.873c.156.08.38.145.82.18C6.361 17 6.942 17 7.8 17h6.326A4.002 4.002 0 0 1 22 18a4 4 0 0 1-7.874 1H7.759c-.805 0-1.47 0-2.011-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C2 14.711 2 14.046 2 13.242V2h2zm14 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-10a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></svg>
    );
  },
);

GitBranch01.displayName = 'GitBranch01';
