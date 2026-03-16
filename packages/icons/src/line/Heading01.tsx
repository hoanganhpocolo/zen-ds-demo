import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Heading01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9 4H7v7h10V4h-2V2h6v2h-2v16h2v2h-6v-2h2v-7H7v7h2v2H3v-2h2V4H3V2h6z"/></svg>
    );
  },
);

Heading01.displayName = 'Heading01';
