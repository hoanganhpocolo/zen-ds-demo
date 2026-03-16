import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Meat = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M15.903 2.391a3 3 0 0 1 4.827.83c.299.141.58.336.829.584l.106.112a3 3 0 0 1-.106 4.13 3 3 0 0 1-2.285.871l-1.344 1.345.23 3.623c.395 6.223-5.717 10.813-11.582 8.698a8.67 8.67 0 0 1-5.212-5.212C-.748 11.507 3.84 5.396 10.064 5.791l3.623.229 1.345-1.344a3 3 0 0 1 .87-2.285M8.12 15.95a1.001 1.001 0 1 0-1.415 1.416A1.001 1.001 0 0 0 8.12 15.95m4.243 0a1 1 0 1 0-1.414 1.415 1 1 0 0 0 1.414-1.415M8.12 11.708a1 1 0 1 0-1.415 1.415 1 1 0 0 0 1.415-1.415m10.61-7.903a1 1 0 0 0-1.671.966l.148.557-1.306 1.305 1.414 1.414 1.306-1.305.558.148a.998.998 0 0 0 1.034-1.595l-.07-.076a1 1 0 0 0-.447-.258l-.56-.148-.148-.56a1 1 0 0 0-.258-.448"/></svg>
    );
  },
);

Meat.displayName = 'Meat';
