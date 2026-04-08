import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Wind02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15.5 16a3.5 3.5 0 1 1-2.999 5.305l1.713-1.032A1.5 1.5 0 1 0 15.5 18H1v-2zm3.808-9.885a3.692 3.692 0 0 1 0 7.385H1v-2h18.308a1.692 1.692 0 1 0-1.452-2.563l-1.712-1.033a3.69 3.69 0 0 1 3.164-1.789M11.786 1a3.5 3.5 0 0 1 0 7H1V6h10.786A1.5 1.5 0 1 0 10.5 3.728L8.786 2.695a3.5 3.5 0 0 1 3-1.695"/></svg>
    );
  },
);

Wind02.displayName = 'Wind02';
