import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Send01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19.5 1.754c1.563-.52 3.05.967 2.53 2.53l-5.608 16.821c-.581 1.745-3.01 1.846-3.735.155l-3.049-7.113-7.114-3.05c-1.69-.724-1.59-3.154.155-3.735zm-7.914 11.859 2.939 6.86 4.899-14.698zM3.31 9.259l6.86 2.939 7.838-7.838z"/></svg>
    );
  },
);

Send01.displayName = 'Send01';
