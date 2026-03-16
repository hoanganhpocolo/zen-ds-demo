import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PenTool01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m4.531 2.052 10.23.682c.484.032.94.239 1.283.581l1.148 1.149a11 11 0 0 1 3.169 8.827l1.78 1.78a1 1 0 0 1 0 1.414l-5.656 5.656a1 1 0 0 1-1.414 0l-1.78-1.779a11 11 0 0 1-8.827-3.17l-1.149-1.148a2 2 0 0 1-.58-1.283l-.683-10.23a1 1 0 0 1 .29-.774l1.415-1.414c.203-.204.486-.31.774-.292m5.713 6.778a2.998 2.998 0 0 1 3.412 4.826 3 3 0 0 1-4.826-3.412L4.123 5.537l.607 9.093 1.148 1.147a9 9 0 0 0 7.553 2.557l.093-.012a1 1 0 0 1 .839.284l1.415 1.414 4.242-4.242-1.414-1.415a1 1 0 0 1-.282-.849 9 9 0 0 0-2.546-7.635L14.63 4.73l-9.093-.607zm1.998 1.998a1 1 0 1 0-1.414 1.414 1 1 0 0 0 1.414-1.414"/></svg>
    );
  },
);

PenTool01.displayName = 'PenTool01';
