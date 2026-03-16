import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CodeCircle03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M9.535 17.237l1.93.526 3-11-1.93-.526zm-4.742-5.944a1 1 0 0 0 0 1.414l3 3 1.414-1.414L6.914 12l2.293-2.293-1.414-1.414zm10-1.586L17.086 12l-2.293 2.293 1.414 1.414 3-3a1 1 0 0 0 0-1.414l-3-3z"/></svg>
    );
  },
);

CodeCircle03.displayName = 'CodeCircle03';
