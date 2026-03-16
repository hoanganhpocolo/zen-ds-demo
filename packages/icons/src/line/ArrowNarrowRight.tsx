import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowNarrowRight = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21.706 11.292a1 1 0 0 1 0 1.416L14.395 20l-1.413-1.416 5.6-5.584H2v-2h16.581l-5.599-5.584L14.395 4z"/></svg>
    );
  },
);

ArrowNarrowRight.displayName = 'ArrowNarrowRight';
