import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CpuChip = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10 3h4V1h2v2h1a4 4 0 0 1 4 4v1h2v2h-2v4h2v2h-2v1a4 4 0 0 1-4 4h-1v2h-2v-2h-4v2H8v-2H7a4 4 0 0 1-4-4v-1H1v-2h2v-4H1V8h2V7a4 4 0 0 1 4-4h1V1h2zM9 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm5 2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"/></svg>
    );
  },
);

CpuChip.displayName = 'CpuChip';
