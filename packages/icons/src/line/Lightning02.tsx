import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Lightning02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14.5 1a1 1 0 0 1 .923 1.385L13.5 7H21a1 1 0 0 1 .72 1.694l-13.5 14a1 1 0 0 1-1.678-.981L9.156 13H3a1 1 0 0 1-.895-1.447l4-10A1 1 0 0 1 7 1zM4.618 11h7.226l-2.201 7.337L18.646 9H10.5L13 3H7.618z"/></svg>
    );
  },
);

Lightning02.displayName = 'Lightning02';
