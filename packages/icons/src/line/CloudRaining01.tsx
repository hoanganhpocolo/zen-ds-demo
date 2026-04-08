import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CloudRaining01 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13 23h-2v-3.333h2zm-4-1.667H7V18h2zm8 0h-2V18h2zM13 18h-2v-3.333h2zm-4-1.667H7V13h2zm8 0h-2V13h2zM12 1c2.735 0 5.079 1.783 5.784 4.26C20.7 5.632 23 8.04 23 11.024c0 1.265-.275 2.486-.934 3.417-.689.973-1.748 1.552-3.078 1.536l.024-2c.67.008 1.11-.252 1.422-.692.341-.483.566-1.25.566-2.26 0-2.07-1.753-3.812-3.998-3.813h-.037a1 1 0 0 1-.995-.871C15.73 4.487 14.07 3 12 3S8.27 4.487 8.03 6.34a1 1 0 0 1-.995.87h-.037C4.754 7.213 3 8.955 3 11.024c0 1.01.225 1.771.565 2.25.311.438.756.703 1.435.703v2c-1.321 0-2.376-.575-3.065-1.544C1.275 13.505 1 12.29 1 11.024 1 8.04 3.3 5.631 6.216 5.261 6.92 2.783 9.266 1 12 1"/></svg>
    );
  },
);

CloudRaining01.displayName = 'CloudRaining01';
