import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Link01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7.303 11.935 4.986 14.25a3.368 3.368 0 0 0 4.763 4.763l2.316-2.317 1.415 1.414-2.317 2.317a5.368 5.368 0 0 1-7.59-7.591l2.316-2.316z"/><path fill="currentColor" d="m16.182 9.233-6.564 6.562-1.414-1.414 6.564-6.563z"/><path fill="currentColor" d="M12.837 3.572a5.367 5.367 0 1 1 7.59 7.591l-2.316 2.317-1.414-1.415 2.317-2.316a3.368 3.368 0 0 0-4.763-4.763l-2.316 2.317-1.414-1.414z"/></svg>
    );
  },
);

Link01.displayName = 'Link01';
