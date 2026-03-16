import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ZapFast = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14.065 2.44c.839-.933 2.435-.354 2.435.944v6.594l5.155.019c1.188.005 1.83 1.393 1.066 2.302l-7.75 9.207c-.841.998-2.47.403-2.471-.902V15H7.309c-1.16 0-1.816-1.328-1.114-2.25l7.792-10.215zM8.521 13H13.5a1 1 0 0 1 1 1v4.96l5.863-6.968-4.867-.017a1 1 0 0 1-.996-1V5.16zM7.069 9H1V7h6.07zm2.028-5H1V2h8.097z"/></svg>
    );
  },
);

ZapFast.displayName = 'ZapFast';
