import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CoffeeCup = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 3.09c1.517.14 2.895.435 4.008.852.79.296 1.498.673 2.027 1.142C18.563 5.552 19 6.197 19 7v1h1a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-1v1c0 .803-.437 1.448-.965 1.916-.529.469-1.238.846-2.027 1.142-1.586.595-3.71.942-6.008.942s-4.422-.348-6.008-.942c-.79-.296-1.498-.673-2.027-1.142C1.437 19.448 1 18.803 1 18V7c0-.803.437-1.448.965-1.916.529-.469 1.238-.846 2.027-1.142.6-.224 1.275-.414 2.008-.563V2h2v1.09C8.645 3.03 9.315 3 10 3V1h2zM19 15h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-1zM10 5c-.697 0-1.367.038-2 .103V7H6V5.43q-.722.168-1.306.385c-.658.247-1.121.516-1.402.765C3.01 6.83 3 6.974 3 7s.01.17.292.42c.28.249.744.518 1.402.765C6.004 8.675 7.88 9 10 9s3.996-.325 5.306-.815c.658-.247 1.121-.516 1.402-.765.282-.25.292-.394.292-.42s-.01-.17-.292-.42c-.28-.249-.744-.518-1.402-.765-.88-.33-2.014-.58-3.306-.712V6h-2z"/></svg>
    );
  },
);

CoffeeCup.displayName = 'CoffeeCup';
