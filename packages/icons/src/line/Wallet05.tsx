import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Wallet05 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M8.961 1c1.256 0 2.388.648 3.038 1.661A3.61 3.61 0 0 1 15.04 1h.154c2.198 0 3.77 1.961 3.477 4h.712c1.487 0 2.454 1.565 1.79 2.895L20.14 9.956l2.048 3.413a4 4 0 0 1 .416 3.157l-1.228 4.298A3 3 0 0 1 18.492 23H5.509a3 3 0 0 1-2.885-2.176l-1.227-4.298a4 4 0 0 1 .416-3.157L3.86 9.956 2.83 7.895A2 2 0 0 1 4.618 5h.71c-.293-2.039 1.28-4 3.479-4zM5.567 11l-2.04 3.398a2 2 0 0 0-.207 1.579l1.227 4.297A1 1 0 0 0 5.51 21h12.983a1 1 0 0 0 .961-.726l1.228-4.297a2 2 0 0 0-.208-1.579L18.434 11zm.052-2h12.763l1-2H4.62zm3.189-6a1.51 1.51 0 0 0-1.427 2h3.34l-.196-.78A1.61 1.61 0 0 0 8.96 3zm6.232 0c-.74 0-1.385.503-1.564 1.22l-.195.78h3.339a1.51 1.51 0 0 0-1.427-2z"/></svg>
    );
  },
);

Wallet05.displayName = 'Wallet05';
