import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GoogleBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m21.777 10.41-.104-.442H12.07v4.064h5.738c-.596 2.829-3.36 4.318-5.618 4.318-1.643 0-3.375-.691-4.521-1.802a6.45 6.45 0 0 1-1.926-4.555c0-1.713.77-3.425 1.889-4.551 1.12-1.127 2.81-1.757 4.491-1.757 1.926 0 3.306 1.022 3.822 1.488L18.833 4.3c-.848-.744-3.175-2.62-6.803-2.62-2.799 0-5.482 1.072-7.444 3.027C2.65 6.633 1.648 9.417 1.648 12s.948 5.228 2.824 7.169c2.005 2.07 4.844 3.15 7.767 3.15 2.66 0 5.18-1.041 6.977-2.932 1.767-1.861 2.68-4.437 2.68-7.136 0-1.137-.114-1.812-.119-1.841"/></svg>
    );
  },
);

GoogleBlack.displayName = 'GoogleBlack';
