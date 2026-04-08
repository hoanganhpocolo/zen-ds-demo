import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BarChart07 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h2c.351 0 .687.063 1 .174V10a3 3 0 0 1 3-3h2c.351 0 .687.063 1 .174V5a3 3 0 0 1 3-3zM5 14a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3v-5a1 1 0 0 0-1-1zm6-5a1 1 0 0 0-1 1v10h4V10a1 1 0 0 0-1-1zm6-5a1 1 0 0 0-1 1v15h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/></svg>
    );
  },
);

BarChart07.displayName = 'BarChart07';
