import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CursorClick = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7.09 9.297c-.44-1.32.764-2.58 2.079-2.243l.128.037 12.51 4.17c1.522.507 1.61 2.626.136 3.258l-5.198 2.226-2.226 5.198c-.632 1.474-2.751 1.386-3.258-.135zm-.383 4.41L4.434 15.98 3.02 14.567l2.273-2.273zM4.5 10.5H1v-2h3.5zm2.207-5.207L5.293 6.707 3.086 4.5 4.5 3.086zM16 4.414l-2.293 2.293-1.414-1.414L14.586 3zm-5.5.086h-2V1h2z"/></svg>
    );
  },
);

CursorClick.displayName = 'CursorClick';
