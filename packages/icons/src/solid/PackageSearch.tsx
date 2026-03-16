import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PackageSearch = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.996 1.005a4 4 0 0 1 4.008 0l6.5 3.763A4 4 0 0 1 22.5 8.229V10h-2V8.234l-2.999 1.738-3.497 2.024c-.319.184-.657.32-1.004.41v8.86l.002-.001 1.188-.688 1.001 1.73-1.187.688a4 4 0 0 1-4.008 0l-6.5-3.763A4 4 0 0 1 1.5 15.771V8.229c0-1.427.76-2.746 1.996-3.461zM18.883 13c2.138 0 3.882 1.725 3.882 3.865 0 .715-.196 1.385-.535 1.96l1.77 1.76-1.41 1.419-1.787-1.778a3.9 3.9 0 0 1-1.92.505c-2.139 0-3.883-1.725-3.883-3.866S16.744 13 18.883 13m0 2C17.838 15 17 15.84 17 16.865s.838 1.866 1.883 1.866c.515 0 .98-.204 1.32-.535.348-.34.562-.81.562-1.33A1.874 1.874 0 0 0 18.883 15M4.498 6.499l-.003.001 6.503 3.765a2 2 0 0 0 2.004 0l2-1.159-7.516-4.338zm8.504-3.764a2 2 0 0 0-2.004 0l-1.515.876 7.515 4.34L19.503 6.5l-.001-.001z"/></svg>
    );
  },
);

PackageSearch.displayName = 'PackageSearch';
