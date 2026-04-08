import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Figma = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#0ACF83" d="M8.56 22.32A3.44 3.44 0 0 0 12 18.88v-3.44H8.56a3.441 3.441 0 0 0 0 6.88"/><path fill="#A259FF" d="M5.12 12a3.44 3.44 0 0 1 3.44-3.44H12v6.88H8.56A3.44 3.44 0 0 1 5.12 12"/><path fill="#F24E1E" d="M5.12 5.12a3.44 3.44 0 0 1 3.44-3.44H12v6.88H8.56a3.44 3.44 0 0 1-3.44-3.44"/><path fill="#FF7262" d="M12 1.68h3.44a3.44 3.44 0 0 1 3.44 3.44 3.44 3.44 0 0 1-3.44 3.44H12z"/><path fill="#1ABCFE" d="M18.88 12a3.441 3.441 0 1 1-3.44-3.44A3.44 3.44 0 0 1 18.88 12"/></svg>
    );
  },
);

Figma.displayName = 'Figma';
