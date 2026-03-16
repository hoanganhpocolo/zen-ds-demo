import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Palette = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11a4 4 0 0 1-4 4h-.5c-.496 0-.647.003-.76.018a2 2 0 0 0-1.722 1.721c-.015.114-.018.265-.018.761v.5a4 4 0 0 1-4 4C5.925 23 1 18.075 1 12S5.925 1 12 1m0 2a9 9 0 0 0 0 18 2 2 0 0 0 2-2v-.568c0-.398 0-.693.034-.954a4 4 0 0 1 3.443-3.444c.262-.034.557-.034.955-.034H19a2 2 0 0 0 2-2 9 9 0 0 0-9-9m-5.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m10-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-6-1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/></svg>
    );
  },
);

Palette.displayName = 'Palette';
