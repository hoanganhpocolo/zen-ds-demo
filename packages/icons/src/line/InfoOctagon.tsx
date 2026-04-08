import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const InfoOctagon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 17.5h-2V11h2zm-1-11a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/><path fill="currentColor" fillRule="evenodd" d="M14.758 1.5a4 4 0 0 1 2.828 1.172l3.742 3.742A4 4 0 0 1 22.5 9.242v5.516a4 4 0 0 1-1.172 2.828l-3.742 3.742a4 4 0 0 1-2.828 1.172H9.667a4 4 0 0 1-2.703-1.052l-4.167-3.82A4 4 0 0 1 1.5 14.682v-5.44a4 4 0 0 1 1.172-2.828l3.742-3.742A4 4 0 0 1 9.242 1.5zm-5.516 2a2 2 0 0 0-1.414.586L4.086 7.828A2 2 0 0 0 3.5 9.242v5.439a2 2 0 0 0 .648 1.473l4.167 3.82a2 2 0 0 0 1.352.526h5.09c.531 0 1.04-.211 1.415-.586l3.742-3.742a2 2 0 0 0 .586-1.414V9.242a2 2 0 0 0-.586-1.414l-3.742-3.742a2 2 0 0 0-1.414-.586z" clipRule="evenodd"/></svg>
    );
  },
);

InfoOctagon.displayName = 'InfoOctagon';
