import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Code02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m14.977 2.434-4 19.566-1.954-.434 4-19.566zM8.414 7l-5 5 5 5L7 18.414l-5.707-5.707a1 1 0 0 1 0-1.414L7 5.586zm14.293 4.293a1 1 0 0 1 0 1.414L17 18.414 15.586 17l5-5-5-5L17 5.586z"/></svg>
    );
  },
);

Code02.displayName = 'Code02';
