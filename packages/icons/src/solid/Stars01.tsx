import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Stars01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6.5 12a1 1 0 0 1 .97.758l.318 1.271a3 3 0 0 0 2.183 2.183l1.271.318a1 1 0 0 1 0 1.94l-1.271.318a3 3 0 0 0-2.183 2.183l-.318 1.271a1 1 0 0 1-1.94 0l-.318-1.271a3 3 0 0 0-2.183-2.183l-1.271-.318a1 1 0 0 1 0-1.94l1.271-.318a3 3 0 0 0 2.183-2.183l.318-1.271A1 1 0 0 1 6.5 12M14 1a1 1 0 0 1 .97.758l1.018 4.071a3 3 0 0 0 2.183 2.183l4.071 1.018a1 1 0 0 1 0 1.94l-4.071 1.018a3 3 0 0 0-2.183 2.183l-1.018 4.071a1 1 0 0 1-1.94 0l-1.018-4.071a3 3 0 0 0-2.183-2.183L5.758 10.97a1 1 0 0 1 0-1.94l4.071-1.018a3 3 0 0 0 2.183-2.183l1.018-4.071A1 1 0 0 1 14 1"/></svg>
    );
  },
);

Stars01.displayName = 'Stars01';
