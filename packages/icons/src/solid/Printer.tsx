import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Printer = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.164 2a4 4 0 0 1 2.973 1.324l2.837 3.152A4 4 0 0 1 23 9.15V14a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-2H4a3 3 0 0 1-3-3V9.151a4 4 0 0 1 1.026-2.675l2.837-3.152A4 4 0 0 1 7.836 2zM8 19a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6H8zM7.836 4a2 2 0 0 0-1.486.662L4.246 7h15.508L17.65 4.662A2 2 0 0 0 16.164 4z"/></svg>
    );
  },
);

Printer.displayName = 'Printer';
