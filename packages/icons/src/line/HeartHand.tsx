import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const HeartHand = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M19.66 8.925a1.894 1.894 0 0 1 2.535-.13l.143.13.087.092c.418.478.57 1.136.399 1.752l-1.344 4.836A6 6 0 0 1 15.699 20H9.414l-2 2a2 2 0 0 1-2.829 0l-2.638-2.638a2 2 0 0 1-.104-2.716l4.2-4.9A5 5 0 0 1 9.839 10H15c.978 0 1.844.47 2.392 1.193zm-1.694 4.521A3 3 0 0 1 15 16h-4v-2h4a1 1 0 1 0 0-2H9.84c-.875 0-1.708.383-2.278 1.048l-4.2 4.9L6 20.585l2-2A2 2 0 0 1 9.414 18h6.285a4 4 0 0 0 3.854-2.93l1.235-4.445zM13.5 1.57a2.683 2.683 0 0 1 3.587.253c.637.657.925 1.442.913 2.25-.013.778-.303 1.513-.7 2.14-.786 1.236-2.141 2.285-3.484 2.733a1 1 0 0 1-.633 0C11.84 8.498 10.485 7.45 9.7 6.213c-.398-.627-.688-1.362-.7-2.14-.013-.808.275-1.593.912-2.25a2.683 2.683 0 0 1 3.587-.253m2.15 1.645a.69.69 0 0 0-1.002 0L13.499 4.4l-1.148-1.185a.69.69 0 0 0-1.003 0c-.267.275-.353.548-.349.826.005.306.125.683.39 1.1.476.75 1.3 1.428 2.11 1.785.812-.357 1.635-1.035 2.112-1.786.264-.416.384-.793.388-1.1.005-.277-.081-.55-.348-.825" clipRule="evenodd"/></svg>
    );
  },
);

HeartHand.displayName = 'HeartHand';
