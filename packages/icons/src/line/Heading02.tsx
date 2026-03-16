import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Heading02 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 4h-1.5v7H17V4h-2V2h6v2h-2v16h2v2h-6v-2h2v-7h-6.5v7H12v2H3v-2h2V4H3V2h9zM7 20h1.5V4H7z"/></svg>
    );
  },
);

Heading02.displayName = 'Heading02';
