import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowNarrowDownRight = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m17.996 16.582-.012-8.58 2-.002L20 18.999A1 1 0 0 1 18.999 20L8 19.984l.003-2 8.579.012L4 5.414 5.414 4z"/></svg>
    );
  },
);

ArrowNarrowDownRight.displayName = 'ArrowNarrowDownRight';
