import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Headphones = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10v8a2 2 0 0 1-2 2h-.5a4.5 4.5 0 1 1 0-9h.5v-1a8 8 0 1 0-16 0v1h.5a4.5 4.5 0 1 1 0 9H4a2 2 0 0 1-2-2v-8C2 6.477 6.477 2 12 2"/></svg>
    );
  },
);

Headphones.displayName = 'Headphones';
