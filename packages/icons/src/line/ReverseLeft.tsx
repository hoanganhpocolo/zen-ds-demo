import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ReverseLeft = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8.282 5.451 4.51 9.042h13.013a5.48 5.48 0 0 1 0 10.958H3v-2h14.522a3.479 3.479 0 0 0 0-6.958H4.509l3.773 3.59-1.376 1.452-5.593-5.316a1 1 0 0 1 0-1.452L6.906 4z"/></svg>
    );
  },
);

ReverseLeft.displayName = 'ReverseLeft';
