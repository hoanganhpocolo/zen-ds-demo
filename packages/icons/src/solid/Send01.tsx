import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Send01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19.5 1.755c1.563-.52 3.05.966 2.529 2.53l-5.607 16.82c-.582 1.744-3.012 1.845-3.736.155l-2.57-5.997 7.252-7.433-1.431-1.397-7.163 7.343-6.25-2.678c-1.69-.725-1.59-3.155.155-3.736z"/></svg>
    );
  },
);

Send01.displayName = 'Send01';
