import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Diamond = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.142 2a3 3 0 0 1 2.174.934l3.871 4.075a3 3 0 0 1 .112 4.008L13.524 21.35a2 2 0 0 1-3.048 0L1.7 11.017a3 3 0 0 1 .112-4.008l3.872-4.075A3 3 0 0 1 7.858 2zM12 18.4l3.5-8.4h-7zm-2.9-1.758L6.335 10H3.46zm5.798-.001L20.54 10h-2.873zM17.618 8h2.753l-3.505-3.688A1 1 0 0 0 16.142 4h-.524zm-9 0h6.764l-2-4h-2.764zm-.76-4a1 1 0 0 0-.724.312L3.629 8h2.753l2-4z"/></svg>
    );
  },
);

Diamond.displayName = 'Diamond';
