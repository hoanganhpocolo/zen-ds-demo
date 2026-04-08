import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Settings02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6.5 13c1.072 0 2.056.375 2.83 1h9.17a3.5 3.5 0 1 1 0 7H9.33a4.5 4.5 0 1 1-2.83-8m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m4.244 1a4.54 4.54 0 0 1 0 3H18.5a1.5 1.5 0 0 0 0-3zM17.5 2a4.5 4.5 0 1 1-2.83 8H5.5a3.5 3.5 0 1 1 0-7h9.17c.774-.625 1.758-1 2.83-1m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m-12 1a1.5 1.5 0 1 0 0 3h7.756a4.53 4.53 0 0 1 0-3z"/></svg>
    );
  },
);

Settings02.displayName = 'Settings02';
