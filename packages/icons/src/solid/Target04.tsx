import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Target04 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1v3a8 8 0 1 0 8 8h3v.018c0 3.032-1.106 5.67-3.22 7.789a10.87 10.87 0 0 1-5.525 2.96l-.144.028a11 11 0 0 1-1.953.2c-.053 0-.105.005-.158.005l-.073-.002q-.208-.001-.415-.01l-.1-.005c-2.408-.123-4.784-1.018-6.69-2.703A11 11 0 0 1 1 12.018q.002-.108.006-.215A11 11 0 0 1 12 1"/><path fill="currentColor" d="M12 8a3.98 3.98 0 0 0-2.827 1.173A4 4 0 0 0 8 12.009c0 1.198.523 2.272 1.355 3.008 1.557 1.375 4.004 1.299 5.473-.173.778-.78 1.172-1.719 1.172-2.835h2c0 1.65-.607 3.095-1.757 4.248-2.216 2.22-5.864 2.334-8.213.258A6 6 0 0 1 6 12.009a6 6 0 0 1 1.757-4.25A5.98 5.98 0 0 1 12 6z"/><path fill="currentColor" d="M17.543 1.293A1 1 0 0 1 19.25 2v2.75H22a1 1 0 0 1 .707 1.707l-3.125 3.25a1 1 0 0 1-.707.293h-3.46l-1.485 1.483q.068.248.07.517a2 2 0 1 1-1.484-1.93L14 8.585V5.25a1 1 0 0 1 .293-.707z"/></svg>
    );
  },
);

Target04.displayName = 'Target04';
