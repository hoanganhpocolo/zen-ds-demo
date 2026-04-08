import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ChevronSelectorVertical = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m18 14.414-5.293 5.293a1 1 0 0 1-1.414 0L6 14.414 7.414 13 12 17.586 16.586 13zm-6.707-10.12a1 1 0 0 1 1.414 0L18 9.585 16.586 11 12 6.414l-4.5 4.5L6.086 9.5z"/></svg>
    );
  },
);

ChevronSelectorVertical.displayName = 'ChevronSelectorVertical';
