import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const List = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M2.5 16.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M23 19H7v-2h16zM2.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M23 13H7v-2h16zM2.5 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M23 7H7V5h16z"/></svg>
    );
  },
);

List.displayName = 'List';
