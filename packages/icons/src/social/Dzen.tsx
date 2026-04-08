import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Dzen = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><circle cx="12" cy="12" r="10.32" fill="currentColor"/><path fill="#fff" d="M22.32 12.11v-.22c-4.57-.148-6.656-.259-8.33-1.88-1.621-1.674-1.74-3.76-1.88-8.33h-.22c-.148 4.57-.258 6.656-1.88 8.33-1.674 1.621-3.76 1.74-8.33 1.88v.22c4.57.148 6.656.258 8.33 1.88 1.622 1.674 1.74 3.76 1.88 8.33h.22c.148-4.57.259-6.656 1.88-8.33 1.674-1.622 3.76-1.74 8.33-1.88"/></svg>
    );
  },
);

Dzen.displayName = 'Dzen';
