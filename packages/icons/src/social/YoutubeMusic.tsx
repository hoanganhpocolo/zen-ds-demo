import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const YoutubeMusic = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="red" d="M12 22.32c5.7 0 10.32-4.62 10.32-10.32S17.7 1.68 12 1.68 1.68 6.3 1.68 12 6.3 22.32 12 22.32"/><path fill="#fff" d="M12 7.075a4.925 4.925 0 1 1 .001 9.852A4.925 4.925 0 0 1 12 7.075m0-.47a5.395 5.395 0 1 0 .002 10.791A5.395 5.395 0 0 0 12 6.606"/><path fill="#fff" d="m10.124 14.697 4.573-2.814-4.573-2.58z"/></svg>
    );
  },
);

YoutubeMusic.displayName = 'YoutubeMusic';
