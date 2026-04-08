import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const PinterestBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.999 1.681c-5.7 0-10.32 4.621-10.32 10.32 0 4.375 2.718 8.112 6.557 9.615-.093-.815-.17-2.072.034-2.964.187-.807 1.206-5.13 1.206-5.13s-.306-.62-.306-1.53c0-1.435.833-2.505 1.869-2.505.883 0 1.308.663 1.308 1.453 0 .883-.56 2.208-.858 3.44-.246 1.027.518 1.868 1.529 1.868 1.835 0 3.245-1.936 3.245-4.722 0-2.472-1.776-4.196-4.315-4.196-2.94 0-4.663 2.2-4.663 4.476 0 .883.34 1.835.764 2.353a.31.31 0 0 1 .068.297c-.076.323-.255 1.028-.289 1.172-.042.187-.153.23-.348.136-1.291-.603-2.098-2.48-2.098-4 0-3.254 2.361-6.243 6.82-6.243 3.576 0 6.362 2.548 6.362 5.962 0 3.56-2.242 6.422-5.35 6.422-1.045 0-2.03-.544-2.362-1.19l-.646 2.455c-.229.9-.857 2.022-1.282 2.71.968.297 1.988.458 3.058.458 5.7 0 10.32-4.62 10.32-10.32A10.3 10.3 0 0 0 11.999 1.681"/></svg>
    );
  },
);

PinterestBlack.displayName = 'PinterestBlack';
