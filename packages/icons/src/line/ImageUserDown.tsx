import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ImageUserDown = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M20 15v4.586L21.586 18 23 19.414l-3.293 3.293a1 1 0 0 1-1.414 0L15 19.414 16.414 18 18 19.586V15zM18 2a4 4 0 0 1 4 4v6h-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12c0 .397.117.765.316 1.076A6 6 0 0 1 10 15h2v2h-2a4 4 0 0 0-3.874 3H12v2H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-6 3.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></svg>
    );
  },
);

ImageUserDown.displayName = 'ImageUserDown';
