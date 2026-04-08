import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const OKOnlysign = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#F70" fillRule="evenodd" d="M15.312 10.56a4.676 4.676 0 0 1-6.625 0 4.676 4.676 0 0 1 0-6.624 4.676 4.676 0 0 1 6.625 0 4.676 4.676 0 0 1 0 6.624M12 5.108c-.579 0-1.11.234-1.5.625-.375.39-.625.922-.625 1.5s.234 1.109.625 1.5c.375.39.906.624 1.5.624.578 0 1.109-.234 1.5-.624.39-.375.624-.907.624-1.5 0-.578-.234-1.11-.625-1.5a2.06 2.06 0 0 0-1.5-.625" clipRule="evenodd"/><path fill="#F70" d="m16.937 11.951 1.374 1.875c.079.093.063.218-.062.297a9.5 9.5 0 0 1-3.906 1.906l2.906 5.124c.078.156-.016.328-.187.328h-2.844a.22.22 0 0 1-.203-.14l-2.031-4.531-2.031 4.53c-.031.094-.11.141-.203.141H6.906c-.156 0-.265-.187-.187-.328l2.906-5.124a9.7 9.7 0 0 1-3.906-1.906.236.236 0 0 1-.031-.297l1.374-1.875a.24.24 0 0 1 .329-.031c1.296 1.109 2.89 1.828 4.608 1.828 1.72 0 3.313-.719 4.61-1.828a.216.216 0 0 1 .327.031"/></svg>
    );
  },
);

OKOnlysign.displayName = 'OKOnlysign';
