import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const YandexMusic = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#FCCA00" d="M5.937 3.798a10.26 10.26 0 0 1 5.184-1.974v3.095a7.18 7.18 0 1 0 7.966 5.723l2.599-2.09-.002-.017A10.257 10.257 0 1 1 5.937 3.798"/><path fill="#FC3F1D" d="m19.726 5.243.011.027L18 8.03a7.2 7.2 0 0 0-2.469-2.267v6.278a3.488 3.488 0 1 1-1.538-2.893v-7.18a10.25 10.25 0 0 1 5.733 3.276"/></svg>
    );
  },
);

YandexMusic.displayName = 'YandexMusic';
