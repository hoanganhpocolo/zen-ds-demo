/**
 * SVG → React component generator for @zen/icons
 *
 * Reads SVGs from svg/{line,solid,social,file}/, optimizes with SVGO,
 * and generates React components in src/{line,solid,social,file}/.
 *
 * Naming:
 *   icon-chevron-down-line.svg → ChevronDown.tsx
 *   Type=PDF.svg               → FilePdf.tsx  (file category)
 */

import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { optimize } from 'svgo';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ── Helpers ──

function kebabToPascal(str) {
  return str
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}

function extractIconName(filename, category) {
  // Remove prefix and suffix
  let name = filename.replace(/\.svg$/, '');

  if (category === 'file') {
    // Type=PDF.svg → FilePdf
    // Type=Zip.svg → FileZip
    const typeMatch = name.match(/Type=(.+)/);
    if (typeMatch) {
      const raw = typeMatch[1].replace(/[^a-zA-Z0-9]/g, '');
      return 'File' + raw.charAt(0).toUpperCase() + raw.slice(1);
    }
    return 'File' + kebabToPascal(name.replace(/^file-?/, ''));
  }

  if (category === 'social') {
    // ic-Social=Pinterest,Style=Original.svg → Pinterest
    // ic-Social=Pinterest,Style=Black.svg → PinterestBlack
    const socialMatch = name.match(/ic-Social=([^,]+),Style=(.+)/);
    if (socialMatch) {
      let [, brand, style] = socialMatch;
      // Remove spaces, parens, dots — keep only valid identifier chars
      brand = brand.replace(/[^a-zA-Z0-9]/g, '');
      style = style.replace(/[^a-zA-Z0-9]/g, '');
      return style === 'Original' ? brand : brand + style;
    }
    return kebabToPascal(name.replace(/^ic-/, '').replace(/[^a-zA-Z0-9-]/g, ''));
  }

  // icon-chevron-down-line.svg → chevron-down
  // icon-chevron-down-solid.svg → chevron-down
  name = name
    .replace(/^icon-/, '')
    .replace(/-(line|solid)$/, '');

  return kebabToPascal(name);
}

function optimizeSvg(svgString) {
  const result = optimize(svgString, {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      'removeDimensions',
      {
        name: 'removeAttrs',
        params: { attrs: '(xmlns|class|data-.*)' },
      },
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [
            { fill: 'none' },
            { width: '{size}' },
            { height: '{size}' },
            { 'aria-hidden': '{ariaHidden}' },
          ],
        },
      },
    ],
  });
  return result.data;
}

function svgToJsx(svgContent) {
  return svgContent
    // Convert inline style="..." strings to JSX style objects
    .replace(/style="([^"]*)"/g, (_, css) => {
      const obj = css.split(';').filter(Boolean).map((rule) => {
        const [prop, ...vals] = rule.split(':');
        const key = prop.trim().replace(/-([a-z])/g, (__, c) => c.toUpperCase());
        return `${key}:${JSON.stringify(vals.join(':').trim())}`;
      }).join(',');
      return `style={{${obj}}}`;
    })
    // Replace fill="#141414" or fill="black" with currentColor
    .replace(/fill="#141414"/g, 'fill="currentColor"')
    .replace(/fill="black"/g, 'fill="currentColor"')
    .replace(/fill="#000000"/g, 'fill="currentColor"')
    .replace(/fill="#000"/g, 'fill="currentColor"')
    // Keep fill="none" and fill="white" as-is
    // Convert SVG attributes to JSX
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/clip-path=/g, 'clipPath=')
    .replace(/fill-opacity=/g, 'fillOpacity=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/stroke-dasharray=/g, 'strokeDasharray=')
    .replace(/stroke-dashoffset=/g, 'strokeDashoffset=')
    .replace(/stroke-miterlimit=/g, 'strokeMiterlimit=')
    .replace(/stroke-opacity=/g, 'strokeOpacity=')
    .replace(/stop-color=/g, 'stopColor=')
    .replace(/stop-opacity=/g, 'stopOpacity=')
    // Replace placeholder attributes
    .replace('width="{size}"', 'width={size}')
    .replace('height="{size}"', 'height={size}')
    .replace('aria-hidden="{ariaHidden}"', 'aria-hidden={ariaHidden}')
    // Spread props onto svg element
    .replace('<svg ', '<svg {...rest} ')
    // Replace stroke colors
    .replace(/stroke="#141414"/g, 'stroke="currentColor"')
    .replace(/stroke="black"/g, 'stroke="currentColor"')
    .replace(/stroke="#000000"/g, 'stroke="currentColor"')
    .replace(/stroke="#000"/g, 'stroke="currentColor"');
}

// ── File icon helpers (colored, 32×40 viewBox) ──

function optimizeSvgFile(svgString) {
  const result = optimize(svgString, {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      'removeDimensions',
      {
        name: 'removeAttrs',
        params: { attrs: '(xmlns|class|data-.*)' },
      },
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [
            { width: '{width}' },
            { height: '{height}' },
          ],
        },
      },
    ],
  });
  return result.data;
}

function svgToJsxFile(svgContent) {
  return svgContent
    // Convert inline style="..." strings to JSX style objects
    .replace(/style="([^"]*)"/g, (_, css) => {
      const obj = css.split(';').filter(Boolean).map((rule) => {
        const [prop, ...vals] = rule.split(':');
        const key = prop.trim().replace(/-([a-z])/g, (__, c) => c.toUpperCase());
        return `${key}:${JSON.stringify(vals.join(':').trim())}`;
      }).join(',');
      return `style={{${obj}}}`;
    })
    // Convert SVG attributes to JSX (no color→currentColor — keep branded colors)
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/clip-path=/g, 'clipPath=')
    .replace(/fill-opacity=/g, 'fillOpacity=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/stroke-dasharray=/g, 'strokeDasharray=')
    .replace(/stroke-dashoffset=/g, 'strokeDashoffset=')
    .replace(/stroke-miterlimit=/g, 'strokeMiterlimit=')
    .replace(/stroke-opacity=/g, 'strokeOpacity=')
    .replace(/stop-color=/g, 'stopColor=')
    .replace(/stop-opacity=/g, 'stopOpacity=')
    // Replace placeholder attributes
    .replace('width="{width}"', 'width={width}')
    .replace('height="{height}"', 'height={height}')
    // Spread props onto svg element
    .replace('<svg ', '<svg {...rest} ');
}

function generateFileComponent(componentName, jsxContent) {
  return `import { forwardRef, type SVGAttributes } from 'react';

export interface FileIconProps extends SVGAttributes<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const ${componentName} = forwardRef<SVGSVGElement, FileIconProps>(
  ({ width = 32, height = 40, ...rest }, ref) => {
    return (
      ${jsxContent.replace('<svg ', '<svg ref={ref} ')}
    );
  },
);

${componentName}.displayName = '${componentName}';
`;
}

function generateComponent(componentName, jsxContent) {
  return `import { forwardRef, type SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: number | string;
}

export const ${componentName} = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, ...rest }, ref) => {
    const ariaHidden = !rest['aria-label'];
    return (
      ${jsxContent.replace('<svg ', '<svg ref={ref} ')}
    );
  },
);

${componentName}.displayName = '${componentName}';
`;
}

// ── Main ──

const CATEGORIES = ['line', 'solid', 'social', 'file'];
const stats = { line: 0, solid: 0, social: 0, file: 0, errors: 0 };

for (const category of CATEGORIES) {
  const svgDir = join(ROOT, 'svg', category);
  const srcDir = join(ROOT, 'src', category);

  if (!existsSync(svgDir)) continue;

  // Clean and recreate src dir
  mkdirSync(srcDir, { recursive: true });

  const files = readdirSync(svgDir).filter((f) => f.endsWith('.svg'));
  const exports = [];
  const seenNames = new Map();

  for (const file of files) {
    try {
      const svgRaw = readFileSync(join(svgDir, file), 'utf-8');
      const componentName = extractIconName(file, category);

      // Handle duplicates
      if (seenNames.has(componentName)) {
        const count = seenNames.get(componentName) + 1;
        seenNames.set(componentName, count);
        // Skip duplicates — keep the first one
        continue;
      }
      seenNames.set(componentName, 1);

      const isFile = category === 'file';
      const optimized = isFile ? optimizeSvgFile(svgRaw) : optimizeSvg(svgRaw);
      const jsx = isFile ? svgToJsxFile(optimized) : svgToJsx(optimized);
      const component = isFile
        ? generateFileComponent(componentName, jsx)
        : generateComponent(componentName, jsx);

      writeFileSync(join(srcDir, `${componentName}.tsx`), component);
      exports.push(componentName);
      stats[category]++;
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
      stats.errors++;
    }
  }

  // Generate index.ts for this category
  const typeExport = category === 'file' ? 'FileIconProps' : 'IconProps';
  const indexContent = exports
    .sort()
    .map((name) => `export { ${name} } from './${name}';`)
    .join('\n') + '\n\nexport type { ' + typeExport + ' } from \'./' + exports[0] + '\';\n';

  writeFileSync(join(srcDir, 'index.ts'), indexContent);
  console.log(`✓ ${category}: ${exports.length} components`);
}

// Generate root index.ts
const rootIndex = CATEGORIES.map(
  (cat) => `export * as ${cat} from './${cat}/index';`,
).join('\n') + '\n\n// Re-export line as default (most common)\nexport * from \'./line/index\';\n';

writeFileSync(join(ROOT, 'src', 'index.ts'), rootIndex);

console.log(`\nDone! ${stats.line + stats.solid + stats.social + stats.file} icons generated (${stats.errors} errors)`);
