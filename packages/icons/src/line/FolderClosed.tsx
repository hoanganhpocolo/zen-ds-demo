import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FolderClosed = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.5 2a4 4 0 0 1 3.2 1.6l1.2 1.6a2 2 0 0 0 1.6.8H19a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM3 18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H3zm9-8.45a4.45 4.45 0 1 1 0 8.9 4.45 4.45 0 0 1 0-8.9m-2.33 3.413a2.55 2.55 0 0 0 3.367 3.367zM12 11.45c-.342 0-.669.068-.967.19l3.327 3.327A2.55 2.55 0 0 0 12 11.45M5 4a2 2 0 0 0-2 2h9l-.9-1.2A2 2 0 0 0 9.5 4z"/></svg>
    );
  },
);

FolderClosed.displayName = 'FolderClosed';
