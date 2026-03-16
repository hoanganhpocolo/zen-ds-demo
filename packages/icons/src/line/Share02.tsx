import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Share02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10 4.093c0-2.22 2.679-3.339 4.258-1.778l7.996 7.908a2.5 2.5 0 0 1 0 3.554l-7.996 7.908c-1.58 1.56-4.258.443-4.258-1.778V17H7.639a5.75 5.75 0 0 0-4.804 2.589A1 1 0 0 1 1 19.039v-4.04a8 8 0 0 1 8-8h1zm2.852-.356a.5.5 0 0 0-.852.356V8a1 1 0 0 1-1 1H9a6 6 0 0 0-6 6v1.545A7.75 7.75 0 0 1 7.639 15H11a1 1 0 0 1 1 1v3.907a.5.5 0 0 0 .852.356l7.996-7.908a.5.5 0 0 0 0-.71z"/></svg>
    );
  },
);

Share02.displayName = 'Share02';
