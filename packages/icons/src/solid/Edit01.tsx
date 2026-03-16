import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Edit01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 2v2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h2v7a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z"/><path fill="currentColor" d="M17.213 2.821a2.804 2.804 0 0 1 3.966 3.966l-8.372 8.372c-.111.11-.246.194-.395.243l-3.808 1.27a1.009 1.009 0 0 1-1.276-1.276l1.27-3.81c.05-.147.132-.282.243-.393z"/></svg>
    );
  },
);

Edit01.displayName = 'Edit01';
