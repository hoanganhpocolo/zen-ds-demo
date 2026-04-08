import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Download03 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M11 13.586V8a1 1 0 1 1 2 0v5.586l2.086-2.086a1 1 0 0 1 1.414 1.414l-3.793 3.793a1 1 0 0 1-1.414 0L7.5 12.914A1 1 0 1 1 8.914 11.5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12" clipRule="evenodd"/></svg>
    );
  },
);

Download03.displayName = 'Download03';
