import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Microphone = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6 11a6 6 0 0 0 12 0V9h2v2a8 8 0 0 1-7 7.936V21h3v2H8v-2h3v-2.064A8 8 0 0 1 4 11V9h2zm6-10a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4"/></svg>
    );
  },
);

Microphone.displayName = 'Microphone';
