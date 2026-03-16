import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SkipBack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16 4c1.648-1.236 4-.06 4 2v12c0 2.06-2.352 3.236-4 2l-8-6a2.5 2.5 0 0 1 0-4zM6 20H4V4h2z"/></svg>
    );
  },
);

SkipBack.displayName = 'SkipBack';
