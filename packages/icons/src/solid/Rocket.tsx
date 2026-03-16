import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Rocket = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8 15a1 1 0 0 1 1 1v2.459a4 4 0 0 1-3.343 3.945l-3.493.582a1 1 0 0 1-1.15-1.15l.582-3.493A4 4 0 0 1 5.54 15zM22 1a1 1 0 0 1 1 1v2.56c0 3.789-1.94 7.227-5 9.22V18a1 1 0 0 1-.553.895l-5 2.5A1 1 0 0 1 11 20.5v-5.086L8.586 13H3.5a1 1 0 0 1-.895-1.447l2.5-5 .072-.121A1 1 0 0 1 6 6h4.22c1.992-3.061 5.431-5 9.22-5zm-6.831 14.093q-.004 0-.008.003l-1.91.572-.251.076v3.138l3-1.5v-2.538zM5.119 11h3.137l.648-2.161.002-.009.25-.83H6.618z"/></svg>
    );
  },
);

Rocket.displayName = 'Rocket';
