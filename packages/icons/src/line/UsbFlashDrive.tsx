import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const UsbFlashDrive = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M18 1a1 1 0 0 1 1 1v6h1a1 1 0 0 1 1 1v7a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7V9a1 1 0 0 1 1-1h1V2a1 1 0 0 1 1-1zM5 16a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5v-6H5zm2-8h2V5h2v3h2V5h2v3h2V3H7z"/></svg>
    );
  },
);

UsbFlashDrive.displayName = 'UsbFlashDrive';
