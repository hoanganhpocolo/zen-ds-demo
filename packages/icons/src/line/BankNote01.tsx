import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BankNote01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7 3c2.143 0 3.627.407 4.962.788 1.318.377 2.445.712 4.038.712 1.66 0 3.177-.455 4.278-.874C21.556 3.14 23 4.03 23 5.476v13.11c0 .496-.204 1.178-.875 1.531l-.168.083c-.886.415-2.474.8-4.957.8-2.143 0-3.627-.407-4.962-.788C10.72 19.835 9.593 19.5 8 19.5c-1.66 0-3.178.455-4.278.874C2.444 20.86 1 19.97 1 18.524V5.413c0-.496.204-1.178.875-1.531l.168-.083C2.929 3.385 4.517 3 7 3m0 2c-2.181 0-3.427.323-4 .563v12.945l.01-.003C4.217 18.046 5.994 17.5 8 17.5c1.906 0 3.28.415 4.587.788 1.29.369 2.556.712 4.413.712 2.182 0 3.427-.323 4-.562V5.492l-.01.003C19.783 5.954 18.006 6.5 16 6.5c-1.906 0-3.28-.415-4.587-.788C10.123 5.343 8.857 5 7 5m5 3.552c1.933 0 3.5 1.571 3.5 3.51a3.506 3.506 0 0 1-3.5 3.51 3.506 3.506 0 0 1-3.5-3.51 3.505 3.505 0 0 1 3.5-3.51m7 7.017h-2v-5.516h2zM7 14.07H5V9.056h2zm5-3.512c-.828 0-1.5.673-1.5 1.504 0 .83.672 1.504 1.5 1.504s1.5-.674 1.5-1.505-.672-1.503-1.5-1.503"/></svg>
    );
  },
);

BankNote01.displayName = 'BankNote01';
