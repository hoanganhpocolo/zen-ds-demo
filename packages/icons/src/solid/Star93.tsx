import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Star93 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.162 2.25c.693-1.615 2.983-1.615 3.676 0l2.373 5.538 5.538 2.374c1.616.693 1.616 2.983 0 3.676l-5.538 2.373-2.373 5.538c-.693 1.616-2.983 1.616-3.676 0l-2.374-5.538-5.537-2.373c-1.616-.693-1.616-2.983 0-3.676l5.537-2.374z"/></svg>
    );
  },
);

Star93.displayName = 'Star93';
