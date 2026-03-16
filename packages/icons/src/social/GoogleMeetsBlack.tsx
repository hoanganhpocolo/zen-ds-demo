import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GoogleMeetsBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M6.515 3.906 1.68 8.515v10.23c0 .745.633 1.349 1.415 1.349h13.562c.782 0 1.415-.604 1.415-1.349V15.84l3.104 2.426c.465.346 1.144.03 1.144-.533V6.38c0-.57-.695-.883-1.158-.522l-3.09 2.415V5.255c0-.746-.633-1.35-1.415-1.35zm0 4.609v6.97h6.84v-6.97z" clipRule="evenodd"/></svg>
    );
  },
);

GoogleMeetsBlack.displayName = 'GoogleMeetsBlack';
