import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CoinsSwap = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16 1a7 7 0 1 1-1.083 13.917Q15 15.447 15 16a7 7 0 1 1-5.917-6.917A7 7 0 0 1 16 1m6.868 16.692a7.52 7.52 0 0 1-3.445 3.11l.638.286-.82 1.824-3.394-1.523a1 1 0 0 1-.435-1.448l1.93-3.047 1.69 1.07-.718 1.134a5.53 5.53 0 0 0 2.818-2.399zM8 11a5 5 0 1 0 0 10 5 5 0 0 0 0-10m8-8a5 5 0 0 0-4.645 6.854 7.04 7.04 0 0 1 2.79 2.79A5 5 0 1 0 16 3m-7.64-.12a1 1 0 0 1 .354 1.401l-1.93 3.076-1.695-1.063.735-1.17a5.52 5.52 0 0 0-2.936 2.593l-1.776-.922a7.52 7.52 0 0 1 3.91-3.507l-.737-.418.986-1.74z"/></svg>
    );
  },
);

CoinsSwap.displayName = 'CoinsSwap';
