import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Beaker02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16 1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2v2.53l4.56 3.802A4 4 0 0 1 22 16.405V19a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-2.595c0-1.187.527-2.313 1.44-3.073L8 9.53V7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM8.163 12 4.72 14.87A2 2 0 0 0 4 16.404V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2.595a2 2 0 0 0-.72-1.536L15.837 12zm6.337 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M9 16a1 1 0 1 1 0 2 1 1 0 0 1 0-2m1-6h4V7h-4zM8 5h8V3H8z"/></svg>
    );
  },
);

Beaker02.displayName = 'Beaker02';
