import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Train02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15 23H9v-2h6zm2-21a4 4 0 0 1 4 4v9a4 4 0 0 1-1.304 2.953l1.172 2.05-1.736.993-1.204-2.106-.122.029q-.391.08-.806.081H7q-.414 0-.806-.081l-.123-.03-1.203 2.107-1.736-.992 1.17-2.05A4 4 0 0 1 3 15V5.999a4 4 0 0 1 4.001-4zM8.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7 4a2 2 0 0 0-2 2v4h14V6a2 2 0 0 0-2-2z"/></svg>
    );
  },
);

Train02.displayName = 'Train02';
