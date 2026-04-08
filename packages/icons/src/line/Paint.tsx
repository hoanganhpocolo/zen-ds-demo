import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Paint = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21.72 12.738a1.02 1.02 0 0 1-.035 1.44l-6.734 6.428a5.02 5.02 0 0 1-7.038-.095L4.478 17.05a5.11 5.11 0 0 1 .017-7.207l5.984-5.97-1.424-1.436L10.48 1zm-16.534 1.72c.145.421.384.817.718 1.153l3.437 3.462a3.01 3.01 0 0 0 4.222.058l4.896-4.673zm.729-3.17a3.04 3.04 0 0 0-.72 1.137H18.63l-6.74-7.1z"/></svg>
    );
  },
);

Paint.displayName = 'Paint';
