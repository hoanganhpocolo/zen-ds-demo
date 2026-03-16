import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Move = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.293 1.293a1 1 0 0 1 1.414 0L16 4.586 14.586 6 13 4.414V11h6.586L18 9.414 19.414 8l3.293 3.293a1 1 0 0 1 0 1.414L19.414 16 18 14.586 19.586 13H13v6.586L14.586 18 16 19.414l-3.293 3.293a1 1 0 0 1-1.414 0L8 19.414 9.414 18 11 19.586V13H4.414L6 14.586 4.586 16l-3.293-3.293a1 1 0 0 1 0-1.414L4.586 8 6 9.414 4.414 11H11V4.414L9.414 6 8 4.586z"/></svg>
    );
  },
);

Move.displayName = 'Move';
