import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ImageUserUp = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18.293 15.293a1 1 0 0 1 1.414 0L23 18.586 21.586 20 20 18.414V23h-2v-4.586L16.415 20l-1.414-1.414zM18 2a4 4 0 0 1 4 4v6h-3a6.99 6.99 0 0 0-5.743 3H10a5 5 0 0 0-5 5h7v2H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-6 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/></svg>
    );
  },
);

ImageUserUp.displayName = 'ImageUserUp';
