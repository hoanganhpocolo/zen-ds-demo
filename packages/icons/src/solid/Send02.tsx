import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Send02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.21 3.342c.738-1.474 2.842-1.474 3.579 0L21.717 19.2c.823 1.645-.823 3.434-2.53 2.751L13 19.478V9h-2v10.478L4.813 21.95c-1.707.683-3.353-1.106-2.531-2.75z"/></svg>
    );
  },
);

Send02.displayName = 'Send02';
