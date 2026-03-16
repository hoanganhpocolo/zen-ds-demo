import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FolderClosed = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.5 2a4 4 0 0 1 3.2 1.6l1.2 1.6a2 2 0 0 0 1.6.8H19a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM12 9.55a4.44 4.44 0 0 0-3.114 1.271A4.45 4.45 0 1 0 12 9.55m1.037 6.78a2.55 2.55 0 0 1-3.367-3.367zM12 11.45a2.55 2.55 0 0 1 2.36 3.517l-3.327-3.327a2.5 2.5 0 0 1 .967-.19M5 4a2 2 0 0 0-2 2h9l-.9-1.2A2 2 0 0 0 9.5 4z"/></svg>
    );
  },
);

FolderClosed.displayName = 'FolderClosed';
