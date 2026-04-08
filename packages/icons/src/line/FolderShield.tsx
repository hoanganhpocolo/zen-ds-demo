import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FolderShield = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.5 2a4 4 0 0 1 3.2 1.6l1.2 1.6a2 2 0 0 0 1.6.8H19a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm8.66 2.06a1 1 0 0 1 .787.045l3 1.5A1 1 0 0 1 16 12.5v1.895a4 4 0 0 1-1.781 3.328l-1.11.739a2 2 0 0 1-2.218 0l-1.11-.74A4 4 0 0 1 8 14.395V12.5a1 1 0 0 1 .553-.895l3-1.5zM10 13.118v1.277a2 2 0 0 0 .89 1.664l1.11.739 1.11-.74a2 2 0 0 0 .89-1.663v-1.277l-2-1zM5 4a2 2 0 0 0-2 2h9l-.9-1.2A2 2 0 0 0 9.5 4z"/></svg>
    );
  },
);

FolderShield.displayName = 'FolderShield';
