import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BookOpen = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19.095 2.035C20.8 1.92 22 3.351 22 4.875v12.064c0 1.2-1.015 2.043-2.09 2.048-3.555.016-6.282 1.834-7.203 2.755a1 1 0 0 1-1.414 0c-.921-.921-3.648-2.74-7.203-2.755-1.008-.005-1.962-.747-2.078-1.827L2 16.939V4.874C2 3.351 3.2 1.92 4.905 2.035c2.077.142 5.003.752 7.095 2.584 2.092-1.832 5.018-2.442 7.095-2.584M11 18h2V6.5h-2z"/></svg>
    );
  },
);

BookOpen.displayName = 'BookOpen';
