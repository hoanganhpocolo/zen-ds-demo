import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Bell02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7.732 5.402a8 8 0 0 1 13.856 8l-2.098 3.635.208 3.23c.103 1.595-1.613 2.66-2.996 1.861l-1.846-1.066a4 4 0 1 1-6.928-4h-.001l-5.309-3.066c-1.383-.798-1.318-2.816.114-3.524l2.902-1.436zm1.927 12.66a2 2 0 0 0 3.464 2zM17.66 4.205a6 6 0 0 0-8.196 2.197l-2.25 3.897a1 1 0 0 1-.423.397l-3.173 1.568 14.084 8.132-.227-3.532a1 1 0 0 1 .131-.565l2.25-3.897a6 6 0 0 0-2.196-8.197"/></svg>
    );
  },
);

Bell02.displayName = 'Bell02';
