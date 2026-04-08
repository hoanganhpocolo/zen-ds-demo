import { forwardRef, type SVGAttributes } from 'react';

export interface FileIconProps extends SVGAttributes<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const FileMedia = forwardRef<SVGSVGElement, FileIconProps>(
  ({ width = 32, height = 40, ...rest }, ref) => {
    return (
      <svg ref={ref} {...rest} fill="none" viewBox="0 0 32 40" width={width} height={height}><path fill="#000" fillOpacity=".267" fillRule="evenodd" d="M4.267 0C1.91 0 0 1.925 0 4.3v31.4C0 38.075 1.91 40 4.267 40h23.466C30.09 40 32 38.075 32 35.7V13.36c0-.993-.34-1.955-.964-2.723l-7.356-9.06A4.25 4.25 0 0 0 20.378 0zm9.604 15.283a10 10 0 0 0-.706-.449c-.203-.11-.48-.237-.805-.217a1.42 1.42 0 0 0-1.05.566c-.196.261-.246.564-.267.796-.02.23-.02.52-.02.84V26.93c0 .321 0 .61.02.841.021.232.071.535.267.796.251.334.635.541 1.05.566.324.02.602-.107.805-.217.202-.11.44-.271.706-.45l7.527-5.056a9 9 0 0 0 .573-.407c.161-.131.351-.313.46-.579a1.44 1.44 0 0 0 0-1.098 1.5 1.5 0 0 0-.46-.579 8 8 0 0 0-.573-.407z" clipRule="evenodd"/></svg>
    );
  },
);

FileMedia.displayName = 'FileMedia';
