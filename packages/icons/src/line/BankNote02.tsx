import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BankNote02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM5 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm7.929 2.821h1.366v1.8H11.52a.67.67 0 0 0-.479.208.78.78 0 0 0-.214.542c0 .209.08.404.214.542a.67.67 0 0 0 .48.208h1.013c.672 0 1.31.276 1.775.758a2.58 2.58 0 0 1 .718 1.792c0 .666-.255 1.312-.718 1.792a2.48 2.48 0 0 1-1.381.726V17h-1.801v-.78H9.295v-1.8h3.24c.174 0 .347-.07.48-.207a.78.78 0 0 0 .213-.542.78.78 0 0 0-.213-.541.67.67 0 0 0-.48-.21h-1.014a2.46 2.46 0 0 1-1.774-.757 2.58 2.58 0 0 1-.719-1.792c0-.666.255-1.311.72-1.792a2.48 2.48 0 0 1 1.38-.726v-.891h1.8zM7 12.901H4.5V11.1H7zm12.5 0H17V11.1h2.5z"/></svg>
    );
  },
);

BankNote02.displayName = 'BankNote02';
