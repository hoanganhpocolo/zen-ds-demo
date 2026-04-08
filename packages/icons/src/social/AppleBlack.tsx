import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AppleBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M20.623 16.365a11.4 11.4 0 0 1-1.15 2.03q-.906 1.27-1.48 1.758-.885.8-1.901.823-.732.001-1.757-.412-1.029-.412-1.892-.411-.906 0-1.945.411-1.04.413-1.68.434-.975.041-1.946-.845-.62-.53-1.548-1.82-.995-1.376-1.637-3.195Q3.001 13.173 3 11.33q0-2.112.93-3.639a5.4 5.4 0 0 1 1.946-1.934 5.3 5.3 0 0 1 2.63-.73q.774.002 2.036.465 1.26.466 1.614.467.266 0 1.79-.55 1.44-.508 2.433-.424 2.699.214 4.047 2.094-2.411 1.437-2.387 4.019.022 2.01 1.481 3.34.66.615 1.48.954a16 16 0 0 1-.377.973M16.499.42q0 1.576-1.168 2.939c-.94 1.079-2.075 1.702-3.307 1.604a3 3 0 0 1-.025-.398c0-1.008.446-2.087 1.24-2.97q.595-.67 1.51-1.114.915-.438 1.728-.481.023.21.022.42"/></svg>
    );
  },
);

AppleBlack.displayName = 'AppleBlack';
