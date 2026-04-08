import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const CheckVerified = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" fillRule="evenodd" d="M14.082 1.358a3 3 0 0 1 4.033 1.67l.8 2.106 2.107.802a3 3 0 0 1 1.67 4.033l-.923 2.056.924 2.056a3 3 0 0 1-1.67 4.034l-2.107.8-.801 2.107a3 3 0 0 1-4.033 1.67l-2.057-.923-2.056.924a3 3 0 0 1-4.033-1.67l-.8-2.109-2.107-.8a3 3 0 0 1-1.671-4.033l.923-2.056-.923-2.056a3 3 0 0 1 1.67-4.033l2.107-.802.801-2.105a3 3 0 0 1 4.033-1.671l2.056.923zM10.968 13.09l-2.263-2.249-1.41 1.42 2.968 2.948a1 1 0 0 0 1.41 0l5.032-5-1.41-1.419z" clipRule="evenodd"/></svg>
    );
  },
);

CheckVerified.displayName = 'CheckVerified';
