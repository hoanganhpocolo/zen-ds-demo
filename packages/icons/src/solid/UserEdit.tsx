import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const UserEdit = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.394 14a6.996 6.996 0 0 0-2.72 9H4a2 2 0 0 1-2-2 7 7 0 0 1 7-7zm6.256-2a2.57 2.57 0 0 1 3.604 0 2.49 2.49 0 0 1 0 3.556l-6.16 6.08a1 1 0 0 1-.395.24l-3.26 1.073a1.02 1.02 0 0 1-1.035-.241.99.99 0 0 1-.244-1.021l1.087-3.217a1 1 0 0 1 .244-.39zm2.174 1.411a.53.53 0 0 0-.744 0l-5.99 5.912-.372 1.102 1.116-.367 5.99-5.912a.515.515 0 0 0 0-.735M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10"/></svg>
    );
  },
);

UserEdit.displayName = 'UserEdit';
