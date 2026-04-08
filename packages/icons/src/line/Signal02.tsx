import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Signal02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 7.778a2.998 2.998 0 0 1 1 5.825v8.175h-2v-8.174a2.998 2.998 0 0 1 1-5.826M5.636 4.414a9 9 0 0 0 0 12.728l-1.414 1.414A11 11 0 0 1 4.222 3zM19.778 3a11 11 0 0 1 2.385 11.987 11 11 0 0 1-2.385 3.569l-1.414-1.414a9.003 9.003 0 0 0 0-12.728zM8.465 7.242a5 5 0 0 0 0 7.071L7.05 15.728a7 7 0 0 1 0-9.899zm8.485-1.414a7 7 0 0 1 0 9.9l-1.415-1.415a5 5 0 0 0 0-7.07zM12 9.778a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></svg>
    );
  },
);

Signal02.displayName = 'Signal02';
