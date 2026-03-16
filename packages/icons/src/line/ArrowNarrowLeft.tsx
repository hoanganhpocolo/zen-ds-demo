import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowNarrowLeft = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.018 5.416 5.418 11H22v2H5.419l5.599 5.584L9.605 20l-7.311-7.292a1 1 0 0 1 0-1.416L9.605 4z"/></svg>
    );
  },
);

ArrowNarrowLeft.displayName = 'ArrowNarrowLeft';
