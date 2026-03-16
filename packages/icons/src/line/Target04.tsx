import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Target04 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 3a8.96 8.96 0 0 0-6.363 2.64A9 9 0 0 0 3 12.018a9 9 0 0 0 3.048 6.763c3.509 3.103 9.004 2.93 12.316-.387C20.106 16.648 21 14.517 21 12.018h2c0 3.032-1.106 5.67-3.22 7.789-4.06 4.066-10.756 4.277-15.057.473A11 11 0 0 1 1 12.018c0-3.042 1.232-5.799 3.222-7.791A10.96 10.96 0 0 1 12 1zm0 5a3.98 3.98 0 0 0-2.827 1.173A4 4 0 0 0 8 12.009c0 1.198.523 2.272 1.355 3.008 1.557 1.375 4.004 1.299 5.473-.173.778-.78 1.172-1.719 1.172-2.835h2c0 1.65-.607 3.095-1.757 4.248-2.216 2.22-5.864 2.334-8.213.258A6 6 0 0 1 6 12.009a6 6 0 0 1 1.757-4.25A5.98 5.98 0 0 1 12 6zm5.543-6.707A1 1 0 0 1 19.25 2v2.75H22a1 1 0 0 1 .707 1.707l-3.125 3.25a1 1 0 0 1-.707.293h-3.46l-1.485 1.483q.068.248.07.517a2 2 0 1 1-1.484-1.93L14 8.585V5.25a1 1 0 0 1 .293-.707zM16 5.664V8h2.46l1.126-1.25H17.25V4.414z"/></svg>
    );
  },
);

Target04.displayName = 'Target04';
