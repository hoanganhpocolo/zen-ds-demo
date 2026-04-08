import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CursorBox = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.08 13.017c-.387-1.16.67-2.265 1.824-1.97l.113.032 8.936 2.98c1.336.445 1.413 2.305.12 2.86l-3.61 1.545-1.544 3.608c-.555 1.294-2.415 1.217-2.86-.119zM18 2a4 4 0 0 1 4 4v4h-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v2H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z"/></svg>
    );
  },
);

CursorBox.displayName = 'CursorBox';
