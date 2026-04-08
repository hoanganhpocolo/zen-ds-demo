import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Building01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M17 1a4 4 0 0 1 4 4v16h2v2H1v-2h2V5a4 4 0 0 1 4-4zM7.5 21h3v-3h-3zm6 0h3v-3h-3zm-6-6h3v-3h-3zm6 0h3v-3h-3zm-6-6h3V6h-3zm6 0h3V6h-3z" clipRule="evenodd"/></svg>
    );
  },
);

Building01.displayName = 'Building01';
