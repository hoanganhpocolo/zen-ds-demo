import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Divide01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M20 13H4v-2h16z" clipRule="evenodd"/><path fill="currentColor" d="M10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/></svg>
    );
  },
);

Divide01.displayName = 'Divide01';
