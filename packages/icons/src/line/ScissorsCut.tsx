import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ScissorsCut = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M5.998 2A3.999 3.999 0 0 1 8.18 9.353l2.994 1.525 9.353-5.255.972 1.75L13.377 12l8.17 4.652-.894 1.788-9.48-5.318-2.993 1.526a3.999 3.999 0 1 1-4.228-.085c.118-.077.25-.14.381-.2L8.971 12 4.333 9.638A4 4 0 0 1 2 6a4 4 0 0 1 3.998-4m0 14a2 2 0 0 0-.809.17l-.19.098a2 2 0 1 0 1-.268M18 11a1 1 0 0 1 0 2h-.01a1 1 0 0 1 0-2zm4 0a1 1 0 0 1 0 2h-.01a1 1 0 0 1 0-2zM5.998 4a2 2 0 0 0-1 3.732l.191.097A2 2 0 1 0 5.998 4"/></svg>
    );
  },
);

ScissorsCut.displayName = 'ScissorsCut';
