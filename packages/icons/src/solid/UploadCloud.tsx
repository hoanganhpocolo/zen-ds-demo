import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const UploadCloud = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.293 12.293a1 1 0 0 1 1.414 0l3.5 3.5-1.414 1.414L13 15.414V22h-2v-6.586l-1.793 1.793-1.414-1.414zM12 1c2.678 0 4.989 1.526 6.22 3.752 2.728.33 4.78 2.755 4.78 5.605 0 2.629-1.745 4.893-4.154 5.489l-5.432-5.432a2 2 0 0 0-2.828 0l-5.433 5.432C2.744 15.25 1 12.986 1 10.357c0-2.85 2.052-5.276 4.78-5.605C7.01 2.526 9.321 1 12 1"/></svg>
    );
  },
);

UploadCloud.displayName = 'UploadCloud';
