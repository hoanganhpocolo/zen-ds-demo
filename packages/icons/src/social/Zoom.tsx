import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Zoom = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#0B5CFF" d="M22.32 12a20.4 20.4 0 0 1-.258 3.24 8.26 8.26 0 0 1-6.821 6.822 20.4 20.4 0 0 1-6.482 0 8.26 8.26 0 0 1-6.82-6.821 20.4 20.4 0 0 1 0-6.482 8.26 8.26 0 0 1 6.82-6.82 20.4 20.4 0 0 1 6.482 0 8.26 8.26 0 0 1 6.82 6.82c.17 1.055.26 2.137.26 3.24"/><path fill="#fff" d="M14.211 14.58c0 .61-.495 1.106-1.105 1.106H8.314a2.21 2.21 0 0 1-2.211-2.211V9.42c0-.61.495-1.106 1.106-1.106h4.79c1.222 0 2.212.99 2.212 2.212zm2.801-5.602-1.621 1.216a1.1 1.1 0 0 0-.443.885v1.843c0 .348.164.675.443.884l1.621 1.216a.553.553 0 0 0 .885-.442V9.42a.553.553 0 0 0-.884-.442"/></svg>
    );
  },
);

Zoom.displayName = 'Zoom';
