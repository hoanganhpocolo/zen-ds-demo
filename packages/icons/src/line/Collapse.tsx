import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Collapse = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.704 13.296a1 1 0 0 1 1 1V22h-2v-5.29l-5 5-1.415-1.414 5-5H2v-2zm5-5.414 5-5 1.414 1.415-5 5H22v2h-8.296a1 1 0 0 1-1-1V2h2z"/></svg>
    );
  },
);

Collapse.displayName = 'Collapse';
