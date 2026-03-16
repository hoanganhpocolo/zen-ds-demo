import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Activity = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M7.034 3.477c.537-1.99 3.368-1.964 3.87.035l4.139 16.49 1.589-5.795A3 3 0 0 1 19.525 12H22v2h-2.475a1 1 0 0 0-.964.735l-1.59 5.796c-.543 1.984-3.367 1.953-3.867-.042L8.964 4l-2.1 7.783A3 3 0 0 1 3.968 14H2v-2h1.968a1 1 0 0 0 .966-.74z"/></svg>
    );
  },
);

Activity.displayName = 'Activity';
