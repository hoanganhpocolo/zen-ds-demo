import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Codepen = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.996 3.505a4 4 0 0 1 4.008 0l6.5 3.763A4 4 0 0 1 22.5 10.73v2.54c0 1.428-.76 2.747-1.996 3.462l-6.5 3.763a4 4 0 0 1-4.008 0l-6.5-3.763A4 4 0 0 1 1.5 13.271v-2.542c0-1.427.76-2.746 1.996-3.461zM4.926 15.25l6.072 3.515.002.002v-3.862a4 4 0 0 1-1.004-.41l-1.883-1.089zm9.078-.755c-.319.185-.657.32-1.004.41v3.862l.002-.002 6.07-3.515-3.186-1.844zM3.5 13.271a2 2 0 0 0 .055.463l2.562-1.483L3.5 10.734zm14.382-1.02 2.562 1.483q.055-.225.056-.463v-2.537zm-4.88-.516a2 2 0 0 0-2.004 0l-.89.516.89.514a2 2 0 0 0 2.004 0l.889-.514zm-2.004-6.5L4.498 9l-.003.002 3.617 2.095 1.884-1.091A4 4 0 0 1 11 9.595v-4.36zM13 9.595a4 4 0 0 1 1.004.41l1.882 1.09 3.618-2.094-.002-.002-6.5-3.764H13z"/></svg>
    );
  },
);

Codepen.displayName = 'Codepen';
