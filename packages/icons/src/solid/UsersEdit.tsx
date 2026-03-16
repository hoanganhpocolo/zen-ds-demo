import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const UsersEdit = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9 22H2a1 1 0 0 1-1-1 8 8 0 0 1 8-8h4zm9.65-10a2.57 2.57 0 0 1 3.604 0 2.49 2.49 0 0 1 0 3.556l-5.16 5.08a1 1 0 0 1-.395.24l-3.26 1.073a1.02 1.02 0 0 1-1.035-.241.99.99 0 0 1-.244-1.021l1.087-3.217a1 1 0 0 1 .244-.39zm2.174 1.411a.53.53 0 0 0-.744 0l-4.99 4.912-.372 1.102 1.116-.367 4.99-4.912a.515.515 0 0 0 0-.735M9 2a4.75 4.75 0 1 1 0 9.5A4.75 4.75 0 0 1 9 2m6 0a4.75 4.75 0 1 1-1.286 9.321A6.72 6.72 0 0 0 15.5 6.75c0-1.764-.678-3.37-1.786-4.572A4.8 4.8 0 0 1 15 2"/></svg>
    );
  },
);

UsersEdit.displayName = 'UsersEdit';
