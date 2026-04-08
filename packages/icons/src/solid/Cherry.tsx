import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Cherry = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19.607 1.973a12 12 0 0 1 .45.028q.018 0 .029.003h.013L20 3l.1-.995a1 1 0 0 1 .788 1.456l-.069.112v.001l-.005.008a5 5 0 0 0-.128.191 25 25 0 0 0-1.535 2.724c-.662 1.37-1.288 3.006-1.537 4.615a5.5 5.5 0 1 1-2.017-.038c.266-1.999 1.028-3.945 1.753-5.446.3-.624.602-1.183.87-1.652-.9.04-2.06.166-3.275.49-2.075.553-4.235 1.658-5.596 3.855a5.52 5.52 0 0 1 2.723 2.126A7.49 7.49 0 0 0 9 16.5a7.5 7.5 0 0 0 .324 2.186 5.5 5.5 0 1 1-2.09-10.68C8.888 4.75 11.84 3.225 14.43 2.535a17.7 17.7 0 0 1 5.177-.56"/></svg>
    );
  },
);

Cherry.displayName = 'Cherry';
