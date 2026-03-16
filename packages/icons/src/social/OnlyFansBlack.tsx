import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const OnlyFansBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M20.104 10.276s-2.063.505-3.811 0v-.002c3.457-.672 5.45-2.622 6.027-5.175h-3.455c-2.968 0-4.564.159-5.81 1.679A6.85 6.85 0 0 0 8.56 5.1a6.88 6.88 0 0 0-6.356 4.26 6.915 6.915 0 0 0 1.49 7.52 6.86 6.86 0 0 0 7.613 1.447 6.9 6.9 0 0 0 3.568-3.589c2.734-.2 4.631-1.843 5.23-4.463m-9.564 2.313-.022.072a2.05 2.05 0 0 1-.496.805 2.06 2.06 0 0 1-1.462.604l.002.001a2.06 2.06 0 0 1-1.907-1.277 2.07 2.07 0 0 1 .447-2.256 2.06 2.06 0 0 1 2.25-.449 2.07 2.07 0 0 1 1.188 2.5" clipRule="evenodd"/></svg>
    );
  },
);

OnlyFansBlack.displayName = 'OnlyFansBlack';
