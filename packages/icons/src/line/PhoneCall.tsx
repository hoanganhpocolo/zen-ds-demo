import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PhoneCall = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M6.823 3A2 2 0 0 1 8.68 4.257l1.504 3.76a2 2 0 0 1-.443 2.157l-.986.984a12.9 12.9 0 0 0 4.086 4.086l.985-.985a2 2 0 0 1 2.157-.443l3.76 1.504A2 2 0 0 1 21 17.177V20a3 3 0 0 1-3 3C8.611 23 1 15.389 1 6a3 3 0 0 1 3-3zM4 5a1 1 0 0 0-1 1c0 8.284 6.716 15 15 15a1 1 0 0 0 1-1v-2.823l-3.759-1.503-1.363 1.362c-.42.42-1.069.507-1.584.213a14.9 14.9 0 0 1-5.543-5.543 1.32 1.32 0 0 1 .213-1.584L8.326 8.76 6.823 5zm9 1a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3zm0-4a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7z"/></svg>
    );
  },
);

PhoneCall.displayName = 'PhoneCall';
