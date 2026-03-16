import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Upload02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.293 7.293a1 1 0 0 1 1.414 0l6.5 6.5-1.414 1.414L13 10.414V22h-2V10.414l-4.793 4.793-1.414-1.414zM21 4H3V2h18z"/></svg>
    );
  },
);

Upload02.displayName = 'Upload02';
