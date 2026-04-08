import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Save = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15.078 2a4 4 0 0 1 3.096 1.467l2.922 3.571A4 4 0 0 1 22 9.571V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM15 7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2v-6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 0 2-2V9.571c0-.461-.16-.909-.452-1.266l-2.922-3.572A2 2 0 0 0 15.078 4H15zM8 20h8v-6H8zM8 7h5V4H8z"/></svg>
    );
  },
);

Save.displayName = 'Save';
