import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Paperclip = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13.666 4.492a4.74 4.74 0 0 1 6.905 0c1.906 1.99 1.906 5.219 0 7.21l-6.905 7.207c-2.669 2.787-6.996 2.787-9.665 0s-2.669-7.305 0-10.091l5.147-5.373 1.38 1.441-5.146 5.374c-1.906 1.99-1.906 5.217 0 7.208a4.74 4.74 0 0 0 6.904 0l6.904-7.208c1.143-1.194 1.143-3.13 0-4.325a2.843 2.843 0 0 0-4.143 0L8.49 12.783a1.053 1.053 0 0 0 0 1.442.95.95 0 0 0 1.38 0l6.559-6.849 1.38 1.442-6.558 6.848a2.84 2.84 0 0 1-4.141 0c-1.144-1.194-1.144-3.13 0-4.325z"/></svg>
    );
  },
);

Paperclip.displayName = 'Paperclip';
