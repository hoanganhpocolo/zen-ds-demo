import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FaceWink = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18m4.843 11.249a5.002 5.002 0 0 1-9.686 0l1.938-.498a3.001 3.001 0 0 0 5.81 0zM10 11H6V9h4zm5.5-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/></svg>
    );
  },
);

FaceWink.displayName = 'FaceWink';
