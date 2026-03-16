import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const DzenBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M22.32 12.11c-4.57.14-6.656.258-8.33 1.88-1.621 1.673-1.732 3.76-1.88 8.33 5.612-.06 10.15-4.598 10.21-10.21M11.89 22.32c-.14-4.57-.259-6.657-1.88-8.33-1.674-1.622-3.76-1.732-8.33-1.88.06 5.612 4.598 10.15 10.21 10.21m10.43-10.43c-.06-5.613-4.598-10.15-10.21-10.21.14 4.57.259 6.656 1.88 8.33 1.674 1.621 3.76 1.732 8.33 1.88M11.89 1.68C6.277 1.74 1.74 6.277 1.68 11.89c4.57-.14 6.656-.259 8.33-1.88 1.621-1.674 1.732-3.76 1.88-8.33"/></svg>
    );
  },
);

DzenBlack.displayName = 'DzenBlack';
