import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const IceCreamBar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6.09 2.938a5 5 0 0 1 6.857-.2l6.739 5.989a5 5 0 0 1 .38 7.096l1.42 1.42a3 3 0 0 1-4.131 4.349l-.113-.107-1.419-1.42a5 5 0 0 1-7.096-.38l-5.99-6.738a5 5 0 0 1 .201-6.856zm11.152 15.718 1.414 1.415.076.069a1.001 1.001 0 0 0 1.34-1.484l-1.416-1.414zM11.62 4.232a3 3 0 0 0-4.114.12L4.353 7.506a3 3 0 0 0-.12 4.114l1.626 1.83 3.168.187a1 1 0 0 0 1.057-1.065l-.099-1.468a2.89 2.89 0 0 1 2.18-2.992.885.885 0 0 0 .667-.778l.17-1.872z"/></svg>
    );
  },
);

IceCreamBar.displayName = 'IceCreamBar';
