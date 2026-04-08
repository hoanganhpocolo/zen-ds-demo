import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GooglePodcastBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 5.666a1.29 1.29 0 0 1-1.288-1.29V2.97a1.29 1.29 0 0 1 2.578 0v1.408A1.29 1.29 0 0 1 12 5.666m0 12.668a1.29 1.29 0 0 0-1.288 1.289v1.408a1.29 1.29 0 0 0 2.578 0v-1.408A1.29 1.29 0 0 0 12 18.334m-3.284-1.408v-1.408a1.29 1.29 0 0 0-2.578 0v1.408a1.29 1.29 0 0 0 2.578 0m0-5.247V7.074a1.29 1.29 0 0 0-2.578 0v4.605a1.29 1.29 0 0 0 2.578 0m-4.458-.381v1.408a1.29 1.29 0 1 1-2.578-.004v-1.408a1.29 1.29 0 1 1 2.578.004m15.484 0a1.29 1.29 0 0 1 2.578 0v1.445a1.286 1.286 0 0 1-1.289 1.252 1.29 1.29 0 0 1-1.289-1.252zm-4.456-2.816a1.29 1.29 0 0 0 2.578 0V7.074a1.29 1.29 0 0 0-2.578 0zm0 3.871a1.29 1.29 0 0 1 2.578 0v4.573a1.29 1.29 0 0 1-2.578 0zm-1.996 3.399V8.248a1.29 1.29 0 0 0-2.578 0v7.504a1.29 1.29 0 0 0 2.578 0"/></svg>
    );
  },
);

GooglePodcastBlack.displayName = 'GooglePodcastBlack';
