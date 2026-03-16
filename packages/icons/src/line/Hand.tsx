import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Hand = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c.988 0 1.865.529 2.336 1.327a2.7 2.7 0 0 1 1.064-.216c1.472 0 2.7 1.175 2.7 2.666v.758q.336-.09.7-.09c1.472 0 2.7 1.175 2.7 2.666v5.556C21.5 18.84 17.228 23 12 23s-9.5-4.16-9.5-9.333v-2.223c0-1.491 1.228-2.667 2.7-2.667.241 0 .477.033.7.092V4.777c0-1.49 1.228-2.665 2.7-2.666.376 0 .736.077 1.064.216A2.71 2.71 0 0 1 12 1m0 2c-.405 0-.7.317-.7.667v7.222a1 1 0 1 1-2 0V4.777a.684.684 0 0 0-.7-.666.683.683 0 0 0-.7.666V14.5h-2v-3.056a.685.685 0 0 0-.7-.667c-.405 0-.7.318-.7.667v2.223C4.5 17.698 7.84 21 12 21s7.5-3.302 7.5-7.333V8.111a.684.684 0 0 0-.7-.667c-.405 0-.7.318-.7.667v2.778a1 1 0 1 1-2 0V4.777a.683.683 0 0 0-.7-.666c-.405 0-.7.317-.7.666v6.112a1 1 0 0 1-2 0V3.667A.684.684 0 0 0 12 3"/></svg>
    );
  },
);

Hand.displayName = 'Hand';
