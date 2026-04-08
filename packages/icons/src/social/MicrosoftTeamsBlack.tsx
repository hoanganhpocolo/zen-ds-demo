import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MicrosoftTeamsBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M9.635 5.567q0 .334.069.646h2.726a.86.86 0 0 1 .86.86v1.435q-.14.03-.28.048a3.01 3.01 0 1 0-3.375-2.989m12.04.968a2.257 2.257 0 1 1-4.515 0 2.257 2.257 0 0 1 4.515 0m-.322 2.903a.967.967 0 0 1 .967.967v4.798a3.23 3.23 0 0 1-3.892 3.157 3.3 3.3 0 0 1-.847-.323 5.156 5.156 0 0 1-9.4 1.076 4.6 4.6 0 0 1-.322-.645h4.573a.6.6 0 0 0 .187-.026.85.85 0 0 0 .67-.832V9.438z"/><path fill="currentColor" fillRule="evenodd" d="M2.54 6.858h8.6a.86.86 0 0 1 .86.86v8.6a.86.86 0 0 1-.86.86h-8.6a.86.86 0 0 1-.86-.86v-8.6a.86.86 0 0 1 .86-.86m6.867 3.209H7.48v5.172H6.213v-5.173h-1.94v-1.27h5.134z" clipRule="evenodd"/></svg>
    );
  },
);

MicrosoftTeamsBlack.displayName = 'MicrosoftTeamsBlack';
