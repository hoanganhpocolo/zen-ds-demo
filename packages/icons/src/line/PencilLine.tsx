import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PencilLine = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M21.5 22h-10v-2h10zM15.408 3.13a3.862 3.862 0 0 1 5.461 5.462L9.774 19.688a1 1 0 0 1-.394.243l-6.053 2.017a1.01 1.01 0 0 1-1.275-1.275l2.017-6.053c.05-.148.133-.283.244-.393zM4.604 19.397l2.59-.863-1.727-1.726zM19.442 4.558a1.845 1.845 0 0 0-2.608 0L6.452 14.939l2.609 2.609L19.442 7.166c.72-.72.72-1.888 0-2.608"/></svg>
    );
  },
);

PencilLine.displayName = 'PencilLine';
