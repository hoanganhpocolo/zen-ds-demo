import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const UserPlus = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14.394 14a6.996 6.996 0 0 0-2.72 9H4a2 2 0 0 1-2-2 7 7 0 0 1 7-7zm5.09 3.516H22v1.968h-2.516V22h-1.968v-2.516H15v-1.968h2.516V15h1.968zM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10"/></svg>
    );
  },
);

UserPlus.displayName = 'UserPlus';
