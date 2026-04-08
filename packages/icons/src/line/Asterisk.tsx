import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Asterisk = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m13 9.586 5.364-5.364 1.414 1.414L14.414 11H22v2h-7.586l5.364 5.364-1.414 1.414L13 14.414V22h-2v-7.586l-5.364 5.364-1.414-1.414L9.586 13H2v-2h7.586L4.222 5.636l1.415-1.414L11 9.586V2h2z"/></svg>
    );
  },
);

Asterisk.displayName = 'Asterisk';
