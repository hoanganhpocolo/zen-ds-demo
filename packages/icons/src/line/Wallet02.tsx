import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Wallet02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14.027 2.162A3 3 0 0 1 18 5v1a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H3a1 1 0 0 1-1-1V7c0-.452.3-.834.71-.958zM4 20h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H4zm12.5-10a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16 5a1 1 0 0 0-1.324-.946L9 6h7z"/></svg>
    );
  },
);

Wallet02.displayName = 'Wallet02';
