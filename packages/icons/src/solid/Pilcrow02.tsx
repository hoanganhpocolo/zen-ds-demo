import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Pilcrow02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M20 5V3H9a5 5 0 0 0 0 10h3.626v7H10v2h10v-2h-1.874V5zm-3.874 15h-1.5V5h1.5z" clipRule="evenodd"/></svg>
    );
  },
);

Pilcrow02.displayName = 'Pilcrow02';
