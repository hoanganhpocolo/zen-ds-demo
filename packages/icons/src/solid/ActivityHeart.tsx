import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ActivityHeart = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M12.495 3.886c2.32-2.514 6.118-2.514 8.439 0 3.003 3.255 2.382 7.336.368 10.668-2.008 3.32-5.531 6.185-8.972 7.39a1 1 0 0 1-.66 0c-3.44-1.204-6.963-4.07-8.97-7.39C.684 11.222.062 7.14 3.065 3.886c2.32-2.514 6.119-2.514 8.439 0l.495.536zM11.08 9.003a1 1 0 0 0-.856.367l-.081.116-1.21 2.014H7v2h2.5a1 1 0 0 0 .857-.485l.462-.772 1.252 3.128a1.002 1.002 0 0 0 1.787.144l1.208-2.015H17v-2h-2.5a1 1 0 0 0-.783.378l-.074.107-.463.771-1.251-3.127a1 1 0 0 0-.849-.626" clipRule="evenodd"/></svg>
    );
  },
);

ActivityHeart.displayName = 'ActivityHeart';
