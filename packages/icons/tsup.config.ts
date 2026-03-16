import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: {
      index: 'src/index.ts',
      'line/index': 'src/line/index.ts',
      'solid/index': 'src/solid/index.ts',
      'social/index': 'src/social/index.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    clean: true,
    external: ['react'],
    treeshake: true,
    splitting: true,
    esbuildOptions(options) {
      options.jsx = 'automatic';
    },
  },
]);
