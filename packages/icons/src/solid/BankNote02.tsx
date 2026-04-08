import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const BankNote02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm-7.872 4.853a2.48 2.48 0 0 0-1.38.726 2.58 2.58 0 0 0-.72 1.792c0 .666.255 1.312.72 1.792a2.47 2.47 0 0 0 1.774.758h1.013a.67.67 0 0 1 .48.209.78.78 0 0 1 .213.54c0 .21-.08.405-.213.543a.67.67 0 0 1-.48.208h-3.24v1.8h1.833V17h1.8v-.81a2.48 2.48 0 0 0 1.382-.727c.463-.48.718-1.126.718-1.792a2.58 2.58 0 0 0-.718-1.792 2.47 2.47 0 0 0-1.775-.758h-1.014a.67.67 0 0 1-.479-.208.78.78 0 0 1-.214-.542.78.78 0 0 1 .214-.542.67.67 0 0 1 .48-.208h2.773v-1.8h-1.366v-.86h-1.801zM4.5 12.9H7v-1.8H4.5zm12.5 0h2.5v-1.8H17z"/></svg>
    );
  },
);

BankNote02.displayName = 'BankNote02';
