import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Star02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><g clipPath="url(#a)"><path fill="currentColor" d="M10.277.956c.773-1.313 2.673-1.313 3.447 0l2.365 4.019 4.69.018c1.537.007 2.493 1.671 1.724 3.001L20.187 12l2.316 4.006c.769 1.33-.187 2.995-1.723 3.001l-4.69.018-2.366 4.02c-.774 1.313-2.674 1.313-3.447 0l-2.367-4.02-4.689-.018c-1.536-.006-2.492-1.67-1.724-3L3.813 12 1.497 7.994c-.768-1.33.188-2.994 1.724-3l4.69-.02zM9.346 6.48a1 1 0 0 1-.857.493l-5.26.02L5.835 11.5a1 1 0 0 1 0 1L3.23 17.007l5.259.02.13.01a1 1 0 0 1 .727.484L12 22.03l2.655-4.51.074-.107a1 1 0 0 1 .783-.385l5.259-.02-2.605-4.508a1 1 0 0 1 0-1l2.605-4.507-5.259-.02a1 1 0 0 1-.857-.493L12 1.97z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>
    );
  },
);

Star02.displayName = 'Star02';
