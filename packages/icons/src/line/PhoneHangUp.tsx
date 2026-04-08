import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PhoneHangUp = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m21.799 4.929-8.766 8.764q.393.291.808.551l.985-.985a2 2 0 0 1 2.157-.443l3.76 1.504A2 2 0 0 1 22 16.177V19a3 3 0 0 1-3 3c-4 0-7.676-1.382-10.58-3.694l-3.592 3.593-1.414-1.414 16.97-16.97zm-6.921 11.107c-.42.42-1.069.507-1.584.213a15 15 0 0 1-1.69-1.126l-1.758 1.758A14.93 14.93 0 0 0 19 20a1 1 0 0 0 1-1v-2.823l-3.759-1.503zM7.823 2A2 2 0 0 1 9.68 3.257l1.504 3.76a2 2 0 0 1-.443 2.157l-.986.984q.222.354.466.692L8.79 12.28a15 15 0 0 1-1.039-1.574 1.32 1.32 0 0 1 .213-1.584L9.326 7.76 7.823 4H5a1 1 0 0 0-1 1c0 3.395 1.129 6.526 3.03 9.04l-1.426 1.427A16.93 16.93 0 0 1 2 5a3 3 0 0 1 3-3z"/></svg>
    );
  },
);

PhoneHangUp.displayName = 'PhoneHangUp';
