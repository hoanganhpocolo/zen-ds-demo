import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const AtSign = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M15.143 2A7.86 7.86 0 0 1 23 9.857v4.249a3.608 3.608 0 0 1-6.753 1.772A5.8 5.8 0 0 1 12 17.714c-3.18 0-5.782-2.545-5.782-5.714S8.82 6.286 12 6.286c1.443 0 2.766.524 3.782 1.392V6h2v8.105a1.61 1.61 0 0 0 3.218 0V9.857A5.86 5.86 0 0 0 15.143 4H11a8 8 0 1 0 0 16h6.218v2H11C5.477 22 1 17.523 1 12S5.477 2 11 2zM12 8.286c-2.103 0-3.782 1.676-3.782 3.714s1.68 3.714 3.782 3.714 3.782-1.676 3.782-3.714S14.102 8.286 12 8.286" clipRule="evenodd"/></svg>
    );
  },
);

AtSign.displayName = 'AtSign';
