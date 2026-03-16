import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Repeat02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 4a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-6.586L14 21.586 12.586 23l-3.293-3.293a1 1 0 0 1 0-1.414L12.586 15 14 16.414 12.414 18H19a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1V4zm-4.293.293a1 1 0 0 1 0 1.414L11.414 9 10 7.586 11.586 6H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1v2H5a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h6.586L10 2.414 11.414 1z"/></svg>
    );
  },
);

Repeat02.displayName = 'Repeat02';
