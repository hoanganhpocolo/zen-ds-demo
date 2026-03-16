import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const TelegramOnlysignBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M3.84 11.026Q11.46 7.708 14 6.65c4.839-2.012 5.844-2.362 6.5-2.374.144-.002.466.034.674.203a.73.73 0 0 1 .248.472c.024.135.053.444.03.686-.263 2.755-1.397 9.44-1.974 12.525-.244 1.306-.725 1.743-1.19 1.786-1.012.093-1.78-.668-2.76-1.31-1.534-1.006-2.4-1.632-3.889-2.612-1.72-1.134-.605-1.757.376-2.775.256-.266 4.714-4.321 4.8-4.689.01-.046.02-.217-.081-.308-.102-.09-.252-.06-.36-.035q-.231.053-7.35 4.857-1.042.716-1.889.698c-.622-.013-1.818-.351-2.708-.64-1.09-.355-1.958-.543-1.882-1.145q.059-.471 1.296-.963" clipRule="evenodd"/></svg>
    );
  },
);

TelegramOnlysignBlack.displayName = 'TelegramOnlysignBlack';
