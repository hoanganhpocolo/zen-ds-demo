import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Brush02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.778 1.293a1 1 0 0 1 1.414 0l8.486 8.485a4 4 0 0 1-.001 5.657l2.122 2.122a3 3 0 0 1-4.242 4.242l-2.122-2.122a4 4 0 0 1-5.657 0l-8.485-8.485a1 1 0 0 1 0-1.414zm7.072 16.97 2.12 2.122a1 1 0 1 0 1.415-1.414l-2.121-2.121zm-6.365-.706.707.707a2 2 0 0 0 2.829 0l4.243-4.243a2 2 0 0 0 0-2.829l-.707-.707zm-7.07-7.072 5.656 5.658 7.072-7.072-5.658-5.657z"/></svg>
    );
  },
);

Brush02.displayName = 'Brush02';
