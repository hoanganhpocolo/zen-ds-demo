import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Zap = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13.36 1.354c.964-.921 2.602-.062 2.33 1.297l-1.47 7.353 5.35.019c1.23.005 1.858 1.482 1.005 2.37l-9.864 10.27c-.98 1.021-2.684.109-2.377-1.273L9.754 15H4.388c-1.206 0-1.848-1.424-1.049-2.328L13.27 1.45zM5.72 13H11a1 1 0 0 1 .977 1.217l-1.226 5.517 7.41-7.716L12.998 12a1.002 1.002 0 0 1-.978-1.196l1.273-6.364z"/></svg>
    );
  },
);

Zap.displayName = 'Zap';
