import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ChevronRight01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10 7.583c0-.518.695-.778 1.1-.411l4.586 4.142a.905.905 0 0 1 0 1.372L11.1 16.828c-.406.367-1.101.107-1.101-.412z"/></svg>
    );
  },
);

ChevronRight01.displayName = 'ChevronRight01';
