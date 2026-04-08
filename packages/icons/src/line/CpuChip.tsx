import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CpuChip = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10 3h4V1h2v2h1a4 4 0 0 1 4 4v1h2v2h-2v4h2v2h-2v1a4 4 0 0 1-4 4h-1v2h-2v-2h-4v2H8v-2H7a4 4 0 0 1-4-4v-1H1v-2h2v-4H1V8h2V7a4 4 0 0 1 4-4h1V1h2zM7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm7.204 3.01A2 2 0 0 1 16 10v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.99-1.796L8 14v-4a2 2 0 0 1 2-2h4zM10 14h4v-4h-4z"/></svg>
    );
  },
);

CpuChip.displayName = 'CpuChip';
