import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FolderX = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.5 2a4 4 0 0 1 3.2 1.6l1.2 1.6a2 2 0 0 0 1.6.8H19a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm12.707 3.707L13.414 14l2.293 2.293-1.414 1.414L12 15.414l-2.293 2.293-1.414-1.414L10.586 14l-2.293-2.293 1.414-1.414L12 12.586l2.293-2.293zM5 4a2 2 0 0 0-2 2h9l-.9-1.2A2 2 0 0 0 9.5 4z"/></svg>
    );
  },
);

FolderX.displayName = 'FolderX';
