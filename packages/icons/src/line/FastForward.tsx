import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FastForward = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.5 6.744c0-2.13 2.496-3.285 4.12-1.905l6.183 5.257a2.5 2.5 0 0 1 0 3.81l-6.184 5.255c-1.623 1.38-4.119.227-4.119-1.904v-3.095l-5.88 5c-1.624 1.38-4.12.226-4.12-1.905V6.744c0-2.13 2.496-3.285 4.12-1.905l5.88 4.999zm-7.176-.382a.5.5 0 0 0-.824.382v10.513a.5.5 0 0 0 .824.38l6.184-5.256a.5.5 0 0 0 0-.762zm10 0a.5.5 0 0 0-.824.382v10.513a.5.5 0 0 0 .824.38l6.184-5.256a.5.5 0 0 0 0-.762z"/></svg>
    );
  },
);

FastForward.displayName = 'FastForward';
