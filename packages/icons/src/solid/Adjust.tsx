import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Adjust = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14.082 1.358a3 3 0 0 1 4.033 1.67l.8 2.106 2.107.802a3 3 0 0 1 1.671 4.033l-.924 2.056.924 2.057a3 3 0 0 1-1.67 4.033l-2.107.8-.801 2.107a3 3 0 0 1-4.033 1.67l-2.057-.923-2.056.924a3 3 0 0 1-4.033-1.67l-.8-2.108-2.107-.8a3 3 0 0 1-1.67-4.033l.922-2.057-.923-2.056a3 3 0 0 1 1.67-4.033l2.107-.802.801-2.105A3 3 0 0 1 9.97 1.358l2.056.923zM11.013 6.93l-3.4 9-.102.27h2.032l.8-2.3h3.366l.8 2.3h1.98l-.102-.27-3.399-9-.049-.13h-1.877zm2.057 5.27h-2.139L12 9.118z"/></svg>
    );
  },
);

Adjust.displayName = 'Adjust';
