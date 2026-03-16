import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const LockUnlocked01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.82.346a6 6 0 0 1 7.364 4.217l-1.931.525a4 4 0 1 0-7.72 2.097L7.755 8H18a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7a4 4 0 0 1 3.686-3.987l-.082-.304A6 6 0 0 1 9.82.346M12 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></svg>
    );
  },
);

LockUnlocked01.displayName = 'LockUnlocked01';
