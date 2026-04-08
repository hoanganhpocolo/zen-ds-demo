import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Divide02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M20 13H4v-2h16zM12 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 14a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd"/></svg>
    );
  },
);

Divide02.displayName = 'Divide02';
