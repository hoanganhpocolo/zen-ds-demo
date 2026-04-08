import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const RightIndent02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22 22H2v-2h20zm0-5H2v-2h20zM18.72 2.6C20.022 1.514 22 2.439 22 4.135v5.73c0 1.696-1.978 2.622-3.28 1.537l-3.44-2.865a2 2 0 0 1 0-3.073zM12 11H2V9h10zm4.563-4L20 9.866v-5.73zM12 6H2V4h10z"/></svg>
    );
  },
);

RightIndent02.displayName = 'RightIndent02';
