import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FileQuestion = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12.758 1a4 4 0 0 1 2.828 1.172l4.242 4.242A4 4 0 0 1 21 9.242V19a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zM12 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-7a3 3 0 0 0-3 3h2a1 1 0 1 1 1.248.969c-.56.143-1.248.66-1.248 1.531v.5h2v-.172A3 3 0 0 0 12 9m2-3a2 2 0 0 0 2 2h2.565a2 2 0 0 0-.15-.172l-4.243-4.242A2 2 0 0 0 14 3.434z"/></svg>
    );
  },
);

FileQuestion.displayName = 'FileQuestion';
