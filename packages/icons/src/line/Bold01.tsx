import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Bold01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14 3a5 5 0 0 1 3.436 8.633A5 5 0 0 1 15 21H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM7 19h8a3 3 0 1 0 0-6H7zm0-8h7a3 3 0 1 0 0-6H7z"/></svg>
    );
  },
);

Bold01.displayName = 'Bold01';
