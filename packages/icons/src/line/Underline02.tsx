import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Underline02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M20 22H4v-2h16zM11 4h-1v11.5h5a3 3 0 0 0 3-3V4h-2V2h6v2h-2v8.5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V4H2V2h9zm-5 8.5c0 1.306.835 2.417 2 2.83V4H6z"/></svg>
    );
  },
);

Underline02.displayName = 'Underline02';
