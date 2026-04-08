import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const TextInput = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M20 4h-2v2h1a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4h-1v2h2v2h-6v-2h2V4h-2V2h6zm-6 14H5a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h9zm4-2h1a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-1z"/></svg>
    );
  },
);

TextInput.displayName = 'TextInput';
