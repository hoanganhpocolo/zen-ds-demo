import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Trash = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14 1a3 3 0 0 1 3 3v1h5.5v2h-1.56l-.766 12.25A4 4 0 0 1 16.182 23H7.818a4 4 0 0 1-3.992-3.75L3.061 7H1.5V5H7V4a3 3 0 0 1 3-3zM9 18h2v-8H9zm4 0h2v-8h-2zM10 3a1 1 0 0 0-1 1v1h6V4a1 1 0 0 0-1-1z"/></svg>
    );
  },
);

Trash.displayName = 'Trash';
