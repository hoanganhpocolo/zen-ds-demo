import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Pilcrow01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 3v2h-2v15h2v2h-6v-2h2v-6h-4.5a5.5 5.5 0 1 1 0-11zm-8.5 2a3.5 3.5 0 1 0 0 7H15V5z"/></svg>
    );
  },
);

Pilcrow01.displayName = 'Pilcrow01';
