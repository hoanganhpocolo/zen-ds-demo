import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GoogleChrome = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M12 1c6.077 0 11 4.934 11 11.018 0 3.032-1.106 5.67-3.22 7.789-4.06 4.066-10.756 4.277-15.057.473A11 11 0 0 1 1 12.018c0-3.042 1.232-5.799 3.222-7.791A10.96 10.96 0 0 1 12 1m3.998 8A5 5 0 0 1 17 12.007c0 .926-.256 1.773-.689 2.494l-3.595 6.47c2.076-.163 4.1-1.027 5.648-2.577C20.106 16.648 21 14.517 21 12.018A9 9 0 0 0 20.483 9zM3.964 7.952A9 9 0 0 0 3 12.018a9 9 0 0 0 3.048 6.763 8.86 8.86 0 0 0 4.432 2.095l2.196-3.95a4.78 4.78 0 0 1-3.985-1.164 5 5 0 0 1-1.304-1.822zM12 9c-.828 0-1.576.335-2.12.88A3 3 0 0 0 9 12.007a3 3 0 0 0 1.017 2.256c1.444 1.277 3.643.754 4.574-.782A2.8 2.8 0 0 0 15 12.007 3.003 3.003 0 0 0 12 9m0-6a8.96 8.96 0 0 0-6.791 3.1l2.218 3.88a5 5 0 0 1 1.037-1.513A4.98 4.98 0 0 1 12 7h7.48A8.99 8.99 0 0 0 12 3" clipRule="evenodd"/></svg>
    );
  },
);

GoogleChrome.displayName = 'GoogleChrome';
