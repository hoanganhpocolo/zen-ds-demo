import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LogIn01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-3v-2h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3V2zm-1.293 9.293a1 1 0 0 1 0 1.414l-5.5 5.5-1.414-1.414L13.586 13H2v-2h11.586L9.793 7.207l1.414-1.414z"/></svg>
    );
  },
);

LogIn01.displayName = 'LogIn01';
