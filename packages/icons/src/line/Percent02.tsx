import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Percent02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21 4.414 4.4 21 3 19.586 19.6 3zM16.934 14a2.993 2.993 0 0 1 2.985 3c0 1.657-1.336 3-2.985 3a2.993 2.993 0 0 1-2.986-3c0-1.657 1.337-3 2.986-3m0 2a.997.997 0 0 0-.996 1c0 .552.446 1 .996 1s.995-.448.995-1-.446-1-.995-1M6.98 4a2.993 2.993 0 0 1 2.986 3c0 1.657-1.337 3-2.986 3a2.993 2.993 0 0 1-2.986-3c0-1.657 1.337-3 2.986-3m0 2a1 1 0 0 0-.996 1c0 .552.447 1 .996 1 .55 0 .996-.448.996-1S7.53 6 6.98 6"/></svg>
    );
  },
);

Percent02.displayName = 'Percent02';
