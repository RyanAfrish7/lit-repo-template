const typescript = require('@rollup/plugin-typescript');
const rollupLitSass = require('rollup-plugin-lit');

export default {
  input: './src/sample-component.ts',
  output: {
    dir: 'dist',
    sourcemap: 'inline'
  },
  plugins: [
    typescript({ outDir: "dist" }),
    rollupLitSass({}),
  ]
}
