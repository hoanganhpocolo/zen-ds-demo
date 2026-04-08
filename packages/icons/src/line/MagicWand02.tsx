import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MagicWand02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.707 12.707 3.414 22 2 20.586l9.293-9.293zM16 17h-2v-4h2zm4.207-4.207-1.414 1.414-2-2 1.414-1.414zM11 10H7V8h4zm12 0h-4V8h4zm-9.793-4.207-1.414 1.414-2-2 1.414-1.414zm7-.586-2 2-1.414-1.414 2-2zM16 5h-2V1h2z"/></svg>
    );
  },
);

MagicWand02.displayName = 'MagicWand02';
