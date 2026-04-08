import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MessageChatCircle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m4.059 10.578-.018.012A8 8 0 0 1 4 9.784C4 4.852 8.338 1 13.5 1S23 4.852 23 9.784a8.2 8.2 0 0 1-1.064 4.04l.53 2.019c.417 1.582-1.139 2.967-2.662 2.37l-1.79-.7a10 10 0 0 1-2.434.84c-1.037 2.707-3.876 4.573-7.08 4.573a8.1 8.1 0 0 1-3.39-.737l-.885.478c-1.603.864-3.433-.687-2.842-2.41l.391-1.14A6.3 6.3 0 0 1 1 16.086c0-2.3 1.22-4.28 3.059-5.509m4.441.672c-3.141 0-5.5 2.264-5.5 4.838 0 .86.255 1.67.71 2.377a1 1 0 0 1 .105.866l-.54 1.576 1.346-.725.114-.053a1 1 0 0 1 .844.057c.842.466 1.842.74 2.921.74 3.141 0 5.5-2.265 5.5-4.838s-2.359-4.838-5.5-4.838M6.004 9.64A8.1 8.1 0 0 1 8.5 9.25c4.038 0 7.5 2.963 7.5 6.838l-.003.092a8 8 0 0 0 1.464-.635 1 1 0 0 1 .75-.096l.106.035 2.215.868-.637-2.422a1 1 0 0 1 .123-.788A6.26 6.26 0 0 0 21 9.784C21 6.12 17.727 3 13.5 3 9.329 3 6.088 6.038 6.004 9.64m-.181.063-.111.04z"/></svg>
    );
  },
);

MessageChatCircle.displayName = 'MessageChatCircle';
