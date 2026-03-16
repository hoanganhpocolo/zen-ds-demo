import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CoinsHand = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M19.66 8.925a1.894 1.894 0 0 1 2.535-.13l.144.13.087.093a1.89 1.89 0 0 1 .398 1.752l-1.344 4.835A6 6 0 0 1 15.7 20H9.414l-2 2a2 2 0 0 1-2.828 0l-2.639-2.638a2 2 0 0 1-.103-2.716l4.199-4.9A5 5 0 0 1 9.84 10H15c.977 0 1.844.47 2.391 1.193zm-1.693 4.521A3 3 0 0 1 15 16h-4v-2h4a1 1 0 0 0 0-2H9.84c-.876 0-1.709.383-2.279 1.048l-4.199 4.9L6 20.585l2-2A2 2 0 0 1 9.414 18h6.285a4 4 0 0 0 3.855-2.93l1.234-4.445zM14.867 1a3.846 3.846 0 0 1 3.849 3.843 3.845 3.845 0 0 1-3.848 3.843 3.845 3.845 0 0 1-3.847-3.843A3.845 3.845 0 0 1 14.868 1m0 1.922a1.922 1.922 0 1 0 0 3.843 1.922 1.922 0 1 0 0-3.843"/></svg>
    );
  },
);

CoinsHand.displayName = 'CoinsHand';
