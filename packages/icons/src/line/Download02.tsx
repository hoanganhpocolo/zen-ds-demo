import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Download02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M11 12.586V3h2v9.586L17.086 8.5 18.5 9.914l-5.793 5.793a1 1 0 0 1-1.414 0L5.5 9.914 6.914 8.5zM2 19h20v2H2z" clipRule="evenodd"/></svg>
    );
  },
);

Download02.displayName = 'Download02';
