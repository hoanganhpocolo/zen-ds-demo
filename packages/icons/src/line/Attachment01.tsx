import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Attachment01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M10.333 5.09c2.669-2.787 6.996-2.787 9.665 0s2.669 7.305 0 10.092l-5.146 5.374-1.38-1.442 5.145-5.374c1.907-1.99 1.907-5.217 0-7.208a4.737 4.737 0 0 0-6.903 0L4.81 13.74c-1.144 1.194-1.144 3.131 0 4.325a2.84 2.84 0 0 0 4.141 0l6.559-6.847a1.053 1.053 0 0 0 0-1.443.95.95 0 0 0-1.381 0l-6.558 6.849-1.38-1.442 6.557-6.848a2.843 2.843 0 0 1 4.143 0c1.143 1.194 1.143 3.13 0 4.325l-6.559 6.848a4.737 4.737 0 0 1-6.903 0c-1.906-1.99-1.907-5.218 0-7.208z"/></svg>
    );
  },
);

Attachment01.displayName = 'Attachment01';
