import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MedicalCross = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13.654 2.004A3 3 0 0 1 16.5 5v2.5H19a3 3 0 0 1 3 3v3l-.004.154a3 3 0 0 1-2.842 2.842L19 16.5h-2.5V19l-.004.154a3 3 0 0 1-2.842 2.842L13.5 22h-3a3 3 0 0 1-3-3v-2.5H5a3 3 0 0 1-2.996-2.846L2 13.5v-3a3 3 0 0 1 3-3h2.5V5a3 3 0 0 1 3-3h3zM10.5 4a1 1 0 0 0-1 1v3.5a1 1 0 0 1-1 1H5a1 1 0 0 0-1 1v3l.005.102A1 1 0 0 0 5 14.5h3.5a1 1 0 0 1 1 1V19l.005.102A1 1 0 0 0 10.5 20h3l.102-.005a1 1 0 0 0 .893-.893L14.5 19v-3.5a1 1 0 0 1 1-1H19a1 1 0 0 0 .995-.898L20 13.5v-3a1 1 0 0 0-.898-.995L19 9.5h-3.5a1 1 0 0 1-1-1V5l-.005-.103a1 1 0 0 0-.893-.892L13.5 4z"/></svg>
    );
  },
);

MedicalCross.displayName = 'MedicalCross';
