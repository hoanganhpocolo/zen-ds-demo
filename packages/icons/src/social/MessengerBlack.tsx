import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MessengerBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M1.68 11.69C1.68 5.94 6.187 1.68 12 1.68s10.32 4.262 10.32 10.013c0 5.75-4.507 10.01-10.32 10.01-1.045 0-2.046-.14-2.988-.398a.83.83 0 0 0-.552.042l-2.048.903a.826.826 0 0 1-1.159-.73l-.056-1.837a.82.82 0 0 0-.276-.588C2.913 17.299 1.68 14.698 1.68 11.69m7.154-1.88-3.031 4.808c-.292.462.276.98.71.65l3.255-2.471a.62.62 0 0 1 .746-.003l2.412 1.809a1.55 1.55 0 0 0 2.24-.413L18.2 9.384c.289-.462-.279-.983-.712-.653l-3.256 2.472a.62.62 0 0 1-.746.002l-2.412-1.809a1.55 1.55 0 0 0-2.24.413" clipRule="evenodd"/></svg>
    );
  },
);

MessengerBlack.displayName = 'MessengerBlack';
