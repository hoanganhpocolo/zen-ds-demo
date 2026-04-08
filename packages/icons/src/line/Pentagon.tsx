import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Pentagon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><g clipPath="url(#a)"><path fill="currentColor" d="M10.237.545a3 3 0 0 1 3.527 0l8.586 6.239a3 3 0 0 1 1.09 3.354l-3.28 10.093a3 3 0 0 1-2.853 2.073H6.694a3 3 0 0 1-2.853-2.073L.561 10.138a3 3 0 0 1 1.09-3.354zm2.351 1.618a1 1 0 0 0-1.175 0L2.827 8.402a1 1 0 0 0-.364 1.118l3.28 10.093c.134.411.518.691.95.691h10.614a1 1 0 0 0 .951-.691l3.28-10.093a1 1 0 0 0-.364-1.118z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>
    );
  },
);

Pentagon.displayName = 'Pentagon';
