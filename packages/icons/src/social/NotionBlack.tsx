import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const NotionBlack = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M5.515 5.299c.641.52.882.481 2.088.4l11.365-.682c.24 0 .04-.24-.04-.28L17.04 3.372c-.362-.28-.844-.602-1.768-.522L4.27 3.653c-.401.04-.482.241-.322.401zm.682 2.648v11.958c0 .642.32.883 1.044.843l12.49-.723c.723-.04.804-.481.804-1.003V7.144c0-.521-.2-.802-.644-.763L6.84 7.144c-.481.04-.642.281-.642.803m12.33.641c.08.361 0 .723-.362.764l-.602.12V18.3c-.522.281-1.004.442-1.406.442-.643 0-.804-.201-1.285-.802l-3.937-6.18v5.979l1.246.282s0 .722-1.005.722l-2.77.16c-.08-.16 0-.562.28-.642l.723-.2v-7.906l-1.002-.08c-.08-.362.12-.883.682-.923l2.972-.2 4.097 6.26V9.67l-1.045-.119c-.08-.442.241-.763.643-.802zM3.345 2.57l11.447-.843c1.405-.12 1.767-.04 2.65.602l3.654 2.568c.602.441.803.562.803 1.043v14.085c0 .883-.32 1.406-1.444 1.485l-13.294.803c-.843.04-1.245-.08-1.687-.643l-2.691-3.49c-.482-.643-.682-1.123-.682-1.686V3.973c0-.721.321-1.324 1.244-1.403"/></svg>
    );
  },
);

NotionBlack.displayName = 'NotionBlack';
