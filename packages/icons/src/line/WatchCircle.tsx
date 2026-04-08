import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const WatchCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16 1a1 1 0 0 1 .981.808l.945 4.817A7.98 7.98 0 0 1 20 12a7.98 7.98 0 0 1-2.074 5.375l-.945 4.817A1 1 0 0 1 16 23H8a1 1 0 0 1-.981-.808l-.945-4.817A7.98 7.98 0 0 1 4 12c0-2.068.786-3.956 2.074-5.375l.945-4.817A1 1 0 0 1 8 1zm-.466 18.179A8 8 0 0 1 12 20a8 8 0 0 1-3.534-.821L8.823 21h6.354zM12 6a5.98 5.98 0 0 0-4.286 1.8A5.98 5.98 0 0 0 6 12c0 1.635.652 3.116 1.714 4.2A5.98 5.98 0 0 0 12 18a5.98 5.98 0 0 0 4.286-1.8A5.98 5.98 0 0 0 18 12a5.98 5.98 0 0 0-1.714-4.2A5.98 5.98 0 0 0 12 6m.611 5.975 2.04 2.04-1.414 1.415-2.333-2.334a1 1 0 0 1-.293-.707v-3.5h2zM8.466 4.82A8 8 0 0 1 12 4a8 8 0 0 1 3.534.821L15.177 3H8.823z"/></svg>
    );
  },
);

WatchCircle.displayName = 'WatchCircle';
