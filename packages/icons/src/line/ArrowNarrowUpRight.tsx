import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowNarrowUpRight = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18.999 4A1 1 0 0 1 20 5.002L19.984 16l-2-.003.012-8.579L5.414 20 4 18.586 16.582 6.004 8 6.016l-.003-2z"/></svg>
    );
  },
);

ArrowNarrowUpRight.displayName = 'ArrowNarrowUpRight';
