import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Dataflow01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 1a3 3 0 1 1-2.83 4.001c-.528.002-.929.01-1.259.036-.438.036-.663.101-.82.18a2 2 0 0 0-.873.875c-.08.156-.145.38-.18.82C13 7.361 13 7.942 13 8.8V11h3.17a3.001 3.001 0 1 1 0 2H13v2.2c0 .857 0 1.439.037 1.889.036.438.101.663.18.82a2 2 0 0 0 .875.873c.156.08.38.145.82.18.33.028.73.035 1.259.037A3.001 3.001 0 0 1 22 20a3 3 0 0 1-5.83.999 19 19 0 0 1-1.422-.043c-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C11 16.711 11 16.046 11 15.242V13H7.83a3.001 3.001 0 1 1 0-2H11V8.759c0-.805 0-1.47.044-2.011.046-.562.144-1.08.391-1.564a4 4 0 0 1 1.749-1.748c.485-.248 1.002-.346 1.564-.392.403-.033.876-.04 1.423-.043A3 3 0 0 1 19 1m0 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-8a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></svg>
    );
  },
);

Dataflow01.displayName = 'Dataflow01';
