import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Subscript = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M20 12a3 3 0 0 1 3 3v.067a3.07 3.07 0 0 1-1.99 2.872l-2.01.754V19h4v2h-5a1 1 0 0 1-1-1v-2a1 1 0 0 1 .648-.936l2.66-.998c.416-.156.692-.554.692-.999V15a1 1 0 1 0-2 0v.5h-2V15a3 3 0 0 1 3-3m-5-7.586L9.414 10 15 15.586 13.586 17 8 11.414 2.414 17 1 15.586 6.586 10 1 4.414 2.414 3 8 8.586 13.586 3z"/></svg>
    );
  },
);

Subscript.displayName = 'Subscript';
