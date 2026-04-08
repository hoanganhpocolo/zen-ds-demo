import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const Beer = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M11.5 1a5.5 5.5 0 0 1 4.918 3.042Q16.704 4 17 4a4 4 0 0 1 3.444 6.032A3 3 0 0 1 23 13v2a3 3 0 0 1-3 3h-1v1.2c0 .75-.384 1.364-.863 1.817-.477.45-1.113.81-1.816 1.091C14.91 22.673 13.028 23 11 23s-3.91-.327-5.321-.892c-.703-.28-1.34-.64-1.816-1.091C3.385 20.564 3 19.95 3 19.2v-7.959a4.5 4.5 0 0 1 4.046-7.966A5.5 5.5 0 0 1 11.5 1m-3.168 9.993A4.48 4.48 0 0 1 5 11.971v7.23c0 .023.008.146.237.363.232.219.621.462 1.185.687C7.544 20.7 9.162 21 11 21s3.456-.3 4.578-.749c.564-.225.953-.468 1.185-.687.229-.217.237-.34.237-.364V12a3.97 3.97 0 0 1-2.507-.889A5.47 5.47 0 0 1 11.5 12a5.47 5.47 0 0 1-3.168-1.007M10 18H8v-4h2zm4 0h-2v-4h2zm5-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1zM11.5 3a3.5 3.5 0 0 0-3.167 2.007 1 1 0 0 1-1.456.406 2.5 2.5 0 1 0 .604 3.61l.07-.082a1 1 0 0 1 1.44-.004A3.5 3.5 0 0 0 11.5 10c.928 0 1.77-.362 2.398-.954l.082-.07a1 1 0 0 1 1.41.205c.367.499.951.819 1.61.819a2 2 0 1 0-.787-3.84 1 1 0 0 1-1.354-.64A3.5 3.5 0 0 0 11.5 3"/></svg>
    );
  },
);

Beer.displayName = 'Beer';
