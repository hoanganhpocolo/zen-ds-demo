import { forwardRef, type SVGAttributes } from 'react';

export interface FileIconProps extends SVGAttributes<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const FileSheet = forwardRef<SVGSVGElement, FileIconProps>(
  ({ width = 32, height = 40, ...rest }, ref) => {
    return (
      <svg ref={ref} {...rest} fill="none" viewBox="0 0 32 40" width={width} height={height}><path fill="#3B9C3F" d="M9 30v-9h3v10h-2a1 1 0 0 1-1-1m0-11h3v-3h-2a1 1 0 0 0-1 1zm5 12V21h9v9a1 1 0 0 1-1 1zm0-12h9v-2a1 1 0 0 0-1-1h-8z"/><path fill="#3B9C3F" fillRule="evenodd" d="M4 0a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V12.996a4 4 0 0 0-.982-2.625l-7.822-8.996A4 4 0 0 0 20.177 0zm6 14a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V17a3 3 0 0 0-3-3z" clipRule="evenodd"/></svg>
    );
  },
);

FileSheet.displayName = 'FileSheet';
