import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ScissorsCut = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M5.998 2a4 4 0 0 1 3.466 5.991l3.588 1.831 7.475-4.199.972 1.75L13.377 12l8.17 4.652-.894 1.788-7.6-4.263-3.59 1.83a3.999 3.999 0 1 1-5.512-1.445c.119-.076.251-.14.382-.2L8.971 12 4.333 9.638A4 4 0 0 1 2 6a4 4 0 0 1 3.998-4m0 14a2 2 0 0 0-.809.17l-.19.098a2 2 0 1 0 1-.268M18 11a1 1 0 0 1 0 2h-.01a1 1 0 0 1 0-2zm4 0a1 1 0 0 1 0 2h-.01a1 1 0 0 1 0-2zM5.998 4a2 2 0 0 0-1 3.732l.191.097A2 2 0 1 0 5.998 4"/></svg>
    );
  },
);

ScissorsCut.displayName = 'ScissorsCut';
