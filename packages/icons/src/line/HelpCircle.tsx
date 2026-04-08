import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const HelpCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0-9a3.5 3.5 0 0 1 1.363 6.725.9.9 0 0 0-.318.213c-.052.06-.046.08-.045.067v.495h-2V13c0-1.152.931-1.841 1.584-2.117A1.501 1.501 0 0 0 12 8a1.5 1.5 0 0 0-1.5 1.5h-2A3.5 3.5 0 0 1 12 6"/><path fill="currentColor" fillRule="evenodd" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd"/></svg>
    );
  },
);

HelpCircle.displayName = 'HelpCircle';
