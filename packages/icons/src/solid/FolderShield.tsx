import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FolderShield = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.5 2a4 4 0 0 1 3.2 1.6l1.2 1.6a2 2 0 0 0 1.6.8H19a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM9 12.5v1.895a3 3 0 0 0 1.336 2.496l1.11.739a1 1 0 0 0 1.109 0l1.11-.74A3 3 0 0 0 15 14.396V12.5L12 11zM5 4a2 2 0 0 0-2 2h9l-.9-1.2A2 2 0 0 0 9.5 4z"/></svg>
    );
  },
);

FolderShield.displayName = 'FolderShield';
