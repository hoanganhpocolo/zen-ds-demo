import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CloudSun02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11 5a6 6 0 0 1 5.99 5.662 5.3 5.3 0 0 1 1.293 2.182c2.64.367 4.717 2.56 4.717 5.277 0 2.873-2.27 4.566-4.818 4.872l-.06.007H7.878l-.06-.007C5.27 22.687 3 20.994 3 18.121c0-1.925 1.043-3.587 2.59-4.523A6 6 0 0 1 11 5m2 6c-1.815 0-3.264 1.303-3.474 2.918l-.113.875-.913-.003h-.002C6.53 14.791 5 16.318 5 18.121 5 19.65 6.142 20.758 8 21h10c1.858-.242 3-1.35 3-2.879 0-1.803-1.53-3.33-3.498-3.331H17.5l-.913.003-.113-.875C16.264 12.303 14.815 11 13 11m-2-4a4 4 0 0 0-3.53 5.884q.122-.023.247-.04C8.386 10.604 10.519 9 13 9c.55 0 1.082.079 1.586.226A4 4 0 0 0 11 7m-8 5H1v-2h2zm18 0h-2v-2h2zm-2.172-7.414L17.414 6 16 4.586l1.414-1.414zM5.914 4.5 4.5 5.914 3 4.414 4.414 3zM12 2.929h-2V1h2z"/></svg>
    );
  },
);

CloudSun02.displayName = 'CloudSun02';
