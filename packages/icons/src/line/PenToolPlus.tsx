import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PenToolPlus = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M5 20h2v2H5v2H3v-2H1v-2h2v-2h2zM17.697.628c.265 0 .52.106.707.294l4.733 4.732a1 1 0 0 1 0 1.414l-1.435 1.434a9.37 9.37 0 0 1-2.706 7.44l-.96.96a1.84 1.84 0 0 1-1.178.534l-8.558.57c-.288.02-.57-.087-.775-.29l-1.182-1.183a1 1 0 0 1-.291-.773l.571-8.56.019-.165c.06-.381.24-.736.514-1.012l.961-.96a9.37 9.37 0 0 1 7.438-2.707L16.99.922a1 1 0 0 1 .707-.294M16.63 4.11a1 1 0 0 1-.839.285l-.078-.01A7.37 7.37 0 0 0 9.53 6.478l-.918.916-.473 7.11 2.941-2.941A1.997 1.997 0 0 1 13 9a2 2 0 1 1 0 4q-.243-.002-.47-.059l-2.976 2.977 7.11-.474.918-.917a7.37 7.37 0 0 0 2.083-6.25 1 1 0 0 1 .283-.848l1.068-1.068-3.319-3.318z"/></svg>
    );
  },
);

PenToolPlus.displayName = 'PenToolPlus';
