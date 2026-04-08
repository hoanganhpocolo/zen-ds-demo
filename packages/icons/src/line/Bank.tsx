import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Bank = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.426 2.128a2 2 0 0 1 1.148 0l9 2.7A2 2 0 0 1 23 6.744V9a2 2 0 0 1-2 2h-.5v5h.5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.5v-5H3a2 2 0 0 1-2-2V6.744c0-.883.58-1.662 1.426-1.916zM3 20h18v-2H3zm12.5-9v5h3v-5zm-10 5h3v-5h-3zm5 0h3v-5h-3zM3 6.744V9h18V6.744l-9-2.7z"/></svg>
    );
  },
);

Bank.displayName = 'Bank';
