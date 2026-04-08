import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Framer = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 1c.552 0 1 .45 1 1.004V9.03c0 .555-.448 1.004-1 1.004h-4.586l5.293 5.314c.286.287.372.72.217 1.094a1 1 0 0 1-.924.62h-6v4.933a.997.997 0 0 1-1.707.71l-7-5.937a1 1 0 0 1-.293-.71V9.03c0-.554.448-1.004 1-1.004h4.586L4.293 2.714a1.01 1.01 0 0 1-.217-1.094A1 1 0 0 1 5 1zm-8 19.074v-3.012H7.5zm-5-5.02h10.586l-5-5.019H6zm6.414-7.027H18v-5.02H7.414z"/></svg>
    );
  },
);

Framer.displayName = 'Framer';
