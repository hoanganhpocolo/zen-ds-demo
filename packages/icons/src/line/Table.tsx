import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Table = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-8 18h8a2 2 0 0 0 2-2v-8H10zm-6-2a2 2 0 0 0 2 2h2V10H4zm6-10h10V6a2 2 0 0 0-2-2h-8zM6 4a2 2 0 0 0-2 2v2h4V4z"/></svg>
    );
  },
);

Table.displayName = 'Table';
