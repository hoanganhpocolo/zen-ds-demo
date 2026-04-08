import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowCircleUpLeft = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4.222 4.222c4.295-4.296 11.26-4.296 15.556 0 4.296 4.295 4.296 11.26 0 15.556s-11.26 4.296-15.556 0-4.296-11.26 0-15.556m14.142 1.414a9 9 0 1 0-12.728 12.73 9 9 0 0 0 12.728-12.73m-3.536 1.829v2h-3.95l5.365 5.363-1.415 1.415-5.363-5.364v3.949h-2V8.465a1 1 0 0 1 1-1z"/></svg>
    );
  },
);

ArrowCircleUpLeft.displayName = 'ArrowCircleUpLeft';
