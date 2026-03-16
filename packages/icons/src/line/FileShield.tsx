import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const FileShield = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M17.446 14.14a.95.95 0 0 1 .807 0l3.2 1.5a.95.95 0 0 1 .547.86v2.838c0 1.034-.478 2.01-1.294 2.644l-2.272 1.768a.95.95 0 0 1-1.167 0l-2.274-1.768a3.35 3.35 0 0 1-1.293-2.644V16.5a.95.95 0 0 1 .547-.86zM12.758 1a4 4 0 0 1 2.828 1.172l4.242 4.242A4 4 0 0 1 21 9.242V11h-2V9.242q-.001-.122-.017-.242H17a4 4 0 0 1-4-4V3.016A2 2 0 0 0 12.758 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5v2H7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zM15.6 17.104v2.234c0 .447.207.87.56 1.144l1.69 1.315 1.69-1.315a1.45 1.45 0 0 0 .56-1.144v-2.235l-2.25-1.054zM15 5a2 2 0 0 0 2 2h.586L15 4.414z"/></svg>
    );
  },
);

FileShield.displayName = 'FileShield';
