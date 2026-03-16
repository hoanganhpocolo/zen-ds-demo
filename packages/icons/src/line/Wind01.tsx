import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Wind01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M5.477 17.437c1.596.698 3.4.784 5.056.24l3.114-1.021a9.13 9.13 0 0 1 6.5.31l1.853.892-.812 1.8-1.853-.894a7.1 7.1 0 0 0-5.057-.24l-3.112 1.021c-2.13.7-4.45.59-6.502-.308L2 17.93l.813-1.799zm8.17-7.094a9.13 9.13 0 0 1 6.5.31l1.853.913-.812 1.8-1.853-.915a7.1 7.1 0 0 0-5.057-.24l-3.112 1.022a9.13 9.13 0 0 1-6.502-.309L2 11.788l.813-1.8 2.664 1.136c1.596.699 3.4.784 5.056.24zm0-5.889a9.13 9.13 0 0 1 6.5.31L22 5.677l-.812 1.799-1.853-.913a7.1 7.1 0 0 0-5.057-.24l-3.112 1.021c-2.13.7-4.45.59-6.502-.309L2 5.9l.813-1.8 2.664 1.136c1.596.698 3.4.784 5.056.24z"/></svg>
    );
  },
);

Wind01.displayName = 'Wind01';
