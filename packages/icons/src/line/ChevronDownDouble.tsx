import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ChevronDownDouble = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m18 13.503-5.275 5.201a1.033 1.033 0 0 1-1.45 0L6 13.503l1.45-1.429L12 16.561l4.55-4.487zm0-7.074-5.275 5.2c-.4.395-1.05.396-1.45 0L6 6.43 7.45 5 12 9.486 16.55 5z"/></svg>
    );
  },
);

ChevronDownDouble.displayName = 'ChevronDownDouble';
