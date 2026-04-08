import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FilterFunnel = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M20 2a2 2 0 0 1 2 2v1.687a4 4 0 0 1-1.287 2.939L15.5 13.438v4.961c0 .74-.408 1.418-1.06 1.766l-3 1.599c-1.332.71-2.94-.255-2.94-1.765v-6.561L3.287 8.625A4 4 0 0 1 2 5.686V4a2 2 0 0 1 2-2zM4 5.687a2 2 0 0 0 .644 1.47l5.535 5.109A1 1 0 0 1 10.5 13v6.999l3-1.6V13a1 1 0 0 1 .321-.734l5.535-5.11A2 2 0 0 0 20 5.686V4H4z" clipRule="evenodd"/></svg>
    );
  },
);

FilterFunnel.displayName = 'FilterFunnel';
