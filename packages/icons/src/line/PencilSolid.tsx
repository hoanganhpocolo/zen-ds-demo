import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PencilSolid = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21.5 22h-10v-2h10zM15.408 3.13a3.862 3.862 0 0 1 5.461 5.462L9.774 19.688a1 1 0 0 1-.394.243l-6.053 2.017a1.01 1.01 0 0 1-1.275-1.275l2.017-6.053c.05-.148.133-.283.244-.393zM4.604 19.397 7.5 18.5l-2-2z"/></svg>
    );
  },
);

PencilSolid.displayName = 'PencilSolid';
