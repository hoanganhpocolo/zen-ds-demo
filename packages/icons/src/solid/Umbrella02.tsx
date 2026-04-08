import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Umbrella02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M4.222 4.222C7.908.536 13.557.014 17.8 2.651c.704.437 1.368.961 1.977 1.571 3.76 3.759 4.228 9.56 1.41 13.83a1 1 0 0 1-1.328.318l-7.79-4.428L8.191 21H21v2H1v-2h4.91l4.422-8.046-7.826-4.45A1 1 0 0 1 2.1 7.2a11 11 0 0 1 2.12-2.977m12.36.251c-1.776.057-5.148 1.121-7.413 5.519l5.95 3.381c2.177-4.141 1.921-7.417 1.463-8.9"/></svg>
    );
  },
);

Umbrella02.displayName = 'Umbrella02';
