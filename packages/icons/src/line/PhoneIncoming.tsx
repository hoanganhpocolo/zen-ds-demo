import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PhoneIncoming = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7.823 2A2 2 0 0 1 9.68 3.257l1.504 3.76a2 2 0 0 1-.443 2.157l-.986.984a12.9 12.9 0 0 0 4.086 4.086l.985-.985a2 2 0 0 1 2.157-.443l3.76 1.504A2 2 0 0 1 22 16.177V19a3 3 0 0 1-3 3C9.611 22 2 14.389 2 5a3 3 0 0 1 3-3zM5 4a1 1 0 0 0-1 1c0 8.284 6.716 15 15 15a1 1 0 0 0 1-1v-2.823l-3.759-1.503-1.363 1.362c-.42.42-1.069.507-1.584.213a14.9 14.9 0 0 1-5.543-5.543 1.32 1.32 0 0 1 .213-1.584L9.326 7.76 7.823 4zm16.999-.586L17.975 7.44h3.085v2h-5.5a1 1 0 0 1-1-1v-5.5h2v3.086L20.585 2z"/></svg>
    );
  },
);

PhoneIncoming.displayName = 'PhoneIncoming';
