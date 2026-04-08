import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ArrowNarrowUp = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 2a1 1 0 0 1 .708.294L20 9.605l-1.416 1.413L13 5.418V22h-2V5.419l-5.584 5.599L4 9.605l7.292-7.311A1 1 0 0 1 12 2"/></svg>
    );
  },
);

ArrowNarrowUp.displayName = 'ArrowNarrowUp';
