import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BankNote01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7 3c2.143 0 3.627.407 4.962.788 1.318.377 2.445.712 4.038.712 1.66 0 3.177-.455 4.278-.874C21.556 3.14 23 4.03 23 5.476v13.11c0 .496-.204 1.178-.875 1.531l-.168.083c-.886.415-2.474.8-4.957.8-2.143 0-3.627-.407-4.962-.788C10.72 19.835 9.593 19.5 8 19.5c-1.66 0-3.178.455-4.278.874C2.444 20.86 1 19.97 1 18.524V5.413c0-.496.204-1.178.875-1.531l.168-.083C2.929 3.385 4.517 3 7 3m5 5.552a3.505 3.505 0 0 0-3.5 3.51 3.506 3.506 0 0 0 3.5 3.51c1.933 0 3.5-1.572 3.5-3.51a3.505 3.505 0 0 0-3.5-3.51m5 7.017h2v-5.516h-2zM5 14.07h2V9.056H5zm7-3.512c.828 0 1.5.673 1.5 1.504 0 .83-.672 1.504-1.5 1.504s-1.5-.674-1.5-1.505.672-1.503 1.5-1.503"/></svg>
    );
  },
);

BankNote01.displayName = 'BankNote01';
