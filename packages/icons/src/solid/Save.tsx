import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Save = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M15.078 2a4 4 0 0 1 3.096 1.467l2.922 3.571A4 4 0 0 1 22 9.571V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM9 13a2 2 0 0 0-2 2v5h10v-5a2 2 0 0 0-2-2zm4-9v3H8V4H6v3a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V4z" clipRule="evenodd"/></svg>
    );
  },
);

Save.displayName = 'Save';
