import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Building01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.5 15h-3v-3h3zm6 0h-3v-3h3zm-6-6h-3V6h3zm6 0h-3V6h3z"/><path fill="currentColor" fillRule="evenodd" d="M17 1a4 4 0 0 1 4 4v16h2v2H1v-2h2V5a4 4 0 0 1 4-4zM7 3a2 2 0 0 0-2 2v16h2.5v-3h3v3h3v-3h3v3H19V5a2 2 0 0 0-2-2z" clipRule="evenodd"/></svg>
    );
  },
);

Building01.displayName = 'Building01';
