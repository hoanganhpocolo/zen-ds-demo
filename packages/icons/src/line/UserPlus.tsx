import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const UserPlus = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 13.5v2H9a5 5 0 0 0-5 5v.5h16v.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 2 21.5v-1a7 7 0 0 1 7-7zm6.484 1.016H22v1.968h-2.516V19h-1.968v-2.516H15v-1.968h2.516V12h1.968zM11 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/></svg>
    );
  },
);

UserPlus.displayName = 'UserPlus';
