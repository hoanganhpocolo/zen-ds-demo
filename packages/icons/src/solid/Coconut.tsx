import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Coconut = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14.5 1a9.5 9.5 0 0 1 9.5 9.5c0 4.892-3.698 8.913-8.45 9.436A9.8 9.8 0 0 1 9.5 22C4.311 22 0 18.027 0 13c0-1.72 1.443-2.97 3.063-3.733.45-.212.942-.4 1.466-.563L3.347 6H1V4h3l.146.01a1 1 0 0 1 .77.59l.897 2.051A9.5 9.5 0 0 1 14.5 1m-5 9a17 17 0 0 0-1.248.045l-.115.01q-.407.033-.797.085l.833 1.904Q8.805 12 9.5 12c2.485 0 4.5.448 4.5 1s-2.015 1-4.5 1S5 13.552 5 13c0-.253.423-.483 1.12-.66l-.784-1.791c-.523.15-1 .329-1.421.527C2.459 11.761 2 12.51 2 13s.46 1.239 1.915 1.924C5.293 15.572 7.266 16 9.5 16s4.207-.428 5.585-1.076c1.425-.67 1.894-1.403 1.913-1.893l.001-.04c-.005-.428-.358-1.05-1.414-1.655a7 7 0 0 0-.5-.26C13.707 10.428 11.734 10 9.5 10M16 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></svg>
    );
  },
);

Coconut.displayName = 'Coconut';
