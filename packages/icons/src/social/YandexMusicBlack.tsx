import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const YandexMusicBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.12 1.824a10.257 10.257 0 1 0 10.564 6.711l.002.017-2.6 2.09a7.18 7.18 0 1 1-7.965-5.723z"/><path fill="currentColor" d="m19.737 5.27-.01-.027a10.25 10.25 0 0 0-5.734-3.276v7.18a3.488 3.488 0 1 0 1.539 2.893V5.762A7.2 7.2 0 0 1 18 8.03z"/></svg>
    );
  },
);

YandexMusicBlack.displayName = 'YandexMusicBlack';
