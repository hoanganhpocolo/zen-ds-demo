import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Award03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6.867 1a2 2 0 0 1 1.808 1.144l2.329 4.92Q11.494 7 12 7q.505 0 .994.063l2.331-4.92A2 2 0 0 1 17.133 1h3.19c1.514 0 2.48 1.619 1.759 2.951l-3.51 6.49a8 8 0 1 1-13.147.001l-3.507-6.49C1.198 2.618 2.163 1 3.678 1zM13.5 13.002c0-.891-1.078-1.338-1.709-.707l-2.998 2.998 1.414 1.414 1.293-1.293V18h2zM6.854 8.876A8 8 0 0 1 9.03 7.57L6.867 3h-3.19zm8.113-1.306a8 8 0 0 1 2.178 1.306L20.322 3h-3.19z"/></svg>
    );
  },
);

Award03.displayName = 'Award03';
