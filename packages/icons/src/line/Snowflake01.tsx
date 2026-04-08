import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Snowflake01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m16.031 2.414-3.023 3v4.854l4.236-2.427.998-3.697 1.947.517-.845 3.132 3.156.839-.521 1.933-3.727-.992L14.016 12l4.236 2.427 3.727-.992.521 1.933-3.156.839.845 3.132-1.947.517-.998-3.697-4.236-2.427v4.854l3.023 3L14.606 23 12 20.414 9.394 23l-1.425-1.414 3.023-3v-4.854L6.756 16.16l-.998 3.697-1.947-.517.845-3.132-3.156-.839.521-1.933 3.727.992L9.984 12 5.748 9.573l-3.727.99-.521-1.93 3.156-.839-.845-3.132 1.947-.518.998 3.698 4.236 2.427V5.414l-3.023-3L9.395 1 12 3.586 14.605 1z"/></svg>
    );
  },
);

Snowflake01.displayName = 'Snowflake01';
