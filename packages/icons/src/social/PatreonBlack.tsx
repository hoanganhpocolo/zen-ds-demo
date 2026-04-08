import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PatreonBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21.423 7.88c-.004-2.635-2.056-4.795-4.465-5.574-2.99-.968-6.934-.828-9.79.52-3.46 1.633-4.548 5.21-4.589 8.779-.033 2.933.26 10.66 4.618 10.715 3.238.04 3.72-4.132 5.219-6.141 1.066-1.43 2.438-1.834 4.128-2.252 2.904-.719 4.883-3.01 4.879-6.046"/></svg>
    );
  },
);

PatreonBlack.displayName = 'PatreonBlack';
