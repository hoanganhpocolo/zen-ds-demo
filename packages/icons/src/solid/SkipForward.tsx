import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SkipForward = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4 6c0-2.06 2.352-3.236 4-2l8 6a2.5 2.5 0 0 1 0 4l-8 6c-1.648 1.236-4 .06-4-2zm16-2v16h-2V4z"/></svg>
    );
  },
);

SkipForward.displayName = 'SkipForward';
