import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Dataflow02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 1a3 3 0 1 1-2.83 4H13v6h3.17a3.001 3.001 0 1 1 0 2H13v2.2c0 .857 0 1.439.037 1.889.036.438.101.663.18.82a2 2 0 0 0 .875.873c.156.08.38.145.82.18.33.028.73.035 1.259.037A3.001 3.001 0 0 1 22 20a3 3 0 0 1-5.83.999 19 19 0 0 1-1.422-.043c-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C11 16.711 11 16.046 11 15.242V5H7.83a3.001 3.001 0 1 1 0-2h8.34A3 3 0 0 1 19 1m0 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-16a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></svg>
    );
  },
);

Dataflow02.displayName = 'Dataflow02';
