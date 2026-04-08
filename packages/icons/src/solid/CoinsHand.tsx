import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CoinsHand = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M20.899 10.03a1.273 1.273 0 0 1 2.327.977l-1.721 6.308A5 5 0 0 1 16.681 21H8.35a1 1 0 0 0-.625.219l-1.49 1.192a1 1 0 0 1-1.368-.112l-3.233-3.594a1 1 0 0 1 .036-1.376l5.157-5.157A4 4 0 0 1 9.656 11H15.5a1.5 1.5 0 0 1 0 3h-3a.5.5 0 0 0 0 1h4.926a1 1 0 0 0 .863-.496zM14.868 1a3.845 3.845 0 0 1 3.846 3.843 3.845 3.845 0 0 1-3.847 3.843 3.845 3.845 0 0 1-3.846-3.843A3.845 3.845 0 0 1 14.868 1m0 1.922a1.922 1.922 0 1 0 1.922 1.92c0-1.06-.86-1.92-1.923-1.92"/></svg>
    );
  },
);

CoinsHand.displayName = 'CoinsHand';
