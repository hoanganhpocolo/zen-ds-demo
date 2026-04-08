import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Brush02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.779 1.293a1 1 0 0 1 1.414 0l9.192 9.192a3 3 0 0 1 0 4.243l-.708.707 2.122 2.122a3 3 0 0 1-4.242 4.242l-2.122-2.122-.707.708a3 3 0 0 1-4.131.106l-.111-.106-9.193-9.193-.07-.076a1 1 0 0 1 .07-1.338zm-6.365 9.192 4.227 4.227 7.071-7.071-4.226-4.227z"/></svg>
    );
  },
);

Brush02.displayName = 'Brush02';
