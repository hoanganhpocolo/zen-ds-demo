import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CheckVerified = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="m16.705 10.21-5.032 5a1 1 0 0 1-1.41 0l-2.967-2.95 1.409-1.419 2.263 2.25 4.328-4.3z"/><path fill="currentColor" fillRule="evenodd" d="M14.082 1.358a3 3 0 0 1 4.033 1.67l.8 2.106 2.107.802a3 3 0 0 1 1.671 4.033l-.924 2.056.924 2.057a3 3 0 0 1-1.67 4.033l-2.107.8-.801 2.107a3 3 0 0 1-4.033 1.671l-2.057-.924-2.056.924a3 3 0 0 1-4.033-1.67l-.8-2.108-2.107-.8a3 3 0 0 1-1.671-4.033l.923-2.057-.923-2.056a3 3 0 0 1 1.67-4.033l2.107-.802.801-2.105A3 3 0 0 1 9.97 1.358l2.056.923zm2.164 2.38a1 1 0 0 0-1.345-.556L12.435 4.29a1 1 0 0 1-.82 0L9.15 3.182a1 1 0 0 0-1.344.557l-.96 2.526a1 1 0 0 1-.58.58l-2.527.96a1 1 0 0 0-.557 1.345l1.108 2.466a1 1 0 0 1 0 .82L3.182 14.9a1 1 0 0 0 .557 1.344l2.526.96.098.044a1 1 0 0 1 .482.536l.96 2.527a1 1 0 0 0 1.345.557l2.466-1.108.1-.038a1 1 0 0 1 .72.038l2.464 1.11a1 1 0 0 0 1.344-.557l.96-2.527a1 1 0 0 1 .58-.58l2.527-.96a1 1 0 0 0 .557-1.344l-1.108-2.466a1 1 0 0 1 0-.82l1.11-2.466a1 1 0 0 0-.557-1.344l-2.527-.96a1 1 0 0 1-.58-.58z" clipRule="evenodd"/></svg>
    );
  },
);

CheckVerified.displayName = 'CheckVerified';
