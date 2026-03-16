import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AlertSquare = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22 2v20H2V2zM4 4v16h16V4zm8 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m1-1.5h-2V6.5h2z"/></svg>
    );
  },
);

AlertSquare.displayName = 'AlertSquare';
