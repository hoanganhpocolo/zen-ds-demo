import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const UsersDown = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      <svg ref={ref} {...rest} fill="none" aria-hidden={ariaHidden} viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M14 15H9a6 6 0 0 0-5.917 5H13.5v2H2a1 1 0 0 1-1-1 8 8 0 0 1 8-8h5zm6 3.586L21.586 17 23 18.414l-3.293 3.293a1 1 0 0 1-1.414 0L15 18.414 16.414 17 18 18.586V14.5h2zM15 2a4.75 4.75 0 1 1-3 8.43 4.75 4.75 0 1 1 0-7.362A4.73 4.73 0 0 1 15 2M9 4a2.75 2.75 0 1 0 2.297 4.259 3 3 0 0 0 .096-.158l.03-.052a3 3 0 0 0 .107-.222l.017-.043a3 3 0 0 0 .07-.193l.02-.07a3 3 0 0 0 .044-.167l.02-.09q.016-.093.026-.187l.008-.065a3 3 0 0 0 .015-.262q-.002-.166-.023-.328a3 3 0 0 0-.027-.188l-.018-.086a2.7 2.7 0 0 0-.397-.926A2.75 2.75 0 0 0 9 4m6 0c-.665 0-1.275.235-1.751.629a4.7 4.7 0 0 1 .334.875l.022.082.022.094q.02.084.036.17.016.075.027.15l.01.068q.011.078.02.157l.007.07q.007.067.011.136.004.044.006.089a5 5 0 0 1 0 .45l-.003.061a5 5 0 0 1-.021.243q-.008.075-.018.149l-.012.076q-.01.068-.024.136-.007.042-.017.086a4 4 0 0 1-.076.311l-.026.09-.031.1-.034.096-.039.112-.027.069-.05.123-.011.024q-.052.114-.106.224A2.75 2.75 0 1 0 15 4"/></svg>
    );
  },
);

UsersDown.displayName = 'UsersDown';
