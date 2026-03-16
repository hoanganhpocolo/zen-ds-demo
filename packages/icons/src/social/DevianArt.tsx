import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const DevianArt = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#00D159" d="M18.404 5.239v-3.56h-3.915l-.213.392-1.78 2.812-.569.711H5.593v5.338H9.15l.356.392-3.914 7.224v3.772h3.914l.214-.392 1.921-3.38.356-.498h6.406v-4.982h-3.559l-.356-.356z"/></svg>
    );
  },
);

DevianArt.displayName = 'DevianArt';
