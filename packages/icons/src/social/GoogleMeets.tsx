import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const GoogleMeets = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="#00832D" d="m13.356 12 2.012 2.192 2.705 1.648.472-3.826-.472-3.742-2.757 1.448z"/><path fill="#0066DA" d="M1.68 15.485v3.26c0 .745.633 1.349 1.415 1.349h3.42l.708-2.464-.708-2.145-2.347-.675z"/><path fill="#E94235" d="M6.515 3.906 1.68 8.515l2.488.674 2.347-.674.696-2.116z"/><path fill="#2684FC" d="M6.515 8.515H1.68v6.97h4.835z"/><path fill="#00AC47" d="m21.162 5.858-3.09 2.414v7.568l3.104 2.426c.465.347 1.144.03 1.144-.532V6.379c0-.57-.695-.882-1.158-.521M13.355 12v3.485h-6.84v4.61h10.142c.782 0 1.415-.604 1.415-1.35V15.84z"/><path fill="#FFBA00" d="M16.657 3.906H6.515v4.609h6.84V12l4.717-3.726v-3.02c0-.745-.633-1.348-1.415-1.348"/></svg>
    );
  },
);

GoogleMeets.displayName = 'GoogleMeets';
