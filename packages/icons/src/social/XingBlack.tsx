import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const XingBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M16.803 2.247c.16-.287.352-.567.797-.567h3.007c.18 0 .32.068.396.19.078.127.076.295-.006.46l-6.591 11.653a.02.02 0 0 0 0 .02l4.196 7.667c.083.165.085.333.006.46-.076.122-.216.19-.395.19H15.24c-.456 0-.684-.303-.832-.567l-4.23-7.76c.212-.373 6.625-11.746 6.625-11.746M4.687 5.942c.076-.123.227-.186.406-.186H8.07c.457 0 .68.294.829.558l2.046 3.569-3.213 5.683c-.152.275-.367.575-.812.575H3.943a.44.44 0 0 1-.389-.203c-.078-.127-.082-.292 0-.457L6.717 9.9q.004-.008 0-.017L4.704 6.399c-.083-.166-.095-.33-.017-.457"/></svg>
    );
  },
);

XingBlack.displayName = 'XingBlack';
