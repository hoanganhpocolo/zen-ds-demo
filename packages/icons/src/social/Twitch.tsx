import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Twitch = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#fff" d="m19.372 11.263-2.948 2.948h-2.949l-2.58 2.58v-2.58H7.578V3.154h11.794z"/><path fill="#9146FF" d="M6.84 1.68 3.156 5.366v13.268h4.423v3.686l3.686-3.686h2.948L20.846 12V1.68zm12.532 9.583-2.948 2.948h-2.949l-2.58 2.58v-2.58H7.578V3.154h11.794z"/><path fill="#9146FF" d="M17.16 5.734h-1.473v4.423h1.474zm-4.054 0h-1.474v4.423h1.474z"/></svg>
    );
  },
);

Twitch.displayName = 'Twitch';
