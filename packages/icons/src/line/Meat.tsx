import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Meat = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15.903 2.39a3 3 0 0 1 4.243 0l.14.15c.183.21.33.44.445.68a3 3 0 0 1 .83 4.827l-.152.142c-.61.53-1.38.77-2.134.73l-1.345 1.344.23 3.623c.396 6.223-5.716 10.813-11.582 8.698a8.66 8.66 0 0 1-5.212-5.212C-.75 11.506 3.842 5.395 10.065 5.79l3.623.23 1.345-1.345a3 3 0 0 1 .87-2.284M9.938 7.788c-4.786-.304-8.316 4.396-6.69 8.908a6.66 6.66 0 0 0 4.008 4.007c4.512 1.626 9.211-1.903 8.907-6.689l-.245-3.844a1.5 1.5 0 0 1 .087-.605l-1.62-1.62a1.5 1.5 0 0 1-.604.088zm-3.23 8.163a1 1 0 1 1 1.414 1.414 1 1 0 0 1-1.415-1.415m4.242 0a1 1 0 1 1 1.414 1.415 1 1 0 0 1-1.414-1.415m-4.243-4.243a1 1 0 1 1 1.415 1.415 1 1 0 0 1-1.415-1.415m12.025-7.902a.997.997 0 0 0-1.672.965l.148.557-1.305 1.306 1.414 1.414 1.306-1.306.557.149a.998.998 0 0 0 1.034-1.595l-.068-.076a1 1 0 0 0-.448-.258l-.56-.15-.15-.558a1 1 0 0 0-.256-.448"/></svg>
    );
  },
);

Meat.displayName = 'Meat';
