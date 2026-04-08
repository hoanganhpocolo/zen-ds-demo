import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CodeCircle02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18m6.207 10.293a1 1 0 0 1 0 1.414l-3 3-1.414-1.414L16.086 14l-2.293-2.293 1.414-1.414zm-8-5.586L7.914 10l2.293 2.293-1.414 1.414-3-3a1 1 0 0 1 0-1.414l3-3z"/></svg>
    );
  },
);

CodeCircle02.displayName = 'CodeCircle02';
