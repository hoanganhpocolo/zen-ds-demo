import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const StickerCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.17 1c5.008 0 9.245 3.295 10.664 7.834l.016.05c.068.218.157.5.149.837-.007.28-.083.59-.207.842-.15.303-.378.53-.557.707l-.046.046-.214.215-.178.179-.024.025-10.038 10.037-.025.025-.192.19-.202.202-.046.046c-.177.18-.405.407-.707.557-.252.124-.562.2-.843.207-.337.008-.619-.08-.836-.15l-.05-.015C4.296 21.415 1 17.178 1 12.17 1 6 6.001 1 12.17 1m0 2.01a9.16 9.16 0 0 0-9.16 9.16 9.165 9.165 0 0 0 5.761 8.51 11 11 0 0 1-.026-.764c0-6.17 5.002-11.17 11.171-11.17q.384-.001.764.025a9.165 9.165 0 0 0-8.51-5.761"/></svg>
    );
  },
);

StickerCircle.displayName = 'StickerCircle';
