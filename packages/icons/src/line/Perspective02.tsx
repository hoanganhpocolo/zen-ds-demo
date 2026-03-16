import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Perspective02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M2 4.948C2 2.302 4.522.385 7.07 1.093l12 3.333A4 4 0 0 1 22 8.281v7.439a4 4 0 0 1-2.93 3.855l-12 3.332C4.522 23.615 2 21.699 2 19.054zM4 13v6.053a2 2 0 0 0 2.535 1.928L9 20.295V13zm7 0v6.74l4-1.112V13zm6 0v5.073l1.535-.426A2 2 0 0 0 20 15.72V13zM6.535 3.02A2 2 0 0 0 4 4.948V11h5V3.704zM11 11h4V5.371L11 4.26zm6 0h3V8.28a2 2 0 0 0-1.465-1.926L17 5.927z"/></svg>
    );
  },
);

Perspective02.displayName = 'Perspective02';
