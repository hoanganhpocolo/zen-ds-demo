import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Mark = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 3.055A9.004 9.004 0 0 1 20.945 11H23v2h-2.055A9.004 9.004 0 0 1 13 20.945V23h-2v-2.055A9.004 9.004 0 0 1 3.055 13H1v-2h2.055A9.004 9.004 0 0 1 11 3.055V1h2zM12 5c-3.804 0-7 3.12-7 7s3.196 7 7 7 7-3.12 7-7c0-3.804-3.12-7-7-7m0 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8"/></svg>
    );
  },
);

Mark.displayName = 'Mark';
