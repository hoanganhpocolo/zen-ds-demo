import { forwardRef, type SVGAttributes } from 'react';

export interface FileIconProps extends SVGAttributes<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const FileZip = forwardRef<SVGSVGElement, FileIconProps>(
  ({ width = 32, height = 40, ...rest }, ref) => {
    return (
      <svg ref={ref} {...rest} fill="none" viewBox="0 0 32 40" width={width} height={height}><path fill="#6046CC" d="M7.214 34.869c.592.829 1.98.829 2.555 0a1.58 1.58 0 0 0 .22-1.42l-.39-1.117H7.384l-.372 1.116a1.57 1.57 0 0 0 .203 1.42"/><path fill="#6046CC" fillRule="evenodd" d="M4 0a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V12.996a4 4 0 0 0-.982-2.625l-7.822-8.996A4 4 0 0 0 20.177 0zm6.242 25.905v3.755l1.134 3.315c.321.93.169 1.962-.406 2.756A3.05 3.05 0 0 1 8.5 37a3.02 3.02 0 0 1-2.47-1.269 3.02 3.02 0 0 1-.406-2.756l1.133-3.315v-3.755c0-.406.322-.727.728-.727h2.03a.72.72 0 0 1 .727.727M4 7.08V5.017L9.498 5v2.808h2.775c.389 0 .727.338.727.744v1.59a.75.75 0 0 1-.727.744H9.498v3.061h2.775c.389 0 .727.322.727.728v1.606a.733.733 0 0 1-.727.728H9.498v3.06h2.775c.389 0 .727.339.727.728v1.607a.733.733 0 0 1-.727.727H8.229a.736.736 0 0 1-.744-.727V20.07H4.727A.72.72 0 0 1 4 19.343v-1.607c0-.406.321-.727.727-.727h2.758v-3.062H4.727A.736.736 0 0 1 4 13.203v-1.59c0-.406.321-.727.727-.727h2.758V7.808H4.727A.72.72 0 0 1 4 7.08" clipRule="evenodd"/></svg>
    );
  },
);

FileZip.displayName = 'FileZip';
