import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LinkBroken02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M19.014 4.986a3.37 3.37 0 0 0-4.763 0l-2.316 2.317-1.414-1.415 2.316-2.316a5.367 5.367 0 1 1 7.59 7.591l-2.315 2.316-1.414-1.414 2.316-2.316a3.37 3.37 0 0 0 0-4.763m-2.832 4.247-6.563 6.563-1.414-1.415 6.562-6.562zm-8.88 2.702-2.316 2.316a3.368 3.368 0 1 0 4.763 4.763l2.316-2.316 1.414 1.414-2.316 2.316a5.367 5.367 0 1 1-7.59-7.59l2.315-2.317zM9 1v3H7V1zm-5.793.793 2.5 2.5-1.414 1.414-2.5-2.5zM1 7h3v2H1zm14 16v-3h2v3zm5.793-.793-2.5-2.5 1.414-1.414 2.5 2.5zM23 17h-3v-2h3z" clipRule="evenodd"/></svg>
    );
  },
);

LinkBroken02.displayName = 'LinkBroken02';
