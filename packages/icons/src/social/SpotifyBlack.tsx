import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const SpotifyBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.963 1.675c-5.682 0-10.288 4.606-10.288 10.288S6.28 22.251 11.963 22.251s10.289-4.606 10.289-10.288S17.646 1.675 11.963 1.675m4.719 14.839a.64.64 0 0 1-.883.212c-2.415-1.475-5.456-1.81-9.037-.991a.642.642 0 0 1-.286-1.251c3.92-.896 7.281-.51 9.993 1.147.302.186.398.58.213.883m1.259-2.802a.8.8 0 0 1-1.103.264c-2.766-1.7-6.982-2.192-10.253-1.2a.803.803 0 0 1-.466-1.534c3.737-1.134 8.382-.585 11.558 1.367a.8.8 0 0 1 .264 1.103m.108-2.917c-3.316-1.97-8.787-2.151-11.953-1.19a.962.962 0 1 1-.558-1.842c3.634-1.103 9.675-.89 13.493 1.376a.961.961 0 1 1-.982 1.656"/></svg>
    );
  },
);

SpotifyBlack.displayName = 'SpotifyBlack';
