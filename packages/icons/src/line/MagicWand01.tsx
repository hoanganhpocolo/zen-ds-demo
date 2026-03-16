import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MagicWand01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.793 6.793a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-11.5 11.5a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414zM3.414 19 5 20.586 11.586 14 10 12.414zm18.293-4.707-1.414 1.414-2.5-2.5 1.414-1.414zM11.414 11 13 12.586l2.086-2.086L13.5 8.914zM23 10h-3V8h3zM12.207 4.793l-1.414 1.414-2.5-2.5 1.414-1.414zm9.5-1.086-2.5 2.5-1.414-1.414 2.5-2.5zM16 4h-2V1h2z"/></svg>
    );
  },
);

MagicWand01.displayName = 'MagicWand01';
