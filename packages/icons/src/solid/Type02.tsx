import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Type02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v3h-2V5h-4v14h2v2H7v-2h2V5H5v3H3V5a2 2 0 0 1 2-2z"/></svg>
    );
  },
);

Type02.displayName = 'Type02';
