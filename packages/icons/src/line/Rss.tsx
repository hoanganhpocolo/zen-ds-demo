import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Rss = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-1-5a8 8 0 0 1 8 8H9a6 6 0 0 0-6-6zm0-5c7.18 0 13 5.82 13 13h-2c0-6.075-4.925-11-11-11zm0-5c9.941 0 18 8.059 18 18h-2c0-8.837-7.163-16-16-16z"/></svg>
    );
  },
);

Rss.displayName = 'Rss';
