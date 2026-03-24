import { forwardRef, type SVGAttributes } from 'react';

export interface FileIconProps extends SVGAttributes<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const FileAudio = forwardRef<SVGSVGElement, FileIconProps>(
  ({ width = 32, height = 40, ...rest }, ref) => {
    return (
      <svg ref={ref} {...rest} fill="none" viewBox="0 0 32 40" width={width} height={height}><path fill="#000" fillOpacity=".267" fillRule="evenodd" d="M4.267 0C1.91 0 0 1.925 0 4.3v31.4C0 38.075 1.91 40 4.267 40h23.466C30.09 40 32 38.075 32 35.7V13.36c0-.993-.34-1.955-.964-2.723l-7.356-9.06A4.25 4.25 0 0 0 20.378 0zM16 13.992c-1.57 0-2.844 1.283-2.844 2.866v5.017c0 1.583 1.273 2.867 2.844 2.867s2.844-1.284 2.844-2.867v-5.017c0-1.583-1.273-2.866-2.844-2.866m-4.267 6.45a.714.714 0 0 0-.71-.717.714.714 0 0 0-.712.717v1.433c0 2.924 2.172 5.336 4.978 5.689v.761h-2.133a.714.714 0 0 0-.712.717c0 .395.319.716.712.716h5.688c.393 0 .712-.32.712-.716a.714.714 0 0 0-.712-.717h-2.133v-.761c2.806-.353 4.978-2.765 4.978-5.689v-1.433a.714.714 0 0 0-.711-.717.714.714 0 0 0-.711.717v1.433c0 2.375-1.91 4.3-4.267 4.3-2.356 0-4.267-1.925-4.267-4.3z" clipRule="evenodd"/></svg>
    );
  },
);

FileAudio.displayName = 'FileAudio';
