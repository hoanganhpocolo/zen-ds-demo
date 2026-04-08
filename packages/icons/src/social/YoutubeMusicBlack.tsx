import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const YoutubeMusicBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M12 7.074a4.925 4.925 0 1 1 .001 9.852 4.925 4.925 0 0 1 0-9.852m-1.876 7.623 4.573-2.814-4.573-2.58z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M22.32 12c0 5.7-4.62 10.32-10.32 10.32S1.68 17.7 1.68 12 6.3 1.68 12 1.68 22.32 6.3 22.32 12M12 6.605a5.395 5.395 0 1 0 .002 10.791A5.395 5.395 0 0 0 12 6.606" clipRule="evenodd"/></svg>
    );
  },
);

YoutubeMusicBlack.displayName = 'YoutubeMusicBlack';
