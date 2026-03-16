import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const XexTwitter = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17.44 3.296h2.902l-6.338 7.244 7.456 9.858h-5.838l-4.573-5.979-5.232 5.979H2.914l6.779-7.749L2.54 3.296h5.987L12.66 8.76zM16.423 18.66h1.608L7.653 4.941H5.928z"/></svg>
    );
  },
);

XexTwitter.displayName = 'XexTwitter';
