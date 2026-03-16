import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const EqualNot = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8.414 7H20v2h-9.586l6 6H20v2h-1.586L21 19.586 19.586 21l-4-4H4v-2h9.586l-6-6H4V7h1.586L3 4.414 4.414 3z"/></svg>
    );
  },
);

EqualNot.displayName = 'EqualNot';
