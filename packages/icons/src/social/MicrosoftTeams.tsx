import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const MicrosoftTeams = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#7B83EB" d="M12.645 8.578a3.01 3.01 0 1 0 0-6.02 3.01 3.01 0 0 0 0 6.02"/><path fill="currentColor" d="M12.43 6.213H9.704l.013.06.002.005.014.055a3.013 3.013 0 0 0 3.557 2.175V7.072a.86.86 0 0 0-.86-.86" opacity=".1"/><path fill="currentColor" d="M11.786 6.858h-1.86a3.01 3.01 0 0 0 2.72 1.72v-.86a.86.86 0 0 0-.86-.86" opacity=".2"/><path fill="#5059C9" d="M19.418 8.793a2.257 2.257 0 1 0 0-4.515 2.257 2.257 0 0 0 0 4.515m1.935.645h-5.07a.413.413 0 0 0-.414.413v5.23a3.3 3.3 0 0 0 2.56 3.28 3.23 3.23 0 0 0 3.891-3.158v-4.798a.97.97 0 0 0-.968-.967"/><path fill="#7B83EB" d="M17.805 10.405v6.128a5.156 5.156 0 0 1-9.624 2.58 4.6 4.6 0 0 1-.322-.645 5 5 0 0 1-.213-.645 5.3 5.3 0 0 1-.161-1.29v-6.128a.966.966 0 0 1 .967-.967h8.385a.966.966 0 0 1 .968.967"/><path fill="currentColor" d="M11.786 6.858h-1.86a3.01 3.01 0 0 0 2.72 1.72v-.86a.86.86 0 0 0-.86-.86" opacity=".2"/><path fill="currentColor" d="M13.29 9.438v8.172a.85.85 0 0 1-.671.832.6.6 0 0 1-.187.026H7.859a5 5 0 0 1-.213-.645 5.3 5.3 0 0 1-.161-1.29v-6.128a.966.966 0 0 1 .967-.967z" opacity=".1"/><path fill="currentColor" d="M12.645 9.438v8.817a.6.6 0 0 1-.026.187.85.85 0 0 1-.832.67H8.18a4.6 4.6 0 0 1-.322-.644 5 5 0 0 1-.213-.645 5.3 5.3 0 0 1-.161-1.29v-6.128a.966.966 0 0 1 .967-.967z" opacity=".2"/><path fill="currentColor" d="M12.645 9.438v7.527a.86.86 0 0 1-.858.858H7.646a5.3 5.3 0 0 1-.161-1.29v-6.128a.966.966 0 0 1 .967-.967z" opacity=".2"/><path fill="currentColor" d="M8.452 9.438a.966.966 0 0 0-.967.967v6.128c0 .435.055.868.161 1.29h3.496a.86.86 0 0 0 .858-.858V9.438z" opacity=".2"/><path fill="#4B53BC" d="M2.54 6.858h8.6a.86.86 0 0 1 .86.86v8.6a.86.86 0 0 1-.86.86h-8.6a.86.86 0 0 1-.86-.86v-8.6a.86.86 0 0 1 .86-.86"/><path fill="#fff" d="M9.407 10.067H7.48v5.172H6.213v-5.173h-1.94v-1.27h5.134z"/></svg>
    );
  },
);

MicrosoftTeams.displayName = 'MicrosoftTeams';
