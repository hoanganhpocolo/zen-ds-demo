import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const TwitchBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17.16 5.734h-1.473v4.423h1.474zm-5.528 0h1.474v4.423h-1.474z"/><path fill="currentColor" fillRule="evenodd" d="M6.84 1.68 3.156 5.366v13.268h4.423v3.686l3.686-3.686h2.948L20.846 12V1.68zm12.532 9.583-2.948 2.948h-2.949l-2.58 2.58v-2.58H7.578V3.154h11.794z" clipRule="evenodd"/></svg>
    );
  },
);

TwitchBlack.displayName = 'TwitchBlack';
