import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Fingerprint = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M13.065 11.066c.635 1.453.59 3.512.044 5.462-.552 1.977-1.669 4.033-3.406 5.472l-1.349-1.484c1.35-1.117 2.29-2.791 2.767-4.495.484-1.73.438-3.3.045-4.198zm3.66 6.46c-.337 1.608-1.144 3.287-2.34 4.427l-1.453-1.39c.911-.87 1.52-2.199 1.776-3.423zm-9.437-6.784c.64-2.852 3.118-4.782 6.115-4.259 4.005.7 4.994 4.583 3.836 8.098l-2.017-.385c.6-2.373.591-5.296-2.19-5.781-1.944-.34-3.33.946-3.731 2.738-.682 3.043-.028 6.916-3.413 8.53l-.92-1.756c2.443-1.166 1.82-4.953 2.32-7.185M7.44 3.75c2.362-1.462 4.734-1.973 6.894-1.664 2.157.308 4.007 1.42 5.342 3.04 2.666 3.232 3.28 8.439.561 13.627l-1.84-.88c2.425-4.625 1.754-8.995-.338-11.532-1.044-1.266-2.442-2.086-4.03-2.313-1.586-.227-3.458.124-5.47 1.37zM5.834 7.958c-1.388 2.648-.335 5.891-2.122 8.448L2 15.316c1.652-2.365.657-5.686 1.993-8.236z"/></svg>
    );
  },
);

Fingerprint.displayName = 'Fingerprint';
