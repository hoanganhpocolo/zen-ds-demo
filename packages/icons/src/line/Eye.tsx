import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Eye = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M1.071 12.371" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M1.072 11.63a1 1 0 0 0 0 .741l.004.012.033.078.008.02q.041.095.12.264a16.4 16.4 0 0 0 2.383 3.66c1.732 2 4.485 4.095 8.38 4.095s6.648-2.095 8.38-4.095a16.4 16.4 0 0 0 2.384-3.66q.078-.169.119-.264l.008-.02.017-.039.007-.017.009-.022.005-.012a1 1 0 0 0-.001-.744l-.004-.01-.009-.022-.024-.056-.008-.02a15 15 0 0 0-.587-1.177 16.4 16.4 0 0 0-1.915-2.747C18.648 5.595 15.895 3.5 12 3.5S5.352 5.595 3.62 7.595a16.4 16.4 0 0 0-2.384 3.66 10 10 0 0 0-.119.264l-.008.02-.024.056-.009.022zM5.13 8.904C6.648 7.155 8.895 5.5 12 5.5s5.352 1.655 6.87 3.405a14.4 14.4 0 0 1 1.678 2.409c.152.273.268.508.353.686-.085.178-.201.413-.353.687a14.4 14.4 0 0 1-1.679 2.408C17.352 16.845 15.105 18.5 12 18.5s-5.352-1.655-6.87-3.405A14.4 14.4 0 0 1 3.099 12c.085-.178.202-.413.354-.687a14.4 14.4 0 0 1 1.679-2.408" clipRule="evenodd"/></svg>
    );
  },
);

Eye.displayName = 'Eye';
