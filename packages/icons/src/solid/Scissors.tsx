import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Scissors = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6 2a4 4 0 0 1 3.354 6.177l3.55 1.775 8.189-4.39L22 7.345 13.383 12 22 16.655l-.907 1.782-8.189-4.39-3.55 1.775a4 4 0 1 1-5.02-1.46L8.974 12l-4.64-2.362a4 4 0 0 1-.38-.2A4 4 0 0 1 6 2m0 14c-.288 0-.562.061-.81.17l-.19.098A2 2 0 1 0 6 16M6 4a2 2 0 0 0-1 3.732l.19.097A2 2 0 1 0 6 4"/></svg>
    );
  },
);

Scissors.displayName = 'Scissors';
