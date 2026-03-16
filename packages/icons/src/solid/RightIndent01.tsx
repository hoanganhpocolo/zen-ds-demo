import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const RightIndent01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22 22H2v-2h20zM18.72 7.599C20.022 6.513 22 7.439 22 9.135v5.73c0 1.696-1.978 2.622-3.28 1.536l-3.439-2.865a2 2 0 0 1 0-3.072zM12 16H2v-2h10zm0-6H2V8h10zm10-6H2V2h20z"/></svg>
    );
  },
);

RightIndent01.displayName = 'RightIndent01';
