import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Wind03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14.6 15a4 4 0 1 1-3.428 6.063l1.713-1.033A2 2 0 1 0 14.6 17H1v-2zm4.708-8.885a3.692 3.692 0 0 1 0 7.385H11v-2h8.308a1.692 1.692 0 1 0-1.452-2.563l-1.712-1.033a3.69 3.69 0 0 1 3.164-1.789M10.77 1a4.23 4.23 0 0 1 0 8.462H1v-2h9.77a2.231 2.231 0 1 0-1.914-3.38L7.144 3.05A4.23 4.23 0 0 1 10.77 1"/></svg>
    );
  },
);

Wind03.displayName = 'Wind03';
