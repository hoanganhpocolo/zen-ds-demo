import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CoinsSwap = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8 9a7 7 0 1 1 0 14A7 7 0 0 1 8 9m14.868 8.692a7.52 7.52 0 0 1-3.445 3.11l.638.286-.82 1.824-3.394-1.523a1 1 0 0 1-.435-1.448l1.93-3.047 1.69 1.07-.718 1.134a5.53 5.53 0 0 0 2.818-2.399zM16 1a7 7 0 0 1 .935 13.936 9 9 0 0 0-7.872-7.872A7 7 0 0 1 16 1M8.36 2.88a1 1 0 0 1 .354 1.401l-1.93 3.076-1.695-1.063.735-1.17a5.52 5.52 0 0 0-2.936 2.593l-1.776-.922a7.52 7.52 0 0 1 3.91-3.507l-.737-.418.986-1.74z"/></svg>
    );
  },
);

CoinsSwap.displayName = 'CoinsSwap';
