import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowsUp = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M5.5 2.293a1 1 0 0 1 1.414 0l4.5 4.5L10 8.207 7.207 5.414V22h-2V5.414L2.414 8.207 1 6.793zm11.586 6a1 1 0 0 1 1.414 0l4.5 4.5-1.414 1.414-2.793-2.793V22h-2V11.414L14 14.207l-1.414-1.414z"/></svg>
    );
  },
);

ArrowsUp.displayName = 'ArrowsUp';
