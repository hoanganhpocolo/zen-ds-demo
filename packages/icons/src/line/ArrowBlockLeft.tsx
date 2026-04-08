import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowBlockLeft = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.788 4.428C11.104 3.425 13 4.365 13 6.02V7.5h6a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-6v1.48c0 1.656-1.896 2.595-3.212 1.592l-6.806-5.185a3 3 0 0 1 0-4.774zm-5.594 6.776a1 1 0 0 0 0 1.592L11 17.98V15.5a1 1 0 0 1 1-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-7a1 1 0 0 1-1-1V6.02z"/></svg>
    );
  },
);

ArrowBlockLeft.displayName = 'ArrowBlockLeft';
