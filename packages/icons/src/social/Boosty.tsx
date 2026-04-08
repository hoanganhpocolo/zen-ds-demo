import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Boosty = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="url(#a)" d="m3.969 14.01 3.56-12.33H13l-1.103 3.822-.032.066-2.905 10.09h2.708a1259 1259 0 0 0-2.654 6.651c-5.001-.055-6.4-3.637-5.176-7.874m5.198 7.885 6.596-9.49h-2.795l2.435-6.083c4.172.437 6.137 3.724 4.98 7.7-1.234 4.27-6.236 7.873-11.107 7.873z"/><defs><linearGradient id="a" x1="14.975" x2="7.932" y1="4.361" y2="28.378" gradientUnits="userSpaceOnUse"><stop stopColor="#EF7829"/><stop offset=".052" stopColor="#F07529"/><stop offset=".355" stopColor="#F0672B"/><stop offset=".667" stopColor="#F15E2C"/><stop offset="1" stopColor="#F15A2C"/></linearGradient></defs></svg>
    );
  },
);

Boosty.displayName = 'Boosty';
