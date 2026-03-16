import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PackageMinus = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.996 1.005a4 4 0 0 1 4.008 0l6.5 3.763A4 4 0 0 1 22.5 8.229V12h-2V8.234l-2.999 1.738-3.497 2.024c-.319.184-.657.32-1.004.41v8.86l.002-.001 3.247-1.88 1.002 1.73-3.247 1.88a4 4 0 0 1-4.008 0l-6.5-3.763A4 4 0 0 1 1.5 15.771V8.229c0-1.427.76-2.746 1.996-3.461zM24 17h-7v-2h7zM4.498 6.499l-.003.001 6.503 3.765a2 2 0 0 0 2.004 0l2-1.159-7.516-4.338zm8.504-3.764a2 2 0 0 0-2.004 0l-1.515.876 7.515 4.34L19.503 6.5l-.001-.001z"/></svg>
    );
  },
);

PackageMinus.displayName = 'PackageMinus';
