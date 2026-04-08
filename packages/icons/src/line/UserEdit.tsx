import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const UserEdit = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.5 14.027v1.99H8.076a5.06 5.06 0 0 0-4.634 2.993c-.27.61-.42 1.285-.42 1.995H8.75V23H3.021C1.905 23 1 22.107 1 21.005c0-3.857 3.168-6.983 7.076-6.983 2.112 0 3.422.005 3.424.005M18.65 12a2.57 2.57 0 0 1 3.604 0 2.49 2.49 0 0 1 0 3.556l-6.16 6.08a1 1 0 0 1-.395.24l-3.26 1.073a1.02 1.02 0 0 1-1.035-.241.99.99 0 0 1-.244-1.021l1.087-3.217a1 1 0 0 1 .244-.39zm2.174 1.411a.53.53 0 0 0-.744 0l-5.99 5.912-.372 1.102 1.116-.367 5.99-5.912a.515.515 0 0 0 0-.735M11.108 2c2.792 0 5.055 2.234 5.055 4.988s-2.263 4.988-5.055 4.988c-2.79 0-5.053-2.233-5.053-4.988C6.055 4.234 8.317 2 11.108 2m0 1.995c-1.674 0-3.032 1.34-3.032 2.993S9.434 9.98 11.108 9.98c1.675 0 3.032-1.34 3.033-2.992 0-1.653-1.358-2.993-3.033-2.993"/></svg>
    );
  },
);

UserEdit.displayName = 'UserEdit';
