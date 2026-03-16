import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Star04 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M20.9 19.1H23v1.8h-2.1V23h-1.8v-2.1H17v-1.8h2.1V17h1.8zM10.162 4.75c.693-1.616 2.983-1.616 3.676 0l1.623 3.787 3.788 1.624c1.616.693 1.616 2.983 0 3.676l-3.788 1.623-1.623 3.788c-.693 1.616-2.983 1.616-3.676 0L8.538 15.46l-3.787-1.623c-1.616-.693-1.616-2.983 0-3.676l3.787-1.624zM4.9 3.1H7v1.8H4.9V7H3.1V4.9H1V3.1h2.1V1h1.8z"/></svg>
    );
  },
);

Star04.displayName = 'Star04';
