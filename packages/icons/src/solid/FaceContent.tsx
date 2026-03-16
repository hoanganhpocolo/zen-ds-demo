import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FaceContent = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4M6.059 9.928l.55 1.923 3.888-1.112-.55-1.923zm7.444.811 3.889 1.112.55-1.923-3.89-1.112z"/></svg>
    );
  },
);

FaceContent.displayName = 'FaceContent';
