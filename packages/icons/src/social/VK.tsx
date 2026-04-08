import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const VK = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#07F" d="M1.68 11.587c0-4.67 0-7.005 1.45-8.456C4.583 1.68 6.918 1.68 11.588 1.68h.826c4.67 0 7.005 0 8.456 1.45 1.451 1.452 1.451 3.787 1.451 8.457v.826c0 4.67 0 7.005-1.45 8.456-1.452 1.45-3.787 1.45-8.457 1.45h-.826c-4.67 0-7.005 0-8.456-1.45s-1.45-3.786-1.45-8.456z"/><path fill="#fff" d="M12.662 16.55c-4.704 0-7.387-3.226-7.499-8.592H7.52c.078 3.939 1.815 5.607 3.191 5.951V7.958h2.219v3.397c1.359-.146 2.786-1.694 3.268-3.397h2.219c-.37 2.098-1.918 3.646-3.019 4.283 1.1.516 2.864 1.866 3.535 4.308H16.49c-.524-1.634-1.832-2.898-3.56-3.07v3.07z"/></svg>
    );
  },
);

VK.displayName = 'VK';
