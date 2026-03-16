import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Attachment02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10 1a5 5 0 0 1 5 5v9.5a3 3 0 1 1-6 0V6h2v9.5a1 1 0 1 0 2 0V6a3 3 0 1 0-6 0v10a5 5 0 0 0 10 0V8.546h2V16a7 7 0 1 1-14 0V6a5 5 0 0 1 5-5"/></svg>
    );
  },
);

Attachment02.displayName = 'Attachment02';
