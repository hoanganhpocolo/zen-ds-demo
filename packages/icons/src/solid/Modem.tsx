import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Modem = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 7a1.5 1.5 0 0 1 1 2.615V14h7a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H4a3 3 0 0 1-2.996-2.846L1 20v-3a3 3 0 0 1 3-3h7V9.615A1.5 1.5 0 0 1 12 7M4.049 2.846c-1.263 2.708-1.428 6.335-.26 9.199l-1.852.756C.55 9.398.749 5.19 2.238 2zM21.764 2c1.488 3.19 1.686 7.398.299 10.8l-1.852-.755c1.168-2.864 1.004-6.49-.26-9.2zM7.914 4.533c-.839 1.894-.9 4.483-.021 6.555l-1.841.78c-1.095-2.583-1.028-5.748.034-8.145zm10-.81c1.063 2.397 1.129 5.562.034 8.145l-1.84-.78c.877-2.072.817-4.661-.022-6.555z"/></svg>
    );
  },
);

Modem.displayName = 'Modem';
