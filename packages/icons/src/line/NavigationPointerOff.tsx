import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const NavigationPointerOff = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m22.425 17.47-1.414 1.415-2.887-2.887-1.702 5.107c-.582 1.744-3.011 1.846-3.736.155l-3.048-7.113-7.115-3.05c-1.69-.724-1.589-3.153.156-3.735l5.105-1.703-2.33-2.33 1.414-1.415zM3.31 9.26l7.116 3.048c.471.202.848.579 1.05 1.05l3.05 7.115 2.017-6.056-7.177-7.176zM19.5 1.753c1.563-.52 3.051.967 2.53 2.53l-2.491 7.471-1.581-1.58 2.175-6.522-6.524 2.174-1.582-1.582z"/></svg>
    );
  },
);

NavigationPointerOff.displayName = 'NavigationPointerOff';
